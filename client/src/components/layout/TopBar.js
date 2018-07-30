import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { withRouter } from 'react-router'
import { teacherInfo } from '../../jwt'
import { connect } from 'react-redux'
import AccountIcon from 'material-ui-icons/AccountBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const TopBar = (props) => {
  const { location, history, teacher } = props

  return (
    <AppBar position="fixed" style={{zIndex:   500, top: 0 }}>
      <Toolbar>
        <Typography variant="title" color="inherit" style={{flex: 1, fontSize: 40}}>
        <FontAwesomeIcon  icon="graduation-cap" size="2x" />  
        </Typography>
        {
          teacher &&
          <Button color="inherit"><AccountIcon /> { teacher.email }</Button>
        }

        {
          location.pathname.indexOf('signup') > 0 &&
          <Button color="inherit" onClick={() => history.push('/login')}>Login</Button>
        }
        {
          location.pathname.indexOf('login') > 0 &&
          <Button color="inherit" onClick={() => history.push('/signup')}>Sign up</Button>
        }
        {
          location.pathname.indexOf('batches') > 0 &&
          <Button color="inherit" onClick={() => history.push('/batches')}>All batches</Button>
        }
         {
          location.pathname.indexOf('students/') > 0 &&
          <Button color="inherit" onClick={() => history.go(-1)}>All Students</Button>
        }
        {
          teacher &&
          <Button color="inherit" onClick={() => history.push('/logout')}>Log out</Button>
        }
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = state => ({
    currentTeacher: state.currentTeacher,
    teacher: state.currentTeacher && teacherInfo(state.currentTeacher.jwt)
})

export default withRouter(
  connect(mapStateToProps)(TopBar)
)
