// Write your code here
import {Component} from 'react'

import {format} from 'date-fns'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

const arr = []

class Appointments extends Component {
  state = {array: arr, title: '', date: '', showOnlyFavorites: false}

  set = () => {
    const {title, date} = this.state
    const formattedDate = date
      ? format(new Date(date), 'dd MMMM yyyy, EEEE')
      : ''
    const newApp = {
      id: uuidv4(),
      title,
      date: formattedDate,
      isFavorite: false,
    }
    this.setState(prevState => ({
      array: [...prevState.array, newApp],
      title: '',
      date: '',
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  toggle = id => {
    this.setState(prevState => ({
      array: prevState.array.map(each => {
        if (id === each.id) {
          return {...each, isFavorite: !each.isFavorite}
        }
        return each
      }),
    }))
  }

  toggleShowFavorites = () => {
    this.setState(prevState => ({
      showOnlyFavorites: !prevState.showOnlyFavorites,
    }))
  }

  render() {
    const {array, title, date, showOnlyFavorites} = this.state
    const filteredAppointments = showOnlyFavorites
      ? array.filter(each => each.isFavorite)
      : array

    return (
      <div className="bg-cont">
        <div className="sub-cont">
          <h1 className="header">Add Appointment</h1>
          <div className="display-opt">
            <div className="card">
              <label htmlFor="titleId" className="lab">
                Title
              </label>
              <br />
              <input
                type="text"
                value={title}
                onChange={this.onChangeTitle}
                className="inp"
                id="titleId"
                placeholder="Tilte"
              />
              <label htmlFor="dateId" className="lab">
                Date
              </label>
              <br />
              <input
                value={date}
                type="date"
                className="inp"
                id="dateId"
                onChange={this.onChangeDate}
              />
              <button className="butn" type="button" onClick={this.set}>
                Add
              </button>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
              className="image"
              alt="appointments"
            />
          </div>
          <hr className="line" />
          <div className="crd">
            <h1>Appointments</h1>
            <button
              className="btn"
              type="button"
              onClick={this.toggleShowFavorites}
            >
              Starred
            </button>
          </div>
          <ul className="list">
            {filteredAppointments.map(each => (
              <AppointmentItem key={each.id} ar={each} tog={this.toggle} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
