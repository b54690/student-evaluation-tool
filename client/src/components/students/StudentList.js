import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid';
// import './students.css'
import { getStudents, deleteStudent } from '../../actions/students'
// import { bindActionCreators } from 'redux'
import {Link} from 'react-router-dom'
  
class StudentsList extends PureComponent {


    deleteStudent = (studentId) => {
       this.props.deleteStudent(studentId)
     }


    renderStudent = (student, index) => {
        // let evalutionImage = '/placeholder2.png'
        // if(student.evaluations && student.evaluations.length > 0){
        //     evalutionImage = `/notebook-${student.evaluations[0].color}.png`
        // 
    
        return (
        <Grid item key={index}>
            <Card key={student.id} className="student-card">
                <CardMedia
                    className='media'
                    title='Photo'
                    image= {student.picture}
                    style={{ width: 300, height: 25,paddingTop: '100%'}}
                />
            <CardContent>
                <Typography variant="headline" component="h2">
                    {student.firstName} {student.lastName} <br/>
                 {/* <img src={evalutionImage} alt=" " /> */}
                </Typography>
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
                        onClick={ () => this.deleteStudent(student.id) }
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
            <Grid container spacing={24}>
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
