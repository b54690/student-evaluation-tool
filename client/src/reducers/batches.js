import { UPDATE_BATCHES } from '../actions/batches'

export default (state = null, {type, payload}) => {
  switch (type) {
    case UPDATE_BATCHES:
      // sort the batches based on id, newest batches first
      payload.sort((a, b) => a.id - b.id)

    return payload.reduce((batches, batch) => {
      // sort students based on id
      batch.students.sort((a, b) => a.id - b.id)

      batch.students.reduce((students, student) => {
        // sort evaluations based on id, before selecting the last element for the last color
        const evaluations = student.evaluations.sort((a, b) => a.id - b.id)
        student.lastColor = evaluations.slice(-1)[0] ? evaluations.slice(-1)[0].color : null

        return student;
      }, {})

      batches[batch.id] = batch

      return batches
    }, {})

  default:
    return state
  }
}