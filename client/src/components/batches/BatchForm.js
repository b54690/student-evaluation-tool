import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField'
import {addBatch} from '../../actions/batches'


class BatchForm extends PureComponent {
    state = {}

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addBatch(this.state)
    }

    handleChange = (e) => {
        const {name, value} = e.target

        this.setState({
          [name] : value
        })
      };

    render() {

        return(
            <form onSubmit={this.handleSubmit} className="addBatch">
                <TextField
                    id='batch'
                    name='batchNumber'
                    label='Batch ID'
                    value={this.state.batchNumber || ''}
                    onChange={this.handleChange}
                />
                <TextField
                  id='startDate'
                  name='startDate'
                  label='Start Date'
                  type='date'
                  value={this.state.startDate || ''}
                  onChange={this.handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  />
                <TextField
                    id='endDate'
                    name='endDate'
                    label='End Date'
                    type='date'
                    value={this.state.endDate || ''}
                    onChange={this.handleChange}
                    InputLabelProps={{
                        shrink: true,
                      }}
                />
                <Button
                    type='submit'
                    color="secondary"
                    variant="raised"
                    className="create-class"
                >
                    Add a batch
                </Button>
            </form>
        )
    }
}


const mapStateToProps = function (state) {
	return {
        batches: state.batches
	}
}

export default connect(mapStateToProps, {addBatch})(BatchForm)