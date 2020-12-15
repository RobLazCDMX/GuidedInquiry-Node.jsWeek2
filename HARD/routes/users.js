'use strict';

const express = require("express");

const router = express.Router(); // itinializes our router

let data = require('./employees.json');

// function findEmployee(id) {
//     data.employees.find((employee) => {
//       return parseInt(id) === employee.id
//     })
//     console.log(id)
// }

//REQUEST  GET::myendpointname.com/employees = Returns json with information from all employees.


router.get('/employees', (req,res)=>{
    if(!data){
        res.status(404).send('Could not find information')
    }
    res.status(200).send(data)
})

//GET::myendpointname.com/employees/<employeeID> = Returns json with the information from that specific employee.

router.get('/employees/:id',(req,res)=> {
    const findEmployee = data.employees.find((employee) => {
        return parseInt(req.params.id) === employee.id
    })
    

    if(!findEmployee){
        res.status(404).send('Employee was not found')
    }
    res.status(200).send(findEmployee)
});

// POST POST::myendpointname.com/employees = Inserts new employee into your data. 
// "id": ,
// "name": "",
// "salary": ,
// "department": """

router.post('/employees', (req, res) => {
    
    let newEmployee = {
        id: data.employees.length + 1,
        name: req.body.name,
        salary: req.body.salary,
        department: req.body.department,
    };
    data.employees.push(newEmployee);

    res.status(200).send(`Employee with the name ${newEmployee.name} added to the database!`);
});


// DELETE DELETE::myendpointname.com/employees/<employeeID> = Removes the employee with that ID from the data.

router.delete('/employees/:id', (req, res) => {

    const findEmployee = data.employees.find((employee) => {
        return parseInt(req.params.id) === employee.id
    })
    

    if(!findEmployee){
        res.status(404).send(`Employee with the id ${req.params.id} was not found`)
    }
    // res.status(200).send(findEmployee)

    
    

    data.employees = data.employees.filter((employee) => employee.id !== parseInt(req.params.id)) //it deletes those it's id doesn't match with or in other words it keeps those whose id doesn't match the one we are trying to delete

    
    res.status(200).send(`Employee with the id ${req.params.id} deleted from the database!`);
});



// UPDATE PUT::myendpointname.com/employees/<employeeID> = Updates information for specified employee.

router.put("/employees/:id", (req, res) => {
    // Find an employee that matches the ID 
    const findEmployee = data.employees.find((employee) => {
        return parseInt(req.params.id) === employee.id;
    });
    // Check if the employee exist
    if (!findEmployee) {
        // Set status code to not found and display message
        return res.status(404).send(`Employee with the id ${req.params.id} was not found`);
    }

    

    let updatedEmployee = {
        id: data.employees.length + 1,
        name: req.body.name,
        salary: req.body.salary,
        department: req.body.department,
    };


    // Update Name
    findEmployee.name = updatedEmployee.name;
    // Update salary
    findEmployee.salary = updatedEmployee.salary;
    // Update Department
    findEmployee.department = updatedEmployee.department;

    // Return findEmployee with updated values
    res.send(findEmployee);
});
 

module.exports = router;