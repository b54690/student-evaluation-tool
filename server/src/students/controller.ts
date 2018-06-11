import { JsonController, Get, Post, Delete, Patch, Param, Body, BodyParam, NotFoundError } from 'routing-controllers'
import { Student } from './entity'
import { Evaluation } from '../evaluations/entity'

import { Batch } from '../batches/entity'

@JsonController()
export default class StudentController {

  @Get('/students')
  async allStudents(){
    const students = await Student.find()
    if (!students) throw new NotFoundError('Students table doesn\'t exist')
    return {students}
  }

  @Get('/students/:id([0-9]+)')
  async getStudentById(
    @Param('id') studentId: number
  ) {
    const studentById = await Student.findOne(studentId)
    if (!studentById) throw new NotFoundError('Student doesn\'t exist')
    if (studentById) {
      return {studentById}
    }
  }

  @Post('/students')
  async createStudent(
    @Body() student: Student,
    @BodyParam('batchId', {required: true}) batchId: number
  ) {
    const batch = await Batch.findOne(batchId)
    if(batch instanceof Batch) student.batch = batch
    const entity = await student.save()
    return { entity }
  }

  @Delete('/students/:id([0-9]+)')
  async deleteStudent(
    @Param('id') id: number
  ) {
    const student = await Student.findOne(id)
    if (!student) throw new NotFoundError('Student doesn\'t exist')
    if(student) {
      const evaluations = await Evaluation.find({student: student})
      evaluations.map(evaluation => evaluation.remove())
      await student.remove()
    }
    return 'successfully deleted'
  }

  @Patch('/students/:id([0-9]+)')
  async updateStudent(
    @Param('id') studentId: number,
    @Body() update
  ) {
    let student = await Student.findOne(studentId)
    console.log(studentId)

    if(student) {
      student.firstName = update.firstName
      student.lastName = update.lastName
      student.profilePictureUrl = update.profilePictureUrl
      await student.save()
    }

    return student
  }
}
