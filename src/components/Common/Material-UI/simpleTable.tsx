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
          {quotes.map((q, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {q.symbol}
              </TableCell>
              <React.Fragment>
                <TableCell align="center">
                  {Math.floor(positions[index].quantity)}
                </TableCell>
                <TableCell align="center">
                  {positions[index].quantity * q.last_trade_price}
                </TableCell>
                <TableCell align="right">%</TableCell>
              </React.Fragment>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
