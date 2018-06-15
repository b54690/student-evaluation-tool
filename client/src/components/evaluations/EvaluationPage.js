import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getStudent, updateStudent } from '../../actions/students'
import Card, {CardMedia, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import StudentEditForm from './StudentEditForm'
import EvaluationForm from './EvaluationForm'

class EvaluationPage extends PureComponent {

    state = {
      studentId: Number((window.location.href).split('/').pop()),
      edit: false
  }

    //tracks whether or not the user is editing by giving the 
    //component an internal state with a property edit. Toggle the value of this 
    //property with the click of an "edit" button.
  
    toggleEdit = () => {
      this.setState({
        edit: !this.state.edit
      })
  }
  
    updateStudent = (student) => {
      this.props.updateStudent(this.state.studentId, student)
      this.toggleEdit()
  }
  
     componentWillMount() {
      this.props.getStudent(this.state.studentId)
     }

  
     render() {
        const {student} = this.props

        console.log(this.props)
       
        return(
          <Paper>
          <div>
            <StudentEditForm initialValues={student} onSubmit={this.updateStudent} />   
          </div>
          <div>
          {/* <img src={student.picture} 
              alt="student" width='200'/> */}
            <CardMedia
                    title='Photo'
                    image={student.picture || 'student.placeholer'} 
                    style={{ width: 5, height: 5,paddingTop: '10%'}}
                />
            <CardContent>
                <Typography>
                    {student.firstName} {student.lastName}
                </Typography>
            </CardContent>
          </div>
          <EvaluationForm />
          </Paper>

        )
      }
    }
    
    const mapStateToProps = function (state) {
        return {
            student: state.student
        }
    }
    
    export default connect(mapStateToProps, {getStudent,updateStudent})(EvaluationPage)
