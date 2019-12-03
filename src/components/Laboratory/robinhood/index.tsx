import React from 'react'
import { connect } from 'react-redux'

import RAccount from './robinhood-account.tsx'
import RobinhoodMain from './robinhood-main'
import ETFs from './robinhood-etfs.tsx'
import Stocks from './robinhood-stocks.tsx'
import Button from '../Common/Material-UI/button.tsx'
import logo from '../../../assets/images/rh-gorilla.png'

import { loginWithData, getOverviewData } from './robinhood-account-redux.tsx'

class Robinhood extends React.Component {
	_isMounted = false
	componentDidMount() {
		const { login } = this.props
		this._isMounted = true
		login()
	}

	componentWillUnmount() {
		this._isMounted = false
	}

	async componentDidUpdate(prevProps) {
		if (prevProps.authenticated && prevProps.portfolio.length === 0 && prevProps.positions === '') {
			try {
				const { onOverviewData } = this.props
				onOverviewData()
			} catch (error) {
				console.log(error)
			}
		}
	}

	render() {
		const { account, overview, portfolio, authenticated, orders } = this.props

		let main

		if (authenticated && overview.length !== 0) {
			main = <RobinhoodMain account={account} portfolio={portfolio} overview={overview} orders={orders} />
		} else {
			main = (
				<React.Fragment>
					<div className="robinhood-login-wrapper">
						<img src={logo} alt="rh project logo" />
						<div>Loading...</div>
					</div>
					<div className="disclaimer">
						A basic Heroku server stays inactive to save server resources when the application is unused.
						Therefore, the application wil take longer time to load whenever the Heroku server needs to be
						reactivated. Try refreshing the browser if you notice a delayed loading. Thank you.
					</div>
				</React.Fragment>
			)
		}

		return <div className="project-background robinhood">{main}</div>
	}
}

const mapStateToProps = (state) => ({
	account: state.robinhoodAccount.account,
	portfolio: state.robinhoodAccount.portfolio,
	authenticated: state.robinhoodAccount.logged_in,
	orders: state.robinhoodAccount.orders,
	positions: state.robinhoodAccount.positions,
	overview: state.robinhoodAccount.overview
})

const mapDispatchToProps = (dispatch) => ({
	login: () => dispatch(loginWithData()),
	onOverviewData: () => dispatch(getOverviewData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Robinhood)
