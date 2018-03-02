import React, { Component } from 'react';

export default class DriverForm extends Component {
  componentDidMount() {
    if(this.props.drivers) {
      let _driverId = this.props.match.params.driverId.slice(1)

      let driver = this.props.drivers.filter( drv => {
        return drv.user.username === _driverId
      })

      this.form.firstName.value = driver[0].user.first_name
      this.form.lastName.value = driver[0].user.last_name
      this.form.username.value = driver[0].user.username
      this.form.password.value = driver[0].user.password
      this.form.car.value = driver[0].car
      this.form.carNumber.value = driver[0].car_number

    }

  }

  submitForm(e) {
    e.preventDefault()
    if (this.props.registerDriver) {
      console.log(this.props)
      let data = {
        ext_user: {
          is_admin: false,
          user: {
            first_name: this.form.firstName.value,
            last_name: this.form.lastName.value,
            email: this.form.email.value,
            username: this.form.username.value,
            password: this.form.password.value,
            last_login: null
          }
        },
        car: this.form.car.value,
        number_of_car: this.form.carNumber.value
      }
      
      this.props.registerDriver(data)   
    } else if (this.props.editDriver) {

    }
 
    for (let i of this.form.getElementsByTagName('input')) {
      i.value = ""
    }
  }

  render() {
    return (
      <div className="content-wrap">
        <form className="form" ref={(form) => this.form = form} onSubmit={this.submitForm.bind(this)} action="#">
          <label>First name: <input type="text" name="firstName"  /></label>
          <label>Last name: <input type="text"  name="lastName" /></label>
          <label>Car: <input type="text" name="car" /></label>
          <label>Car number: <input type="text" name="carNumber"  /></label>
          <label>Username: <input type="text"  name="username" /></label>
          <label>Email: <input type="email" name="email" /></label>
          <label>Password: <input type="text"  name="password" /></label>
          <div className="btn-wrap">
            <button type="submit" className="button small">Принять</button>
            <button type="reset" className="button small">Отмена</button>
          </div>
        </form>
      </div>        
    );
  }
}