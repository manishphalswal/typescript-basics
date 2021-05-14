"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMsg = exports.generateSalarySlip = void 0;
var math = require("./math.util");
function calculateSalary() {
    math.add(1, 2);
    math.subtract(3, 2);
    math.multiply(2, 3);
    math.divide(10, 2);
    math.log("Math log Called from Employee Service.");
    console.log("Calculated Salary.");
}
exports.default = calculateSalary;
function generateSalarySlip() {
    console.log("Salary slip generated.");
}
exports.generateSalarySlip = generateSalarySlip;
function logMsg(message) {
    console.log(message);
}
exports.logMsg = logMsg;
//# sourceMappingURL=employee.service.js.map