import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect, Link} from 'react-router-dom'
import { Button, Grid, CardActions, CardContent, CardMedia, Typography, Paper } from '@material-ui/core';
import {Doughnut} from 'react-chartjs-2';
import { getStudents } from '../../actions/students'


class RatingChart extends PureComponent {

state = {
    batchId: Number((window.location.href).split('/').pop())
}

componentWillMount() {
    this.props.getStudents(this.state.batchId)
}

calculatePercentage() {

    const {students} = this.props

    const lastEvaluation = students.filter(student => student.latestEvaluation.split('/')[0] !== "white")

    const redGrades = lastEvaluation.filter(student => student.latestEvaluation.split('/')[0] === "Red")

    const yellowGrades = lastEvaluation.filter(student => student.latestEvaluation.split('/')[0] === "Yellow")

    const greenGrades = lastEvaluation.filter(student => student.latestEvaluation.split('/')[0] === "Green" )

    const redPercentage = (redGrades.length/lastEvaluation.length * 100).toFixed(2)
    const yellowPercentage = (yellowGrades.length/lastEvaluation.length * 100).toFixed(2)
    const greenPercentage = (greenGrades.length/lastEvaluation.length * 100).toFixed(2)

    const data = {
        labels: [
            'Red',
            'Yellow',
            'Green'
        ],
        datasets: [{
            data: [redPercentage, yellowPercentage, greenPercentage],
            backgroundColor: [
            '#e57373',
            '#fff176',
            '#81c784'
            ],
            hoverBackgroundColor: [
            '#FF5252',
            '#FFEB3B',
            '#4CAF50'
            ]
        }]
    };

return (
    <Paper style={{
      marginTop: '30px', 
      marginLeft: 'auto', 
      marginBottom: '30px', 
      marginRight: 'auto',
      padding: '20px',
      width: '90%',
      textAlign: 'center'}}
      >
      <Typography variant="headline"> Latest evaluation for current batch: </Typography>
        <div style={{maxWidth:"500px", margin: 'auto'}}>
            <Doughnut data={data}/>
        </div>
    </Paper>
)
}

render() {
    const {students} = this.props

    return (
      <div>
          {this.calculatePercentage()}
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
    students: state.students,
    }
  }
  
  export default connect(mapStateToProps, { getStudents })(RatingChart)