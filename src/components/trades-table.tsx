import React from 'react';

import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import {
    formatMoney, formatStrMoney, ASSETS
  } from '../utils';

import useStyles from './styles';
import './table.css'; // this overrides certain table css properties

interface Props {
    data: any
};

  

export default ((props:Props)=>{
    const styles = useStyles();

    const _data = props.data.data;
    if(_data) {
        
    const rootData = _data.currentUser.transactions.edges;
    const coinData = rootData.filter((i: { node: { detail: { cryptocurrency: string; }; }; }) => i.node.detail.cryptocurrency !== 'ethereum') // show only LTC

    const filDepositTrx = coinData.filter((i: { node: { code: string; detail: { paymentType: string; }; }; })=> i.node.code === 'deposit' && i.node.detail.paymentType === 'deposit' );
    const filWithdrawalTrx = coinData.filter((i: { node: { detail: { paymentType: string; }; }; })=> i.node.detail.paymentType === 'withdrawal' );
    const reducer = (sum:any, val:any) => sum + val
    const totalWallDeposit = filDepositTrx.map((i: { node: { amount: string; }; })=> Number(i.node.amount.replace('-',''))).reduce(reducer, 0);
    const totalWallWithdrawal = filWithdrawalTrx.map((i: { node: { amount: string; }; })=> Number(i.node.amount.replace('-',''))).reduce(reducer, 0);
    const totalBought = filDepositTrx.map((i: { node: { amount: any; }; })=> Number(i.node.amount)).reduce(reducer, 0);
    return(
        <>
        <Typography gutterBottom={true} variant="h4" style={{marginTop:20, textAlign: 'center'}}>
          Trades
        </Typography>
        <div style={{paddingRight: 26, paddingLeft: 26}}>
        <Container maxWidth="lg">
            <Paper elevation={3} style={{marginBottom:20, marginTop: 20, width: 230, padding: 10}}>
                <Typography>Total Wallet Deposit: {ASSETS.NGN}{formatMoney(totalWallDeposit)}</Typography>
                <Typography>Total Wallet Withdrawal: {ASSETS.NGN}{formatMoney(totalWallWithdrawal)}</Typography>
                <Typography>Total Bought: {ASSETS.NGN}{formatMoney(totalBought)}</Typography>
                {/* <Typography>Total Profit: {ASSETS.NGN}30,000</Typography>
                <Typography>No. of Purchase: 4</Typography> */}
            </Paper>
        <TableContainer component={Paper}>
        <Table className={styles.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Deposit</TableCell>
              <TableCell align="right">Bought(crypto)</TableCell>
              <TableCell align="right">Bought(fiat)</TableCell>
              <TableCell align="right">Sold&nbsp;(crypto)</TableCell>
              <TableCell align="right">Sold&nbsp;(fiat)</TableCell>
              {/* <TableCell align="right">Profit</TableCell>
              <TableCell align="right">% Profit</TableCell> */}
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coinData.map((row: { node: any; cursor: string | number | null | undefined; }) => {
                const transaction = row.node;
                const transAmt = transaction.amount.replace('-','')
                const _details = transaction.detail;
                const date = new Date( transaction.createdAt * 1e3)
                const dateFull = date.toDateString();
                const time = date.toLocaleTimeString();
                if(transaction.code !== 'pending_withdrawal' && _details.status !== 'failed' ) {
                    return(
                        <TableRow key={row.cursor}>
                            <TableCell component="th" scope="row">
                            {dateFull} {time}
                            </TableCell>
                            <TableCell align="right">
                            { 
                            transaction.code === 'deposit' ?  ASSETS.NGN + formatStrMoney(transAmt) : '-' }
                            </TableCell>
                            <TableCell align="right">
                            { 
                            _details.totalAmount == null ? 
                                _details.totalCoinAmount + ' LTC' : '-' }
                            </TableCell>
                            <TableCell align="right">
                            { 
                            _details.side === 'buy' ?  ASSETS.NGN + formatStrMoney(transAmt) : '-' }
                            </TableCell>
                            <TableCell align="right">
                            { 
                            _details.side === 'sell' ? formatStrMoney(_details.totalCoinAmount) + ' LTC' : '-' }
                            </TableCell>
                            <TableCell align="right">
                            { 
                            _details.side === 'sell' ?  ASSETS.NGN + formatStrMoney(transAmt) : '-' }
                            </TableCell>
                            {/* <TableCell align="right">{ASSETS.NGN}300</TableCell>
                            <TableCell align="right">0.52%</TableCell> */}
                            <TableCell align="right">
                            { 
                            _details.buycoinsPrice ? ASSETS.NGN + formatStrMoney(_details.buycoinsPrice.buyPricePerCoin) + '/LTC' : '-' }
                            </TableCell>
                        </TableRow>
                )
                }
            })}
          </TableBody>
        </Table>
      </TableContainer>
      </Container>
      </div>
      <div style={{marginTop:40}}/>
      </>
    );
    } else {
        return (<div style={{textAlign: 'center', marginTop: 10}}>No trades history found</div>)
    }
});

