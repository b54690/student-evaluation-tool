import React, { Component } from 'react'
import LoginPage from './components/login/LoginPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignupPage from './components/signup/SignupPage'
import LogoutPage from './components/logout/LogoutPage'
import TopBar from './components/layout/TopBar'
import BatchesList from './components/batches/BatchPage'
// import StudentPage from './components/students/StudentPage'
import StudentsList from './components/students/StudentPage';


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
            <Route exact path="/batches" component={BatchesList} />
            <Route exact path="/batches/:id" component={StudentsList} />
          </main>
        </div>
      </Router>
    )
  }
}

export default App