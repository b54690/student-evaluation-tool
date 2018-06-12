import React, { Component } from 'react'
import LoginPage from './components/login/LoginPage'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import SignupPage from './components/signup/SignupPage'
import LogoutPage from './components/logout/LogoutPage'
import TopBar from './components/layout/TopBar'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <TopBar />
          </nav>
          <main style={{marginTop:75}}>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/signup" component={SignupPage} />
          </main>
        </div>
      </Router>
    )
  }
}

export default App