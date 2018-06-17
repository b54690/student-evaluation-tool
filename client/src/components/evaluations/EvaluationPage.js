import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getStudent, updateStudent } from '../../actions/students'
import { getEvaluations } from '../../actions/evaluations'
import Card, {CardMedia, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import StudentEditForm from './StudentEditForm'
import EvaluationForm from './EvaluationForm'
import EvaluationHistory from './EvaluationsHistory'

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
      this.props.getEvaluations(this.state.studentId)
      this.props.getStudent(this.state.studentId)
      
     }

     render() {
        const {student, evaluation} = this.props

        console.log(evaluation, "help")
        console.log(student, "student")
       
        return(
          <Paper>
          <div>
            <StudentEditForm initialValues={student} onSubmit={this.updateStudent} />   
          </div>
          <div>
          {/* <img src={student.picture} 
              alt="student" width='200'/> */}
            <CardContent>
            <Typography variant="headline" component="h2">
                {student.firstName} {student.lastName} <br/>
            </Typography>
            <Typography variant="headline" component="h2"><br/>
            </Typography>
            <CardMedia
                className='media'
                title='Photo'
                image= {student.picture}
                style={{ width: 100, height: 20, paddingLeft: '5%', paddingTop: '10%'}}
            />
            </CardContent>
          </div>
          <EvaluationHistory/>
          <EvaluationForm />
          </Paper>
        )
      }
    }
    
    const mapStateToProps = function (state) {
        return {
            student: state.student,
            evaluation: state.evaluations[0],
        }
    }
    
    export default connect(mapStateToProps, {getStudent, getEvaluations, updateStudent})(EvaluationPage)
