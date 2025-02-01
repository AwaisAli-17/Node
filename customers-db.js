const express = require('express');
const query = require('./db/customersQuery');
const app = express();
const port = 4000;

app.use(express.json());

app.get('/api/customers',query.getAllCustomers);
app.get('/api/customers/:id',query.getCustomersById);
app.post('/api/customers',query.addCustomer);
app.delete('/api/customers/:id',query.deleteCustomer);
app.put('/api/customers/:id',query.updateCustomer);

app.listen(port,()=>{
    console.log(`Customers-DB connected successfully to port ${port}`);
})
