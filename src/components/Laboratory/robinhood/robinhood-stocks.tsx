import React from 'react';
import { connect } from 'react-redux';

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

class Stocks extends React.Component {
  render() {
    console.log(this.props);
    const { stocks, getTotal, getTable } = this.props;
    const stocksTotal = getTotal(stocks);

    let data = stocks.map((s) => ({
      name: s.symbol,
      percentage: ((s.quantity * s.last_trade_price) / stocksTotal) * 100,
    }));

    return (
      <div className='rb-page'>
        <div className='rb-graph'>
          <ResponsiveContainer width='90%' height='90%'>
            <BarChart
              data={data}
              layout='vertical'
              margin={{
                top: 20,
                right: 20,
                left: 20,
                bottom: 20,
              }}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis type='number' />
              <YAxis dataKey='name' type='category' />
              <Tooltip />
              <Legend />
              <Bar dataKey='percentage' fill='#A8A8A8' />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className='rb-table'>
          {getTable('Stocks', stocks, stocksTotal)}
        </div>
      </div>
    );
  }
}

export default Stocks;
