"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const entity_1 = require("./entity");
const entity_2 = require("../evaluations/entity");
const entity_3 = require("../batches/entity");
let StudentController = class StudentController {
    async allStudents() {
        const students = await entity_1.Student.find();
        if (!students)
            throw new routing_controllers_1.NotFoundError('Students table doesn\'t exist');
        return { students };
    }
    async getStudentById(studentId) {
        const studentById = await entity_1.Student.findOne(studentId);
        if (!studentById)
            throw new routing_controllers_1.NotFoundError('Student doesn\'t exist');
        if (studentById) {
            return { studentById };
        }
    }
    async createStudent(student, batchId) {
        const batch = await entity_3.Batch.findOne(batchId);
        if (batch instanceof entity_3.Batch)
            student.batch = batch;
        const entity = await student.save();
        return { entity };
    }
    async deleteStudent(id) {
        const student = await entity_1.Student.findOne(id);
        if (!student)
            throw new routing_controllers_1.NotFoundError('Student doesn\'t exist');
        if (student) {
            const evaluations = await entity_2.Evaluation.find({ student: student });
            evaluations.map(evaluation => evaluation.remove());
            await student.remove();
        }
        return 'successfully deleted';
    }
    async updateStudent(studentId, update) {
        let student = await entity_1.Student.findOne(studentId);
        console.log(studentId);
        if (student) {
            student.firstName = update.firstName;
            student.lastName = update.lastName;
            student.profilePictureUrl = update.profilePictureUrl;
            await student.save();
        }
        return student;
    }
};
__decorate([
    routing_controllers_1.Get('/students'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "allStudents", null);
__decorate([
    routing_controllers_1.Get('/students/:id([0-9]+)'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "getStudentById", null);
__decorate([
    routing_controllers_1.Post('/students'),
    __param(0, routing_controllers_1.Body()),
    __param(1, routing_controllers_1.BodyParam('batchId', { required: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entity_1.Student, Number]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "createStudent", null);
__decorate([
    routing_controllers_1.Delete('/students/:id([0-9]+)'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "deleteStudent", null);
__decorate([
    routing_controllers_1.Patch('/students/:id([0-9]+)'),
    __param(0, routing_controllers_1.Param('id')),
    __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "updateStudent", null);
StudentController = __decorate([
    routing_controllers_1.JsonController()
], StudentController);
exports.default = StudentController;
//# sourceMappingURL=controller.js.map