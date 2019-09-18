import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  })
);

function createData(ticker: number, shares: number, amount: number) {
  return { category, name, shares, amount };
}

export default function SimpleTable({
  instruments,
  positions,
  quotes,
  stockInfo,
  totalStock,
}) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="left">Ticker</TableCell>
            <TableCell align="center">Shares</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="right">Percentage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stockInfo.map((i, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {i.symbol}
              </TableCell>
              <React.Fragment>
                <TableCell align="center">{Math.floor(i.quantity)}</TableCell>
                <TableCell align="center">
                  ${' '}
                  {(
                    Math.abs(i.quantity * i.last_trade_price * 100) / 100
                  ).toFixed(2)}
                </TableCell>
                <TableCell align="right">
                  {Math.abs(
                    (((i.quantity * i.last_trade_price) / totalStock) * 10000) /
                      100
                  ).toFixed(2)}{' '}
                  %
                </TableCell>
              </React.Fragment>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
