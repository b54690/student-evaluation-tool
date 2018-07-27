import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString } from 'class-validator'
import { Student } from '../students/entity'
import { Teacher } from '../teachers/entity'


type color = "Red" | "Yellow" | "Green" | "White"

@Entity()
export class Evaluation extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number  
  
    @Column({ type: "date", default: () => "CURRENT_DATE"})
    Date: string;
  
    @IsString()
    @Column('text')
    Remark: string
  
    @IsString()
    @Column('text')
    Evaluation: color
  
    @ManyToOne(_ => Student, student => student.evaluations, { onDelete: 'CASCADE' })
    student: Student
  
    @ManyToOne(_ => Teacher, teacher => teacher.evaluations, {eager: true})
    teacher: Teacher
}

//http post :4000/evaluations Remark="didn't ask enough questions in class, and clearly struggled" 
//Evaluation="Red" StudentId=1 TeacherId=1