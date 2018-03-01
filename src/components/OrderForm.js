import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal'

export default class DriverForm extends Component {
  constructor() {
    super() 

    this.state = {
      deleteOrderModalIsOpen: false
    }

    this.openDeleteOrderModal = this.openDeleteOrderModal.bind(this);
    this.closeDeleteOrderModal = this.closeDeleteOrderModal.bind(this);
  } 

  getButtons() {
    let _orderId = this.props.match.params.orderId
    let path = this.props.history.location.pathname
    if (~path.indexOf("admin")) {
      if (~path.indexOf("det_ord")) {
        return (
          <div className="btn-wrap">
            <Link to={`/admin/edit_ord${_orderId}`} className="button small">Редакт.</Link>
            <span className="button small grey" onClick={this.openDeleteOrderModal}>Удалить</span>
          </div>
        )
      } else {
        return (
          <div className="btn-wrap">
            <button type="submit" className="button small">Принять</button>
            <button type="reset" className="button small">Отмена</button>
          </div>
        )
      }
    }
  }

  openDeleteOrderModal() {
    this.setState({ deleteOrderModalIsOpen: true });
  }

  closeDeleteOrderModal() {
    this.setState({ deleteOrderModalIsOpen: false });
  }

  render() {
    return (
      <div className="content-wrap">
        <div className="content">
          <form>
            <div className="content-box">
              <div className="content-box-row">

                <div className="content-box-cell">
                    

                  <label>Откуда: <input type="text" /></label>
                  <label>Куда: <input type="text" /></label>
                  
                  <label>Дата трансфера: <input type="date" /></label>
                  <label>Время трансфера: <input type="time" /></label>
                 
                  <div className="radio-wrap">
                    <label>В одну сторону:<input type="radio" /></label>
                    <label>Туда и обратно:<input type="radio" /></label>
                  </div>

                  <label>Поездка обратно: <input type="date" /></label>
                  <label>Время трансфера: <input type="time" /></label>
                </div>

                <div className="content-box-cell">
                  
                  
                  <label>Номер рейса: <input type="text" /></label>
                  <label>Количество взрослых пассажиров: <input type="number" /></label>
                  <label>Количество пассажиров 0-9кг: <input type="number" /></label>
                  <label>Количество пассажиров 9-18кг: <input type="number" /></label>
                  <label>Количество пассажиров 18-36кг: <input type="number" /></label>
                  <div className="radio-wrap">
                    <label>Бизнес-класс:<input type="radio" /></label>
                    <label>Минивэн:<input type="radio" /></label>
                  </div>
                  <label>Способ оплаты:
                    <select>
                      <option>123</option>
                    </select>
                  </label>
                </div>
                  
                <div className="content-box-cell">

                  <label>Заказчик: <input type="text" /></label>
                  <label>Телефон заказчика: <input type="tel" /></label>
                  <label>E-mail заказчика: <input type="email" /></label>
                  
                  <label>Промо: <input type="text" /></label>
                  <label>Комментарий: <textarea /></label>
                  {this.getButtons()}
                </div>

              </div>
            </div>
          </form>
          <Modal
            isOpen={this.state.deleteOrderModalIsOpen}
            onRequestClose={this.closeDeleteOrderModal}
            style={{ overlay: { background: 'rgba(0, 0, 0, 0.12)', zIndex: '1000' } }}
            className="modal"
            ariaHideApp={false}
          >
            <form>
              <button type="reset" className="close-btn" onClick={() => this.closeDeleteOrderModal()} />
              <p>Вы уверены, что хотите удалить заказ?</p>
              <div className="btn-wrap">
                <button type="submit" className="button small">
                  Ок
								</button>
                <button type="recet" className="button small" onClick={this.closeDeleteOrderModal}>
                  Отмена
								</button>
              </div>
            </form>
          </Modal> 
        </div>
        
      </div>        
    );
  }
}