"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var employee_service_1 = require("./employee.service");
var DashBoard = /** @class */ (function () {
    function DashBoard() {
    }
    DashBoard.prototype.renderDashboard = function () {
        employee_service_1.default();
        employee_service_1.generateSalarySlip();
        employee_service_1.logMsg("Employee Service log method called from dashboard component.");
    };
    return DashBoard;
}());
exports.default = DashBoard;
//# sourceMappingURL=dashboard.component.js.map