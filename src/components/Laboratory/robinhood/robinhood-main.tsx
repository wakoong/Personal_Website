import React from 'react'
import { Router, Link } from '@reach/router'

import RobinhoodOverview from './robinhood-overview'
import RobinhoodETFs from './robinhood-etfs'
import RobinhoodStock from './robinhood-stocks'
import RobinhoodHistory from './robinhood-history'
import './robinhood.css'

const RobinhoodHeader = () => {
	const tabs = ['Overview', 'ETFs', 'Stocks', 'History']
	// const urls = ['', 'etfs', 'stocks', 'history'];
	return (
		<div className="rb-header">
			<ul className="header-tabs">
				{tabs.map((tab, index) => (
					<Link to={tab.toLowerCase()} key={tab}>
						<li className="header-tab">{tab}</li>
					</Link>
				))}
			</ul>
		</div>
	)
}

class RobinhoodMain extends React.Component {
	getTotal = (data) =>
		data.map((d) => d.last_trade_price * d.quantity).reduce((acc, curr) => {
			return acc + curr
		}, 0)

	getTable = (title, data, total) => {
		return (
			<div className="row">
				<div className="row-title">{title}</div>
				<div className="row-body">
					{data.map((d) => (
						<div className="item" key={d.symbol}>
							<div className="item-name">
								<div>{d.symbol}</div>
								<div>{d.simple_name}</div>
							</div>
							<div className="item-val">
								{(d.last_trade_price * d.quantity / total * 100).toFixed(2) + '%'}
							</div>
						</div>
					))}
				</div>
			</div>
		)
	}
	render() {
		const { account, portfolio, overview, orders } = this.props
		const [etfs, stocks] = overview.reduce(
			([e, s], inst) => (inst.simple_name.includes('ETF') ? [[...e, inst], s] : [e, [...s, inst]]),
			[[], []]
		)

		return (
			<div className="rb-main">
				<RobinhoodHeader />
				<Router>
					<RobinhoodOverview
						portfolio={portfolio}
						etfs={etfs}
						stocks={stocks}
						cash={account.cash}
						getTotal={this.getTotal}
						getTable={this.getTable}
						path="overview"
						default
					/>
					<RobinhoodETFs etfs={etfs} getTotal={this.getTotal} getTable={this.getTable} path="etfs" />
					<RobinhoodStock stocks={stocks} getTotal={this.getTotal} getTable={this.getTable} path="stocks" />
					<RobinhoodHistory orders={orders} path="history" />
				</Router>
			</div>
		)
	}
}

export default RobinhoodMain
