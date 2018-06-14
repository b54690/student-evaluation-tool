import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getStudent, updateStudent } from '../../actions/students'
import Card, {CardMedia, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import StudentEditForm from './StudentEditForm'

class EvaluationPage extends PureComponent {



    state = {
      studentId: Number((window.location.href).split('/').pop()),
      edit: false
  }

    //We'll keep track of whether or not the user is editing the cat by giving the CatPage 
    //component an internal state with a property isEditing. We'll toggle the value of this 
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
       
        return(
          <div>
            <StudentEditForm initialValues={student} onSubmit={this.updateStudent} />
          </div>
        )
      }
    
    }
    
    const mapStateToProps = function (state) {
        return {
            student: state.student,
            
        }
    }
    
    export default connect(mapStateToProps, {getStudent,updateStudent})(EvaluationPage)
