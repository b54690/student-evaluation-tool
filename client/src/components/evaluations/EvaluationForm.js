import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Card, { CardActions } from 'material-ui/Card';
import {Link} from 'react-router-dom'
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
// import {latestEvaluation} from '../../actions/evaluations'


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
        const { evaluations } = this.props

        if (evaluations.find(evaluation => evaluation.Date === value)) {
            alert ('Evaluation already posted for this date')}
            else {
                this.setState({
                    [name]: value,
                })
            }
    }

    render() {
        const initialValues = this.props.initialValues || {}
        const {student} = this.props

        return(
            <Card>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        id='Date'
                        name='Date'
                        label='Evaluation Date'
                        type='date'
                        value={this.state.Date || ''}
                        onChange={this.handleChange}
                        style={{margin: 15, width: 150}}
                        InputLabelProps={{
                            shrink: true,
                          }}
                    /><br/>
                    <FormControl style={{width: 150,  margin: 15}}>
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
                    <TextField fullWidth
                        id='Remark'
                        label='Remark'
                        name='Remark'
                        value={this.state.Remark || initialValues.Remark || ''}
                        onChange={this.handleChange}
                        style={{margin: 15}}
                    /> <br/>
                    <CardActions>
                        <Button 
                            type='submit'
                            variant="raised" 
                            className="question-action"
                            color="secondary"
                        > 
                        Submit evaluation
                        </Button>
                        {/* <Link to={`/students/${student.id}/evaluations`} style={{textDecoration: 'none'}}>
                        <Button 
                            type='submit'
                            variant="raised" 
                            className="question-action"
                            color="secondary"
                        > 
                        evaluation history
                        </Button>
                        </Link> */}
                    </CardActions>

                </form>
            </Card>
        )
    }
}

const mapStateToProps = function (state) {
	return {
        evaluations: state.evaluations,
        student: state.student,
	}
}

export default connect(mapStateToProps, {addEvaluation}) (EvaluationForm);