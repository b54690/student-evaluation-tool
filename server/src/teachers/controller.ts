import { JsonController, Get, Post, Param, Body, NotFoundError } from 'routing-controllers'
import { Teacher } from './entity'

@JsonController()
export default class TeacherController {

  @Get('/teachers/:id([0-9]+)')
  async getTeacherById(
    @Param('id') teacherId: number
  ) {
    const teacherById = await Teacher.findOne(teacherId)
    if (!teacherById) throw new NotFoundError('Teacher doesn\'t exist')
    if (teacherById) {
      return {teacherById}
    }
  }

  @Post('/teachers')
  async createTeacher(
    @Body() teacher: Teacher
  ) {
    const {password, ...rest} = teacher
    const entity = Teacher.create(rest)
    await entity.setPassword(password)
    return entity.save()
  }
}