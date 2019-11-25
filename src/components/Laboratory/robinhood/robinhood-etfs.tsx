import React from 'react'
import { connect } from 'react-redux'
import windowSize from 'react-window-size'

import PieChart from '../../D3/PieChart.js'
import * as helper from '../../Common/helper'

class ETFs extends React.Component {
	render() {
		const { etfs, getTotal, getTable, windowWidth, windowHeight } = this.props

		let data = etfs.map((e) => ({
			value: e.last_trade_price * e.quantity,
			name: e.symbol
		}))

		const etfsTotal = getTotal(etfs)
		return (
			<div className="rb-page">
				<div className="rb-graph">
					<PieChart
						data={data}
						width={'100%'}
						height={'100%'}
						innerRadius={30}
						outerRadius={helper.pieWidth(windowWidth, windowHeight)}
						translateX={helper.translateX(windowWidth)}
						translateY={helper.translateY(windowWidth, windowHeight)}
					/>
				</div>
				<div className="rb-table">{getTable('ETFs', etfs, etfsTotal)}</div>
			</div>
		)
	}
}

export default windowSize(ETFs)
