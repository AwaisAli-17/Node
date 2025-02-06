const db = require('./dbconfig');

const getUsers = (email,res) =>{
    const query = {
        text: 'Select * from users where email = $1',
        values: [email]
    };
    db.query(query,(result,error)=>{
        if(error){
            console.log(error);
        }else{
            res.json(result);
        }
    })
}

module.exports = {
    getUserByEmail: getUserByEmail
  }