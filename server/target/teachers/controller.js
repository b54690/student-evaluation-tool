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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const entity_1 = require("./entity");
let TeacherController = class TeacherController {
    async getTeacherById(teacherId) {
        const teacherById = await entity_1.Teacher.findOne(teacherId);
        if (!teacherById)
            throw new routing_controllers_1.NotFoundError('Teacher not found');
        if (teacherById) {
            return { teacherById };
        }
    }
    async createTeacher(teacher) {
        const { password } = teacher, rest = __rest(teacher, ["password"]);
        const entity = entity_1.Teacher.create(rest);
        await entity.setPassword(password);
        return entity.save();
    }
};
__decorate([
    routing_controllers_1.Get('/teachers/:id([0-9]+)'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "getTeacherById", null);
__decorate([
    routing_controllers_1.Post('/teachers'),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entity_1.Teacher]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "createTeacher", null);
TeacherController = __decorate([
    routing_controllers_1.JsonController()
], TeacherController);
exports.default = TeacherController;
//# sourceMappingURL=controller.js.map