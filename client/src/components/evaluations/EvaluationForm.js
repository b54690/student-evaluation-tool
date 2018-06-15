import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Card, { CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button'
import Radio from 'material-ui/Radio';
import TextField from 'material-ui/TextField'
import green from 'material-ui/colors/green'
import yellow from 'material-ui/colors/yellow'
import red from 'material-ui/colors/red'
import {addEvaluation} from '../../actions/evaluations'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

class EvaluationForm extends PureComponent {
    state = {
        studentId: Number((window.location.href).split('/').pop())
    };

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addEvaluation(this.state) 
    }
    

    handleChange = (e) => {
        const {name, value} = e.target

        


        this.setState({
          [name] : value
        })
      };

    render() {
        const initialValues = this.props.initialValues || {}

        return(
            <Card>
                <form onSubmit={this.handleSubmit}>
                Date MM/DD/YYYY format<br></br>
                    <TextField
                        id='Date'
                        name='Date'
                        label='Evaluation Date'
                        value={this.state.Date || ''}
                        onChange={this.handleChange}
                    /><br/>
                    <TextField
                        id='Remark'
                        label='Remark'
                        name='Remark'
                        value={this.state.Remark || initialValues.Remark || ''}
                        onChange={this.handleChange}
                    /> <br/>
                    <FormControl >
                    <InputLabel htmlFor="age-native-simple">Evaluation</InputLabel>
                    <Select
                        native
                        value={this.state.Evaluation}
                        onChange={this.handleChange}
                        inputProps={{
                        name: 'Evaluation',
                        id: 'Evaluation',
                        }}
                    >
                        <option value="" />
                        <option value="Green">Green</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Red">Red</option>
                    </Select>
                    </FormControl>
                    <CardActions>
                        <Button 
                            type='submit'
                            variant="raised" 
                            className="question-action"
                            color="secondary"
                        > 
                        Submit 
                        </Button>
                        <Button 
                            type='submit'
                            variant="raised" 
                            className="question-action"
                            color="secondary"
                            onClick={() => (window.location.href).split('/')(+1)}
                            
                        > 
                        Next Student
                        </Button>
                    </CardActions>

                </form>
            </Card>
        )
    }
}

const mapStateToProps = function (state) {
	return {
        evaluations: state.evaluations,
	}
}

export default connect(mapStateToProps, {addEvaluation}) (EvaluationForm);