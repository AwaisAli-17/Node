const express = require("express");
const app = express();
app.use(express.json());
const port = 4000;

let movies = [
    {id: '1588323375416', title: 'Star Wars: Episode IX - The Rise of Skywalker', year: 2019, director: 'J.J. Abrams'},
    {id: '1588323390624', title: 'The Irishman', year: 2019, director: 'Martin Scorsese'},
     {id: '1588323375416', title: 'Star Wars: Episode IX - The Rise of Skywalker', year: 2019, director: 'J.J. Abrams'},
    {id: '1588323412643', title: 'Harry Potter and the Sorcerers Stone', year: 2001, director: 'Chris Columbus'}
  ];

app.get('/api/movies',(req,res)=>{
    res.json(movies);
})

app.get('/api/movies/:id',(req,res)=>{
    const movieId = req.params.id;
    const movie = movies.filter(movie =>  {
        return movie.id === movieId;
    })

    movie.length>0 ? res.json(movie) : res.status(404).end()
})

app.post('/api/movies',(req,res)=>{
    const movie = {id: Date.now().toString(), ...req.body}
    movies = [movie, ...movies];
    res.json(movies)
})


app.listen(port,()=>{
    console.log(`Connected to port ${port} `);
})

app.delete('/api/movies/:id',(req,res)=>{
    const movieId = req.params.id;
    movies.filter(movie =>  {
        return movie.id !== movieId;
    })
     res.status(204).end()
})

app.put('/api/movies/:id',(req,res)=>{
    const movieId = req.params.id;
    const movie = {'id':movieId, ...req.body}
    const index = movies.findIndex(movie =>  {
        return movie.id === movieId;
    })
    movies.splice(index,1,movie);
    res.json(movies)
})