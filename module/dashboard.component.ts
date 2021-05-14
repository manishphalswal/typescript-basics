import calculateSalary, { generateSalarySlip, logMsg } from "./employee.service";

export default class DashBoard {
    renderDashboard() {
        calculateSalary();
        generateSalarySlip();

        logMsg("Employee Service log method called from dashboard component.");
    }
}
