import React, {PureComponent} from 'react'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'
import { updateStudent } from '../../actions/students'
import { connect } from 'react-redux'


class StudentEditForm extends PureComponent {
    
    state = {
        studentId: Number((window.location.href).split('/').pop()),
        edit: false
    }

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.onSubmit(this.state)
    }

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

render() {
    const initialValues = this.props.initialValues || {}

    return(
        <Paper className="outer-paper">
           <form onSubmit={this.handleSubmit} className='createStudent'>
                <TextField
                    id='student'
                    label='Student Firstname'
                    name='firstName'
                    value={this.state.firstName || initialValues.firstName || ''}
                    onChange={this.handleChange}
                    style={{margin: 15}}
                    />
                <TextField
                    id='student'
                    label='Student Lastname'
                    name='lastName'
                    value={this.state.lastName || initialValues.lastName || ''}
                    onChange={this.handleChange}
                    style={{margin: 10}}
                    />   
                <TextField
                    id='picture'
                    label='Picture URL'
                    name='picture'
                    value={this.state.picture || initialValues.picture || ''}
                    onChange={this.handleChange}
                    style={{margin: 10}}
                    />   
                    <Button
                        type='submit'
                        color="secondary"
                        variant="raised"
                        className="update-student"
                        >
                        Update Student
                    </Button>
            </form>
            </Paper>  
        )
    }
}

const mapStateToProps = function (state) {
	return {
        students: state.students,
	}
}

export default connect(mapStateToProps, {updateStudent}) (StudentEditForm);

