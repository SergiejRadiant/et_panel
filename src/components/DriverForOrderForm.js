import React, { Component } from 'react';

export default class DriverForm extends Component {
  constructor() {
    super()
    this.state = {
      drivers: [
        {
          id: 'xGqu0PV9pWzBDQ7',
          name: 'Genoveva Rohan',
          contactNumber: '866-360-1767',
          email: 'Benny_Roberts@yahoo.com',
          online: true,
          lastVizit: '11.02.2018',
          workDays: [ '2018-02-22', '2018-02-24' ]
        },
        {
          id: 'Ez4xrrOklQNo8vs',
          name: 'Georgette Schaefer',
          contactNumber: '068-342-5599',
          email: 'Norwood_Block81@yahoo.com',
          online: false,
          lastVizit: '11.02.2018',
          workDays: [ '2018-02-21', '2018-02-25' ]
        },
        {
          id: 'y6UKDd6PyLJHyWE',
          name: 'Nova Jast',
          contactNumber: '075-388-4491',
          email: 'Arnaldo_Koss@gmail.com',
          online: false,
          lastVizit: '11.02.2018',
          workDays: [ '2018-02-22', '2018-02-21' ]
        },
        {
          id: 'rAlbeKzBOP1qgKx',
          name: 'Caesar Pagac',
          contactNumber: '461-881-3562',
          email: 'Eveline_Gibson65@hotmail.com',
          online: false,
          lastVizit: '11.02.2018',
          workDays: [ '2018-02-23', '2018-02-26' ]
        },
      ],
      filteredDrivers: []
    }
  }

  componentDidMount() {
    this.setState({ filteredDrivers: [...this.state.drivers] })
  }

  filterDrivers(e) {
    function find(array, value) {
      if (array.indexOf) { // если метод существует
        return array.indexOf(value);
      }

      for (var i = 0; i < array.length; i++) {
        if (array[i] === value) return i;
      }

      return -1;
    }

    let val = e.target.value,
        filtered =  this.state.drivers.filter(drv => {
          return ~drv.workDays.indexOf(val)
        })

    this.setState({ filteredDrivers : [ ...filtered ]})

  }

  render() {
    return (
      <div className="content-wrap">
        <form className="form">
          <label>Выберите дату: <input type="date" onChange={(e) => this.filterDrivers(e)}/></label>
          <label>Водители: 
            <select size="6">
              {this.state.filteredDrivers.map(f => {
                return(
                  <option > {f.name}</option>
                )
              })}
            </select>
          </label>
          <div className="btn-wrap">
            <button type="submit" className="button small">Принять</button>
            <button type="reset" className="button small">Отмена</button>
          </div>
        </form>
      </div>        
    );
  }
}