import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid';
import { getStudents, deleteStudent } from '../../actions/students'
import {Link} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

  
class StudentsList extends PureComponent {

    state = {
        batchId: Number((window.location.href).split('/').pop())
    }

    componentWillMount() {
        this.props.getStudents(this.state.batchId);
       }

    getStudents = (batchId) => {
        this.props.getStudents(this.state.batchId);
       }


    deleteStudent = (studentId) => {
        this.props.deleteStudent(studentId)
      }
    

    renderStudent = (student, index) => {
    
        return (
        <Grid >
            <Card key={student.id} style={{     
                        flex: 1,
                        margin: 10,
                        backgroundColor: `${student.latestEvaluation}`.split('/')[1]}} className="student-card">
            <CardContent>
                <Typography variant="headline" component="h2">
                <FontAwesomeIcon  icon="graduation-cap" size="1x" /> {student.firstName}   {student.lastName}
                </Typography>
                <CardMedia
                    className='media'
                    title='Photo'
                    image= {student.picture}
                    style={{ width: 200, height: 25,paddingTop: '100%'}}
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
                        <InfoIcon />
                    </Button>
                    </Link>
                    <Button
                        type='submit'
                        color="primary"
                        variant="raised"
                        className="info-student"
                        size="small"
                        variant="raised"
                        onClick={() => this.deleteStudent(student.id)}
                    >
                        <DeleteIcon/>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )}

    render() {
        const {students} = this.props
        

        return(
            <Grid container spacing={24}
            style={{
                display: 'flex',
                flexDirection: 'row wrap',
                padding: 20,
                paddingLeft: 20,
                paddingRight: 20,
              }}>
                {students.map((student, index) => this.renderStudent(student, index))}
            </Grid>
            
        )
    }
}

const mapStateToProps = function (state) {
	return {
        students: state.students,

}}

export default connect(mapStateToProps, {getStudents, deleteStudent})(StudentsList)
