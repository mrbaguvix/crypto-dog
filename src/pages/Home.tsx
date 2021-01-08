import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';

import * as CyptoIcon from 'react-cryptocoins';

import {
  formatMoney, ASSETS, CryptoETH, CryptoBTC, CryptoLTC, AssetI
} from '../utils'

import useStyles from './styles';

// if(typeof __DEV__=== undefined)
const __DEV__:boolean = true;

interface CardProps {
  amount_buy: string;
  amount_sell: string;
  lAssetDiff: number;
  XASSET: any;
  LASSET: string;
}

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

const exAssetData = []

function Home() {
  const cssStyles = useStyles();
  // In DEV ENV we set default exchange asset state to BTC
  const [exAsset, setExAsset] = React.useState<AssetI|null>(__DEV__ ? CryptoBTC : null);

  const amountBuy = formatMoney(50125.31);
  const amountSell = formatMoney(46050.67);

  React.useEffect(()=>{
    const xAsset = localStorage.getItem('@X_ASSET');
    setExAsset(CryptoBTC);
    if(xAsset !== null) changeExAsset(JSON.parse(xAsset));
  },[]);

  const changeExAsset = (xAsset:any) => {
    setExAsset(xAsset);
    localStorage.setItem('@X_ASSET', JSON.stringify(xAsset));
  };

  return (
    <>
      <div style={{marginTop: 10}}>
        <CryptoBtn
          className={cssStyles.crytoButtonErst}
          startIcon={<CyptoIcon.Btc />}
          label={ASSETS.BTC}
          onClick={()=>changeExAsset(CryptoBTC)}
        />
        <CryptoBtn
          className={cssStyles.crytoButton}
          startIcon={<CyptoIcon.Eth />}
          label={ASSETS.ETH}
          onClick={()=>changeExAsset(CryptoETH)}
        />
        <CryptoBtn
          className={cssStyles.crytoButton}
          startIcon={<CyptoIcon.Ltc />}
          label={ASSETS.LTC}
          onClick={()=>changeExAsset(CryptoLTC)}
        />
      </div>
      <PriceCard
        LASSET={ASSETS.NGN} 
        XASSET={exAsset}
        lAssetDiff={4.31}
        amount_buy={amountBuy}
        amount_sell={amountSell} />
    </>
  );
}


const PriceCard = (
  {amount_buy, amount_sell, lAssetDiff, XASSET, LASSET
  }: CardProps) => {
    const styles = useStyles();
  const strongValue =(value:string) => <span className={styles.bold}>{value}</span>
  return (
    <Card className={styles.root}>
      <CardContent>
        <div className={styles.assetMeta}>
          {
            XASSET.symbol === 'BTC' ? 
            (<CyptoIcon.Btc />) : XASSET.symbol === 'LTC' ? 
            (<CyptoIcon.Ltc />) : XASSET.symbol === 'ETH' ? 
            (<CyptoIcon.Eth />) : null }
          <span className={styles.assetMetaName}>{XASSET.title}</span>
          <span className={styles.assetMetaSymbol}>({XASSET.symbol})</span>
        </div>
        <div style={{marginBottom: 18}}>
          <Typography className={styles.title} color="textSecondary" gutterBottom={true}>
            Buy Price
          </Typography>
          <Typography variant="h5" component="h2">
          {strongValue(LASSET + amount_buy)}
          <div className={styles.percentDiff}>
            <span>{lAssetDiff}%</span>
            <TrendingUpIcon fontSize="small"/>
          </div>
          </Typography>
        </div>
        <Divider />
        <div style={{marginTop: 18}}>
          <Typography className={styles.title} color="textSecondary" gutterBottom={true}>
            Sell Price
          </Typography>
          <Typography variant="h5" component="h2">
            {strongValue(LASSET + amount_sell)}
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default Home;
