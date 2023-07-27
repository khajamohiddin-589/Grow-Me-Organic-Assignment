import './index.css'
import Button from '@mui/material/Button'

const NotFound = props => {
  const goToLoginPage = () => {
    const {history} = props
    history.push('/login')
  }
  return (
    <div className="not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
        alt="not-found"
        className="not-found-img"
      />
      <Button variant="contained" onClick={goToLoginPage}>
        Go To Login Page
      </Button>
    </div>
  )
}

export default NotFound
