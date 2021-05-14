"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMsg = exports.generateSalarySlip = void 0;
var math = __importStar(require("./math.util"));
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
