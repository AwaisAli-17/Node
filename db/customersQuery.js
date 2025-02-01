const db = require('./dbconfig');

const getAllCustomers = (req,res) =>{
    const query = 'Select * from customer';
    db.query(query,(err,result)=>{
        if(err){
            return console.log(err);
        }else{
            if(result.rows.length>0){
                res.json(result.rows);
            }else{
                res.status(404).end;
            }
        }
    })
}

const getCustomersById = (req,res) => {
    const query = {
        text: 'Select * from customer where id = $1',
        values: [req.params.id]
    }
    db.query(query,(err,result)=>{
        if(err){
            return console.log(err);
        }else{
            if(result.rows.length>0){
                res.json(result.rows);
            }else{
                res.status(404).end;
            }
        }
    })
}

const addCustomer = (req,res) =>{
    var customer = req.body
    const query = {
        text: 'Insert into customer(firstname, lastname, email, phone) values($1,$2,$3,$4)',
        values: [customer.firstname, customer.lastname,customer.email, customer.phone]
    }
    db.query(query,(err,result)=>{
        if(err){
            return console.log(err.status);
        }else{
            res.json(customer);
        }
    })
}

const deleteCustomer = (req,res) =>{
    const query = {
        text: 'Delete from customer where id = $1',
        values: [req.params.id]
    }
    db.query(query,(err,result)=>{
        if(err){
            return console.log(err);
        }else{
            res.status(204).end;
        }
    })
}

const updateCustomer = (req,res) =>{
    const customer = req.body
    const query = {
        text: 'Update customer set firstname = $1, lastname = $2, email = $3, phone = $4 where id = $5',
        values: [customer.firstname, customer.lastname, customer.email, customer.phone, req.params.id]
    }
    db.query(query,(err,result)=>{
        if(err){
            return console.log(err);
        }else{
            res.json(customer).end;
        }
    })
}

module.exports = {getAllCustomers,getCustomersById,addCustomer,deleteCustomer,updateCustomer}