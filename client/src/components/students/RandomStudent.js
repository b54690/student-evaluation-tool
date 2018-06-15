import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Button from 'material-ui/Button';
import colorsArray from 'constants'
// import './students.css'

class RandomStudentSelector extends PureComponent {
    
    selectStudent = (event) => {
        event.preventDefault()
        const {students} = this.props
    
        let evaluationPick = colorsArray[Math.floor(Math.random()*colorsArray.length)]

        //selects a random color from the colorsArray 
    
        let randomStudent = students.filter(student => student.evaluations.Evaluation === evaluationPick)
        //filters students with the random color

        let chosenStudent = randomStudent[Math.floor(Math.random()*randomStudent.length)]

        //selects a student
    
        alert(`Student selected for Random Question: ${chosenStudent.firstName} ${chosenStudent.lastName}`)
        }


    render() {


        return (
            <div>
                <Button
                    type='submit'
                    color="secondary"
                    variant="raised"
                    onClick={ this.selectStudent }
                     >
                    ASK A QUESTION
                </Button>
            </div>
        )
    }
}


const mapStateToProps = function (state) {
	return {
        students: state.students,
	}
}

export default connect(mapStateToProps) (RandomStudentSelector);