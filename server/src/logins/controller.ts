import { IsString } from 'class-validator'
import { JsonController, Post, Body, BadRequestError } from 'routing-controllers'
import { Teacher } from '../teachers/entity'
import { sign } from '../jwt'

class AuthenticatePayload {
  @IsString()
  email: string

  @IsString()
  password: string
}

@JsonController()
export default class LoginController {

  @Post('/logins')
  async authenticate(
    @Body() { email, password }: AuthenticatePayload
  ) {
    const teacher = await Teacher.findOne({ where: { email } })

    if (!teacher) throw new BadRequestError('A teacher with this email does not exist')

    if (!await teacher.checkPassword(password)) throw new BadRequestError('The password is not correct')

    const jwt = sign({ id: teacher.id!, email:teacher.email })
    return { jwt }
  }
}