import React, { Component } from 'react'
import { Redirect, Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { action as toggleMenu } from 'redux-burger-menu'

import Menu from '../components/Menu'
import Home from '../components/Home'
import Drivers from '../components/Drivers'
import AdmOrdersWindow from '../components/AdmOrdersWindow'
import DriverForm from '../components/DriverForm'
import OrderForm from '../components/OrderForm'
import DriverForOrderForm from '../components/DriverForOrderForm'
import DriverDetails from '../components/DriverDetails'

import logo from '../assets/images/logo.svg'
import burgerIcon from '../assets/images/burger-icon.svg'
import exitBtn from '../assets/images/exit.svg'

import { echo } from '../actions/echo'
import { serverMessage } from '../reducers/echo'

const admLinks =  [
	{
		name: 'Drivers',
		href: '/admin/drivers'
	},
	{
		name: 'Orders',
		href: '/admin/orders'
	}
]

class Admin extends Component {
	componentDidMount() {
		this.props.fetchMessage('Hi!')
	}
	
	getTitle() {
		let path = this.props.history.location.pathname
		if (~path.indexOf("home")) {
			return "Добро пожаловать"
		} else if (~path.indexOf("drivers")) {
			return "Водители"
		} else if (~path.indexOf("reg_drv")) {
			return "Новый водитель"
		} else if (~path.indexOf("det_drv")) {
			return "Информация о водителе"
		} else if (~path.indexOf("edit_drv")) {
			return "Редактировать пользователя"
		} else if (~path.indexOf("orders")) {
			return "Заказы"
		} else if (~path.indexOf("reg_ord")) {
			return "Новый заказ"
		} else if (~path.indexOf("edit_ord")) {
			return "Редактировать заказ"
		} else if (~path.indexOf("det_ord")) {
			return "Информация о заказе"
		}
	}

	render() {
		console.log(this.props.message)
		return (
			<div className="page app-page">
				<Menu customBurgerIcon={false} >
					<Link to="/admin/home" className="logo" ><img src={logo} alt="Logo" /></Link>
					{admLinks.map(l => {
						return <Link to={l.href} key={l.href}>{l.name}</Link>
					})}
				</Menu>
				<div className="topbar">
					<div className="container">
						<div className="topbar-content">
							<img className="burger" onClick={() => window.store.dispatch(toggleMenu(true))} src={burgerIcon} />
							<Link to="/admin/home"  className="logo" ><img src={logo} alt="Logo" /></Link>
							<ul className="topbar-nav">
								{admLinks.map(l => {
									return (
										<li key={l.href} className="topbar-nav-item">
											<Link className="topbar-nav-link" to={l.href}>{l.name}</Link>
										</li>
									)
								})}
							</ul>
							<div className="topbar-auth">
								Вы вошли как Username
								<img src={exitBtn} alt="Выход" className="exit-btn" />
							</div>
						</div>
					</div>
				</div>

				<div className="main">
					<div className="container">
						
						<div className="content-topbar">
							<a className="back-btn" onClick={() => this.props.history.goBack()}>&#8249; Назад</a>
							<h2>{this.getTitle()}</h2>
						</div>
				
						<Switch>
							<Route path="/admin/home" render={ props => <Home {...props} links={admLinks}/> } />

							<Route path="/admin/drivers" render={ props => <Drivers {...props} drivers={this.props.drivers} /> } />
					
							<Route path="/admin/reg_drv" render={ props => <DriverForm {...props} newDriver={this.props.newDriver} /> } />
					
							<Route path="/admin/det_drv:driverId" render={ props => <DriverForm {...props} drivers={this.props.drivers} /> } />

							<Route path="/admin/edit_drv:driverId" render={ props => <DriverForm {...props} drivers={this.props.drivers} /> } />
					
							<Route path="/admin/orders" render={(props) => <AdmOrdersWindow {...props} orders={this.props.orders} drivers={this.props.drivers} />} />
					
							<Route path="/admin/reg_ord" component={OrderForm} />
					
							<Route path="/admin/get_drv_for:orderId" component={DriverForOrderForm} />
						
							<Route path="/admin/det_ord:orderId" component={OrderForm} />
						
							<Route path="/admin/edit_ord:orderId" component={OrderForm} />

							<Redirect from="/admin" to="admin/home" /> 
						</Switch>
					</div>
				</div>

				<div className="footer">
					<div className="container">
						Developed by <a href="radiant-graphics.ru">Radiant Graphics</a>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		message: serverMessage(state)
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		fetchMessage: bindActionCreators(echo, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)

