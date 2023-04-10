// // Write your code here

import {formatDistanceToNow} from 'date-fns'

const AppointmentItem = props => {
  const {appointmentDetails} = props
  const {id, appointment, isStar, date} = appointmentDetails
  const isStarUrl = isStar
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
  const postedTime = formatDistanceToNow(date)

  const onClickStar = () => {
    const {toggleIsStar} = props
    toggleIsStar(id)
  }

  const onDeleteComment = () => {
    const {deleteAppointment} = props
    deleteAppointment(id)
  }

  return (
    <li>
      <div>
        <div>
          <p>{appointment}</p>
          <p>{postedTime}</p>
        </div>
      </div>
      <div>
        <div>
          <img src={isStarUrl} alt="star" />
          <button type="button" onClick={onClickStar}>
            like
          </button>
        </div>
        <button type="button" onClick={onDeleteComment}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default AppointmentItem
