import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = props => {
  const token = localStorage.getItem('token')
  if (token === null) {
    return <Redirect to="/not-found" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
