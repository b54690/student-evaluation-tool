import { JsonController, Get, Post, Put, Param, Body, BodyParam, NotFoundError } from 'routing-controllers'
import { Evaluation } from './entity'
import { Student } from '../students/entity'
// import { Teacher } from '../teachers/entity'

@JsonController()
export default class EvaluationController {

  // @Authorized()
  @Post('/students/:id([0-9]+)/evaluations')
  async createEvaluation(
    @Body() evaluation: Evaluation,
    @Param('id') studentId: number
  ) {
    const student = await Student.findOne(studentId)
    if(!student) throw new NotFoundError('Student does not exist')

    const createdEvaluation = await Evaluation.create({...evaluation, student}).save()

    return createdEvaluation
  }

  @Get('/students/:id([0-9]+)/evaluations')
  async getEvaluations(
    @Param('id') studentId: number,
  ) {
    const student = await Student.findOne(studentId)
    if (!student) throw new NotFoundError('Evaluation not found!')

    return student.evaluations
  }

  @Put('/evaluations/:id([0-9]+)')
  async updateEvaluation(
      @Param('id') id: number,
      @Body() update 
  ) {
      const evaluation = await Evaluation.findOne(id)

      if (!evaluation) throw new NotFoundError(`Evaluation was not found`)

      const editedEvaluation = Evaluation.merge(evaluation, update)
      
      const entity = await editedEvaluation.save()
      return entity
  }

}

