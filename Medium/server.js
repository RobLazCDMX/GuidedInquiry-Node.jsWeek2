const express = require('express')

const app = express()


let employees = require('./Data/employees.json')

app.get('/employees', (req,res)=>{
    if(!data){
        res.status(404).send('Could not find information')
    }
    res.send(data)
})

app.get('/employees/:id',(req,res)=>{
    const findEmployee = data.employees.find((employee) => {
        return req.params.id === parseInt(employee.id)
    })

    if(!findEmployee){
        res.status(404).send('Employee was not found')
    }
    res.send(findEmployee)
})

app.listen(3000)

