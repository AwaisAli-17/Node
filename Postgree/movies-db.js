const express = require('express');
const query = require('./db/moviesQuery');
const auth = require('./services/auth');
const app = express();
const port = 4000;

app.use(express.json());

app.get('/api/movies', auth.authenticate, query.getAllMovies)

app.get('/api/movies/:id', auth.authenticate, query.getMovieById)

app.post('/api/movies', auth.authenticate,query.insertMovie)

app.delete('/api/movies/:id',auth.authenticate, query.deleteMovie)

app.put('/api/movies/:id',auth.authenticate, query.updateMovie)

app.listen(port,()=>{
    console.log(`Movies-DB connected successfully to port ${port}`);
})