import React, { PureComponent } from 'react'
import BatchForm from './BatchForm'
import { connect } from 'react-redux'
import { postBatch } from '../../actions/batches'
import { Redirect } from 'react-router-dom'
import Button from 'material-ui/Button'

class BatchPage extends PureComponent {
  handleSubmit = (data) => {
		this.props.postBatch(parseInt(data.batchNumber, 0), data.startDate, data.endDate)
	}

  render() {
    const { history } = this.props

    if (this.props.createBatch.success) return (
			<Redirect to="/" />
		)
    return (
      <div>
      <Button
        color="primary"
        variant="raised"
        onClick={() => history.push(`/batches`)}
        className="create-batch"
      >
        Class list
      </Button>
        <h1>Create Class</h1>

        <BatchForm onSubmit={this.handleSubmit} />

        <p style={{color:'red'}}>{ this.props.createBatch.error }</p>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
	return {
		createBatch: state.createBatch
	}
}

export default connect(mapStateToProps, {postBatch})(BatchPage)
