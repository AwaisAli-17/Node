const db = require('./dbconfig');

const getAllMovies = (req,res) => {
    const query = 'Select * from movie';
    db.query(query,(err,result)=>{
    if(err)
        console.log(err)
    else
        res.json(result.rows)}
    )
}

const getMovieById = (req,res) => {
    const query = {text: 'Select * from movie where id = $1',
        values: [req.params.id]
    }
    db.query(query,(err,result)=>{
        if(err){
            return console.log(err)
        }else{
            if(result.rows.length>0){
                res.json(result.rows);
            }else{
                res.status(404).end();
            }
        }
    })
}

const insertMovie = (req,res)=>{
    const movie = req.body;
    const query = {
        text: 'Insert into movie (title,director,year) values ($1, $2, $3)',
        values: [movie.title, movie.director, movie.year]
    }
    db.query(query,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.json(movie)
        }
    })
}

const deleteMovie = (req,res)=>{
   const query  = {
    text: 'Delete from movie where id = $1',
    values: [req.params.id]
   }
   db.query(query,(err,result)=>{
    if(err){
        return console.log(err);
    }else{
        res.send(204).end;
    }
   })
}

const updateMovie = (req,res)=>{
    const movie = req.body
    const query  = {
     text: 'Update movie set title=$1, director=$2, year=$3 where id = $4',
     values: [req.body.title,req.body.director,req.body.year,req.params.id]
    }
    db.query(query,(err,result)=>{
     if(err){
         return console.log(err);
     }else{
         res.json(movie);
     }
    })
 }
module.exports={updateMovie,deleteMovie,insertMovie,getAllMovies,getMovieById}