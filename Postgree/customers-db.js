const express = require('express');
const query = require('./db/customersQuery');
const app = express();
const port = 4000;

app.use(express.json());

app.get('/api/customers',auth.authenticate,query.getAllCustomers);
app.get('/api/customers/:id',auth.authenticate,query.getCustomersById);
app.post('/api/customers',auth.authenticate,query.addCustomer);
app.delete('/api/customers/:id',auth.authenticate,query.deleteCustomer);
app.put('/api/customers/:id',auth.authenticate,query.updateCustomer);

app.listen(port,()=>{
    console.log(`Customers-DB connected successfully to port ${port}`);
})
