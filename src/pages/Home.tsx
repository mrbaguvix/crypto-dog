import React from 'react';

import Button from '@material-ui/core/Button';
import * as CyptoIcon from 'react-cryptocoins';

import Container from '@material-ui/core/Container';
import PriceCard from '../components/price-card';
import TradesTable from  '../components/trades-table';

import TransactionData from '../data/transactions.json';

import {
  formatMoney, ASSETS, CryptoETH, CryptoBTC, CryptoLTC, AssetI
} from '../utils';

import useStyles from './styles';

// if(typeof __DEV__=== undefined)
const __DEV__:boolean = true;

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
  const [localAsset, setLocalAsset] = React.useState(__DEV__ ? ASSETS.USD : '');
  // In DEV ENV we set default exchange asset state to BTC
  const [exAsset, setExAsset] = React.useState<AssetI|null>(__DEV__ ? CryptoBTC : null);

  const amountBuy = formatMoney(50125.31);
  const amountSell = formatMoney(46050.67);

  const changeLocalAsset = (lAsset:string) => {
    setLocalAsset(lAsset);
    localStorage.setItem('@LOCAL_ASSET', lAsset);
  };
  
  const changeExAsset = (xAsset:any) => {
    setExAsset(xAsset);
    localStorage.setItem('@X_ASSET', JSON.stringify(xAsset));
  };

  React.useEffect(()=>{
    const lAsset = localStorage.getItem('@LOCAL_ASSET');
    const xAsset = localStorage.getItem('@X_ASSET');
    setLocalAsset(ASSETS.NGN);
    setExAsset(CryptoBTC);
    if(lAsset !== null) changeLocalAsset(ASSETS.USD);
    if(xAsset !== null) changeExAsset(JSON.parse(xAsset));
  },[]);

  return (
    <>
    <Container maxWidth="sm">
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
        LASSET={localAsset} 
        XASSET={exAsset}
        lAssetDiff={4.31}
        amount_buy={amountBuy}
        amount_sell={amountSell} />
    </Container>
    <TradesTable data={TransactionData}/>
    </>
  );
}




export default Home;
