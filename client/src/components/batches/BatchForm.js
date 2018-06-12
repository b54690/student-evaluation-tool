import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'

export default class BatchForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

	render() {
		return (
			<Paper className="outer-paper">
				<form onSubmit={this.handleSubmit}>
					<TextField
						id="batchNumber"
						label="Batch Number"
						name="batchNumber"
						type="number"
						value={ this.state.batchNumber || '' }
						onChange={ this.handleChange }
					/>
					<TextField
						id="startDate"
						name="startDate"
						type="date"
						value={ this.state.startDate || '' }
						onChange={ this.handleChange }
					/>
					<TextField
						id="endDate"
						name="endDate"
						type="date"
						value={ this.state.endDate || '' }
						onChange={ this.handleChange }
					/>
					<Button
						type="submit"
						color="primary"
						variant="raised"
					>
						Save
					</Button>
				</form>
			</Paper>
		)
	}
}