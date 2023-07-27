import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import './App.css'
import FetchingPage from './components/FetchingPage'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/page-two" component={FetchingPage} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
