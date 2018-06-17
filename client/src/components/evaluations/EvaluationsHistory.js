import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getEvaluations } from '../../actions/evaluations'
import { getStudent } from '../../actions/students'
import Card, {CardMedia, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';


const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

class EvaluationsHistory extends PureComponent {

    state = {
        studentId: Number((window.location.href).split('/')[4]),

    }

    componentWillMount() {
        this.props.getEvaluations(this.state.studentId)
        this.props.getStudent(this.state.studentId)
       }


render() {
    const {evaluation, student} = this.props
    console.log(evaluation)
    

    return(
        <Paper className={styles.root}>
        <Typography variant="title" id="tableTitle" style={{marginBottom: -20, paddingBottom: -20,margin: 20}}>
            {`${student.firstName} ${student.lastName} Evaluation History`}
        </Typography>
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell >Date</TableCell>
              <TableCell >Teacher</TableCell>
              <TableCell >Evaluation</TableCell>
              <TableCell >Remarks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {evaluation.map((evaluation, index) => {
              return (
                <TableRow key={index}>
                  <TableCell key={evaluation.id} component="th" scope="row">{evaluation.Date}</TableCell>
                  <TableCell >{evaluation.Teacher}</TableCell>
                  <TableCell >{evaluation.Evaluation}</TableCell>
                  <TableCell >{evaluation.Remark}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    )
}}

const mapStateToProps = function(state) {
    return {
        evaluation: state.evaluations,
        student: state.student
    }
}


export default connect(mapStateToProps, {withStyles, getEvaluations, getStudent}) (EvaluationsHistory)
