import * as math from "./math.util";


export default function calculateSalary() {
    math.add(1, 2);
    math.subtract(3,2);
    math.multiply(2,3);
    math.divide(10,2);
    math.log("Math log Called from Employee Service.")
    console.log("Calculated Salary.");
}

export function generateSalarySlip() {
    console.log("Salary slip generated.")
}


export function logMsg(message) {
    console.log(message);
}