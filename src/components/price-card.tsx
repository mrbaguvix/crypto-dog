import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';

import * as CyptoIcon from 'react-cryptocoins';

import useStyles from './styles';

interface CardProps {
    amount_buy: string;
    amount_sell: string;
    lAssetDiff: number;
    XASSET: any;
    LASSET: string;
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
  };

  export default PriceCard;
