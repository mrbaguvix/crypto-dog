import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import * as CyptoIcon from 'react-cryptocoins';

import useStyles from './styles';

// Available exchange assets
enum ASSETS {
  'NGN' = '\u20A6', // ₦
  'USD' = '$',
  'BTC' = 'BTC',
  'LTC' = 'LTC',
};

// if(typeof __DEV__=== undefined)
let __DEV__:boolean = true;

const CryptoBtn =(props:any)=> (
  <Button
    {...props}
      variant="contained"
      color="primary"
      size="small"
    >
      {props.label}
    </Button>
)

function Home() {
  const styles = useStyles();

  const [localAsset, setLocalAsset] = React.useState(__DEV__ ? ASSETS.USD : '');
  const [exAsset, setExAsset] = React.useState(__DEV__ ? ASSETS.BTC : '');
  return (
    <>
      <CryptoBtn
        className={styles.crytoButton}
        startIcon={<CyptoIcon.Eth />}
        label={'BTC'}
      />
      <CryptoBtn
        className={styles.crytoButton}
        startIcon={<CyptoIcon.Ltc />}
        label={'LTC'}
      />
    <PriceCard styles={styles} 
      LASSET={localAsset} 
      XASSET={exAsset}
      amount_buy={'50,000.00'}
      amount_sell={'49,000.00'} />
    </>
  );
}

const PriceCard = (
  {styles, amount_buy, amount_sell, XASSET, LASSET
  }) => {
  const strongValue =(value) => <span style={{fontWeight: 'bold'}}>{value}</span>
  return (
    <Card className={styles.root}>
      <CardContent>
        <div style={{marginBottom: 18}}>
          <Typography className={styles.title} color="textSecondary" gutterBottom>
            Buy Price
          </Typography>
          <Typography variant="h5" component="h2">
          {strongValue(LASSET + amount_buy)}/{XASSET}
          </Typography>
        </div>
        <Divider />
        <div style={{marginTop: 18}}>
          <Typography className={styles.title} color="textSecondary" gutterBottom>
            Sell Price
          </Typography>
          <Typography variant="h5" component="h2">
            {strongValue(LASSET + amount_sell)}/{XASSET}
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default Home;
