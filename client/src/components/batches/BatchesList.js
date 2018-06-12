import React, { PureComponent } from 'react'
import { getBatches } from '../../actions/batches'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Moment from 'moment'

class BatchesList extends PureComponent {
  componentWillMount() {
    if (this.props.authenticated) {
      if (this.props.batches === null || this.props.createBatch.success === true) this.props.getBatches()
    }
  }

  renderBatch = (batch) => {
    const { history } = this.props

    return (<Card key={batch.id} className="batch-card">
      <CardContent>
        <Button
          color="secondary"
          variant="raised"
          onClick={() => history.push(`/batch/${batch.id}`)}
          className="create-batch"
        >
          Batch #{batch.batchNumber}
        </Button>
        <Typography variant="title" gutterBottom>
          Total students: {batch.students.length}
        </Typography>
        <Typography variant="body2">
          Start date: {Moment(batch.startDate).format('ll')}
        </Typography>
        <Typography variant="body2">
          End date: {Moment(batch.endDate).format('ll')}
        </Typography>
      </CardContent>
    </Card>)
  }

  render() {
    const {batches, authenticated, history} = this.props

    if (!authenticated) return (
			<Redirect to="/login" />
		)

    if (batches === null) return null

    return (<Paper className="outer-paper">
      <Button
        color="primary"
        variant="raised"
        onClick={() => history.push(`/batch`)}
        className="create-batch"
      >
        Create Class
      </Button>
      <div>
        {batches.map(batch => this.renderBatch(batch))}
      </div>
    </Paper>)
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentTeacher !== null,
  batches: state.batches === null ? null : Object.values(state.batches).sort((a, b) => b.id - a.id),
  createBatch: state.createBatch
})

export default connect(mapStateToProps, {getBatches})(BatchesList)