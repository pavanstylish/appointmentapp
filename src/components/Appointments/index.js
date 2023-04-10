// Write your code here
import {Component} from 'react'
import {v4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    nameInput: '',
    appointmentList: [],
  }

  deleteAppointment = id => {
    const {appointmentList} = this.state

    this.setState({
      appointmentList: appointmentList.filter(appoint => appoint.id !== id),
    })
  }

  toggleIsStar = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(each => {
        if (id === each.id) {
          return {...each, isStar: !each.isStar}
        }
        return each
      }),
    }))
  }

  renderAppointList = () => {
    const {appointmentList} = this.state

    return appointmentList.map(eachAppointment => (
      <AppointmentItem
        key={eachAppointment.id}
        appointmentDetails={eachAppointment}
        toggleIsStar={this.toggleIsStar}
        deleteAppointment={this.deleteAppointment}
      />
    ))
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput} = this.state

    const newAppointment = {
      id: v4(),
      appointment: nameInput,
      date: new Date(),
      isStar: false,
    }

    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      nameInput: '',
    }))
  }

  onChangeInput = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  render() {
    const {nameInput, appointmentList} = this.state
    return (
      <div>
        <h1>ADD APPOINTMENT</h1>
        <form onSubmit={this.onAddComment}>
          <h2>Title</h2>
          <input
            type="text"
            placeholder="appointment"
            value={nameInput}
            onChange={this.onChangeInput}
          />
          <h2>Date</h2>
          <input type="date" />
          <button type="submit">ADD</button>
        </form>
        <hr />
        <p>
          <spam>{appointmentList.length}</spam>Appointments
        </p>
        <ul>{this.renderAppointList()}</ul>
      </div>
    )
  }
}
export default Appointments
