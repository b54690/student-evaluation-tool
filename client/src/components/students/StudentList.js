import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid';
import { getStudents, deleteStudent } from '../../actions/students'
import {Link} from 'react-router-dom'
  
class StudentsList extends PureComponent {

    state = {
        batchId: Number((window.location.href).split('/').pop())
    }


    deleteStudent = (studentId) => {
       this.props.deleteStudent(studentId)
     }
     

    renderStudent = (student, index) => {
    
        return (
        <Grid item key={index}>
            <Card key={student.id} className="student-card">
            <CardContent>
                <Typography variant="headline" component="h2">
                    {student.firstName} {student.lastName} <br/>
                </Typography>
                <CardMedia
                    className='media'
                    title='Photo'
                    image= {student.picture}
                    style={{ width: 300, height: 25,paddingTop: '100%'}}
                />
            </CardContent>
                <CardActions>
                    <Link to={`/students/${student.id}`} style={{textDecoration: 'none'}}>
                    <Button
                        type='submit'
                        size="small"
                        color="primary"
                        variant="raised"
                        className="info-student"
                        >
                        info
                    </Button>
                    </Link>
                    <Button
                        type='submit'
                        color="secondary"
                        variant="raised"
                        className="info-student"
                        size="small"
                        variant="raised"
                        onClick={() => this.deleteStudent(student.id) }
                    >
                        DELETE
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )}

    render() {
        const {students} = this.props
        
        console.log(this.props)

        return(
            <Grid container spacing={0}>
                {students.map((student, index) => this.renderStudent(student, index))}
            </Grid>
            
        )
    }
}

const mapStateToProps = function (state) {
	return {
        students: state.students,
}}

export default connect(mapStateToProps, {deleteStudent})(StudentsList)
