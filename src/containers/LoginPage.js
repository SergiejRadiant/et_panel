import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import logo from '../assets/images/logo.svg'

import { selectSubreddit, fetchPosts, fetchPostsIfNeeded } from '../actions/index'
import store from '../store/index';

// store.dispatch(selectSubreddit('reactjs'))

// store
// 	.dispatch(fetchPosts('reactjs'))
// 	.then(() => console.log(store.getState()))

// store
// 	.dispatch(fetchPostsIfNeeded('reactjs'))
// 	.then(() => console.log(store.getState()))


class LoginPage extends Component {
	submitForm(e) {
		e.preventDefault()

		let data = {
			username: this.form.username.value,
			password: this.form.password.value
		}
		
		store
			.dispatch(fetchPosts('http://89.223.28.252:8000/ru/ext_api/v0/api-token-auth/', data))
			.then(() => console.log(store.getState()))
	}

	render() {
		return (
			<div className="page login-page">
				<div className="container">
					<div className="login-page-content">
						<div className="logo-wrap">
							<img className="logo" src={logo} alt="Logo" />
						</div>
						<form onSubmit={this.submitForm.bind(this)} 
							className="form"
							action="#"
							ref={(form) => this.form = form}
						>
							<h4>Вход</h4>
							<label>Логин: <input name="username" type="text" /></label>
							<label>Пароль: <input name="password" type="password" /></label>
							<div className="btn-wrap center">
								<button type="submit" className="button">Вход</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		login: state.loginReducer,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchPosts: bindActionCreators(fetchPosts, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
