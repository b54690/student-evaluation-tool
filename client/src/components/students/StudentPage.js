import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import StudentsList from './StudentList'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'
import {addStudent, getStudents} from '../../actions/students'
import RandomQuestions from './RandomStudent'


class StudentsPage extends PureComponent {
    
    state = {
        batchId: Number((window.location.href).split('/').pop())
    }

    componentWillMount() {
        this.props.getStudents(this.state.batchId);
        console.log(this.props)
       }
    
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addStudent(this.state)   
    }

	handleChange = (event) => {
        const {name, value} = event.target

		this.setState({
          [name]: value,
		})
    }


    render() {


        return(
            <Paper className="outer-paper">
               <form onSubmit={this.handleSubmit} className='createStudent'>
                    <TextField
                        id='student'
                        label='Student Firstname'
                        name='firstName'
                        value={this.state.firstName || ''}
                        onChange={this.handleChange}
                        style={{margin: 10}}
                        />
                    <TextField
                        id='student'
                        label='Student Lastname'
                        name='lastName'
                        value={this.state.lastName || ''}
                        onChange={this.handleChange}
                        style={{margin: 10}}
                        />
                    <TextField
                        id='picture'
                        label='Picture URL'
                        name='picture'
                        value={this.state.picture || ''}
                        onChange={this.handleChange}
                        style={{margin: 10}}
                        />   
                    <Button
                        type='submit'
                        color="secondary"
                        variant="raised"
                        className="create-student"
                        >
                        Create Student
                    </Button>
                </form>


                    <RandomQuestions/>

                <StudentsList/>

            </Paper>  
        )
    }
}

const mapStateToProps = function (state) {
	return {
        students: state.students,

	}
}

export default connect(mapStateToProps, {addStudent, getStudents}) (StudentsPage);