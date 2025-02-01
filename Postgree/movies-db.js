const express = require('express');
const query = require('./db/moviesQuery');
const app = express();
const port = 4000;

app.use(express.json());

app.get('/api/movies', query.getAllMovies)

app.get('/api/movies/:id', query.getMovieById)

app.post('/api/movies',query.insertMovie)

app.delete('/api/movies/:id', query.deleteMovie)

app.put('/api/movies/:id', query.updateMovie)

app.listen(port,()=>{
    console.log(`Movies-DB connected successfully to port ${port}`);
})