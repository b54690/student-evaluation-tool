import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsEmail, IsString} from 'class-validator'
import { Exclude } from 'class-transformer'
import { Evaluation } from '../evaluations/entity'
import * as bcrypt from 'bcrypt'

@Entity()
export class Teacher extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsEmail()
  @Column('text', {unique: true})
  email: string

  @IsString()
  @Column('text')
  @Exclude({ toPlainOnly: true })
  password: string

  @OneToMany(_ => Evaluation, evaluation => evaluation.teacher)
  evaluations: Evaluation[]

  async setPassword(rawPassword: string) {
  const hash = await bcrypt.hash(rawPassword, 10)
  this.password = hash
  }

  checkPassword(rawPassword: string): Promise<boolean> {
  return bcrypt.compare(rawPassword, this.password)
  }
}