import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import * as CyptoIcon from 'react-cryptocoins';

import useStyles from './styles';

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

function App() {
  const styles = useStyles();
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
    <Card className={styles.root}>
      <CardContent>
        <Typography className={styles.title} color="textSecondary" gutterBottom>
          Buy Price
        </Typography>
        <Typography variant="h5" component="h2">
          50,000.00/LTC
        </Typography>
      </CardContent>
    </Card>
    </>
  );
}

export default App;
