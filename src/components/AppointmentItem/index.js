// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {ar, tog} = props
  const {id, title, date, isFavorite} = ar
  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const del = () => {
    tog(id)
  }

  return (
    <li key={id} className="list-item">
      <div className="car">
        <div>
          <p>{title}</p>
          <p>{date}</p>
        </div>
        <button className="bt" type="button" data-testId="star" onClick={del}>
          <img src={starImgUrl} className="imgg" alt="star" />
        </button>
      </div>
    </li>
  )
}
export default AppointmentItem
