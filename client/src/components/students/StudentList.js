import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid';
import InfoOutline from '@material-ui/icons/InfoOutline'
// import DeleteOutline from '@material-ui/icons/Delete'
// import './students.css'
import { getStudents } from '../../actions/students'
// import { bindActionCreators } from 'redux'
import {Link} from 'react-router-dom'
  
class StudentsList extends PureComponent {

    // state = {
    //     batchId: Number((window.location.href).split('/').pop())
    // }

    //deleteStudent = (studentId) => {
    //    this.props.deleteStudent(studentId)
     // }

    // componentWillMount() {
    //     this.props.getStudents(this.state.batchId);
    //     console.log(this.props)
    //    }
  


    renderStudent = (student, index) => {
        // let evalutionImage = '/placeholder2.png'
        // if(student.evaluations && student.evaluations.length > 0){
        //     evalutionImage = `/notebook-${student.evaluations[0].color}.png`
        // 
    
        return (
        <Grid item xs={12} sm={4} key={index}>
            <Card key={student.id} className="student-card">
                <CardMedia
                    className='media'
                    title='foto of student'
                    image={student.picture} 
                    style={{height: 0, paddingTop: '56.25%'}}
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
                        size="small"
                        variant="raised"
                        > 
                            <InfoOutline/>
                    </Button> 
                    </Link>
                    {/* <Button
                        size="small"
                        variant="raised"
                        onClick={ () => this.deleteStudent(student.id) }
                    > 
                    <DeleteOutline/>
                    </Button> */}
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

export default connect(mapStateToProps)(StudentsList)
