  const express = require('express');
  const app = express();
  app.use(express.json());
  const port = 4000;

  let customers = [
    {id: '1588323375416', firstName: 'John', lastName: 'Johnson', email: 'john@johnson.com', phone: '8233243'},
    {id: '1588323375417', firstName: 'Mary', lastName: 'Smith', email: 'mary@smith.com', phone: '6654113'},
    {id: '1588323375418', firstName: 'Peter', lastName: 'North', email: 'peter@north.com', phone: '901176'},
  ];

  app.get('/api/customer',(req,res)=>{
    res.json(customers);
  })

  app.get('/api/customer/:id',(req,res)=>{
    const customerId = req.params.id;
    const customer = customers.filter(customer =>{
         return customer.id === customerId;
    })
    customer.length>0 ? res.json(customer) : res.status(404).end();
  })

  app.post('/api/customer',(req,res)=>{
    const customerId = Date.now().toString();
    const customer = {id: customerId, ...req.body}
    customers = [customer, ...customers];
    res.json(customers);
  })

  app.delete('/api/customer/:id',(req,res)=>{
    const customerId = req.params.id;
    customers = customers.filter(customer =>{
         return customer.id !== customerId;
    })
    res.status(204).end();
  })

  app.put('/api/customer/:id',(req,res)=>{
    const customerId = req.params.id;
    const customer = {'id': Date.now().toString(), ...req.body};
    const index = customers.findIndex(customer => {
         return customer.id === customerId
    })
    customers.splice(index,1,customer);
    res.json(customers)
  })

  app.listen(port,()=>{
    console.log(`Connected to port in customers: ${port}`);
  })