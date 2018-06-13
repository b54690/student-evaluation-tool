import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { MinLength, IsString } from 'class-validator'
// import { Type } from 'class-transformer'
import {Student} from '../students/entity'


@Entity()
export class Batch extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', { nullable: false })
  batchNumber: Number

  @Column('date', {nullable:false})
  @MinLength(10)
  startDate: Date

  @Column('date', {nullable:false})
  @MinLength(10)
  endDate: Date

  @OneToMany(_ => Student, student => student.batch, {eager:true})
  students: Student[]
}