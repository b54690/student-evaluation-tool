import { JsonController, Get, Post, Patch, Param, Body, BodyParam, NotFoundError } from 'routing-controllers'
import { Evaluation } from './entity'
import { Student } from '../students/entity'
import { Teacher } from '../teachers/entity'

@JsonController()
export default class EvaluationController {

  @Get('/evaluations/:id([0-9]+)')
  async getEvaluationById(
    @Param('id') evaluationId: number
  ) {
    const evaluationById = await Evaluation.findOne(evaluationId)
    if (!evaluationById) throw new NotFoundError('Evaluation doesn\'t exist')
    if (evaluationById) {
      return {evaluationById}
    }
  }

  @Post('/evaluations')
  async createEvaluation(
    @Body() evaluation: Evaluation,
    @BodyParam('studentId', {required: true}) studentId: number,
    @BodyParam('teacherId', {required: true}) teacherId: number
  ) {
    const student = await Student.findOne(studentId)
    if(student instanceof Student) evaluation.student = student
    const teacher = await Teacher.findOne(teacherId)
    if(teacher instanceof Teacher) evaluation.teacher = teacher
    const entity = await evaluation.save()
    return { entity }
  }

  @Patch('/evaluations/:id([0-9]+)')
  async updateEvaluation(
    @Param('id') evaluationId: number,
    @Body() update
  ) {
    let evaluation = await Evaluation.findOne(evaluationId)
    evaluation = update
    if(evaluation)
    return evaluation.save()
  }
}
