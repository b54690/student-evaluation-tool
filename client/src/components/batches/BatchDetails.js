import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getBatches, updateBatch } from '../../actions/batches'
// import { deleteStudent } from '../../actions/students'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import Grid from "material-ui/es/Grid/Grid"
import Avatar from "material-ui/es/Avatar/Avatar"
import withStyles from "material-ui/es/styles/withStyles"
import classNames from 'classnames'
import Typography from 'material-ui/Typography'

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center'
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 100,
    height: 100
  }
}

class BatchDetails extends PureComponent {
  state = {}

  componentWillMount() {
    if (this.props.authenticated) {
      if (this.props.batch === null || this.props.student.success === true || this.props.evaluation.success === true) this.props.getBatches()
    }
  }

  pickRandomStudent() {
      const studentsWithColors = this.props.batch.students.filter(student => student.lastColor !== null)
      const configColors = {red: 53, yellow: 28, green: 19}

      const studentLottery = []

      studentsWithColors.map((student) => {
        const maxLoop = configColors[student.lastColor]
        for(let i = 0; i < maxLoop; i++) {
          studentLottery.push(student.id)
        }

        return {}
      })

      const askStudentId = studentLottery[Math.floor(Math.random() * studentLottery.length)]
      const askStudent = studentsWithColors.filter(student => student.id === askStudentId)[0]

      this.setState({pickedStudent: askStudent});
  }

  render() {
    const { classes, batch, authenticated, history } = this.props

    if (!authenticated) return (
			<Redirect to="/login" />
		)

    if (batch === null) return 'Loading...'
    if (!batch) return 'Not found'

    const allStudents = batch.students.length
    const redStudents = batch.students.filter(student => student.lastColor === 'red').length
    const redStudentsPercentage = redStudents / allStudents * 100
    const yellowStudents = batch.students.filter(student => student.lastColor === 'yellow').length
    const yellowStudentsPercentage = yellowStudents / allStudents * 100

    const greenStudents = batch.students.filter(student => student.lastColor === 'green').length
    const greenStudentsPercentage = greenStudents / allStudents * 100


      return (
        <Paper className="outer-paper">
          <Button
            variant="raised"
            onClick={() => history.push(`/batches`)}
            className="create-batch"
          >
            Class list
          </Button>
          <Button
            color="primary"
            variant="raised"
            onClick={() => history.push(`/batch/${batch.id}/student`)}
            className="create-batch"
          >
            Create Student
          </Button>

            <Button
                color="secondary"
                variant="raised"
                onClick={() => this.pickRandomStudent()}
                className="create-batch"
            >
                Ask a question
            </Button>

          <h1>Batch #{batch.batchNumber}</h1>

          <div style={{border: "1px solid black"}}>
            <div style={{width: Math.floor( redStudentsPercentage ) + '%', backgroundColor: 'red', float: "left", color: "white", textAlign: "center"}}>{Math.floor(redStudentsPercentage)}%</div>
            <div style={{width: Math.floor( yellowStudentsPercentage ) + '%', backgroundColor: 'yellow', float: "left", textAlign: "center"}}>{Math.floor(yellowStudentsPercentage)}%</div>
            <div style={{width: Math.floor( greenStudentsPercentage ) + '%', backgroundColor: 'green', float: "left", color: "white", textAlign: "center"}}>{Math.floor(greenStudentsPercentage)}%</div>
            <div style={{clear: "both"}}> </div>
          </div>

            <div className={{flowGrow: 1}}>
                <Grid container spacing={24}>
          {
            batch.students.map(
              student => (
                  <Grid item sm={4}  key={student.id}>
                <Paper className="outer-paper" style={this.state.pickedStudent && this.state.pickedStudent.id === student.id ? ({backgroundColor: "grey"}) : {}}>

                   <div style={{textAlign: "center"}}>
                       <Avatar
                        alt={student.firstName + ' ' + student.lastName}
                        src={student.profilePictureUrl}
                        className={classNames(classes.avatar, classes.bigAvatar)}
                        style={{textAlign: "center"}}
                        onClick={() => history.push(`/batch/${batch.id}/student/${student.id}/evaluation`)}
                   />

                      <Typography variant="display1" gutterBottom>
                      {student.firstName + ' ' + student.lastName}
                      </Typography>
                   </div>
                  <Button
                    color="secondary"
                    variant="raised"
                    onClick={() => this.props.deleteStudent(student.id)}
                    className="create-batch"
                  >
                    Delete Student
                  </Button>
                  <Button
                    color="primary"
                    variant="raised"
                    onClick={() => history.push(`/batch/${batch.id}/student/${student.id}`)}
                    className="create-batch"
                  >
                    Edit Student
                  </Button>
                  {
                      <h1 style={{color: student.lastColor, backgroundColor: student.lastColor}}>{student.lastColor || ''}</h1>
                  }

                </Paper>
                  </Grid>
              )
            )
          }
                </Grid>
            </div>
      </Paper>
    )
  }
}

const mapStateToProps = (state, props) => ({
  authenticated: state.currentTeacher !== null,
  batch: state.batches && state.batches[props.match.params.id],
  student: state.student,
    evaluation: state.evaluation
})

const mapDispatchToProps = {
  getBatches, updateBatch
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(BatchDetails))