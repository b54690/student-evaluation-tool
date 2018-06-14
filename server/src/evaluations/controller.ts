import { JsonController, Get, Post, Patch, Param, Body, BodyParam, NotFoundError } from 'routing-controllers'
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
}

