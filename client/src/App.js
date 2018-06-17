import React, { Component } from 'react'
import LoginPage from './components/login/LoginPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignupPage from './components/signup/SignupPage'
import LogoutPage from './components/logout/LogoutPage'
import TopBar from './components/layout/TopBar'
import BatchesList from './components/batches/BatchPage'
import EvaluationPage from './components/evaluations/EvaluationPage'
import StudentsList from './components/students/StudentPage';
import EvaluationsHistory from './components/evaluations/EvaluationsHistory';


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
            <Route exact path="/students/:id" component={EvaluationPage} />
            <Route exact path="/students/:id/evaluations" component={EvaluationsHistory} />
          </main>
        </div>
      </Router>
    )
  }
}

export default App