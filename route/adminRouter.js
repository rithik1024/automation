const express = require("express");
const route = express();
const adminController = require("../controllers/adminController");
const multer = require('../config/multer')

route.get("/", adminController.loadDashboard);

route.get("/addEmploye",adminController.loadAddEmployee);

route.get("/employeeDetails", adminController.loadEmployeeDetails);

route.get("/addDepartment", adminController.loadAddDepartment);

route.get("/about", adminController.loadAbout);

route.get('/employeeProfile',adminController.loadEmployeeProfile)

 
// post 

route.post('/addEmployee',multer.upload,adminController.addEmployee,adminController.loadAddEmployee)

route.post ('/addDepartment',adminController.addDesi)

module.exports = route;