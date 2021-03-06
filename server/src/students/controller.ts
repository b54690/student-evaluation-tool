import { JsonController, Get, Post, Delete, Put, Param, Body, BodyParam, BadRequestError, NotFoundError, HttpCode } from 'routing-controllers'
import { Student } from './entity'
// import { Evaluation } from '../evaluations/entity'
import  {Batch} from '../batches/entity'

@JsonController()
export default class StudentController {

  @Get('/batches/:id([0-9]+)/students')
    @HttpCode(200)
    async getStudents(
      @Param('id') batchId: number
    ) {
      const batch = await Batch.findOne(batchId)
      if (!batch) throw new NotFoundError('Batch not found!')
  
      return batch.students

    }

  @Get('/students/:id([0-9]+)')
  async getStudent(
    @Param('id') studentId: number
  ) {
    const studentById = await Student.findOne(studentId)
    if (!studentById) throw new NotFoundError('Student doesn\'t exist')
    if (studentById) {
      return studentById
    }
  }

  // @Authorized()
    @Post('/batches/:id([0-9]+)/students')
    @HttpCode(201)
    async createStudent(
      @Body() student: Student,
      @Param('id') batchId: number
    ) {
      const batch = await Batch.findOne(batchId)
      if(!batch) throw new BadRequestError("Batch doesn't exist.")
  
      const createdStudent = await Student.create({...student, batch}).save()
  
      return createdStudent
    }

    @Delete('/students/:id([0-9]+)')
    async deleteStudent(
      @Param('id') studentId: number
    ) {
      const student = await Student.findOne(studentId)
      if(!student) throw new NotFoundError('Student not found.')
  
      await student.remove()

      return { id: studentId }
    }

    @Put('/students/:id')
    async updateStudent(
        @Param('id') studentId: number,
        @Body() update: Partial<Student> 
    ) {
        const student = await Student.findOne(studentId)
        if (!student) throw new NotFoundError('Student was not found')
        const studentUpdated = Student.merge(student, update)
        const entity = await studentUpdated.save()
        return entity
    }

}
