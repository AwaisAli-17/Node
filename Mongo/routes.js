const express = require("express");
const router = express.Router();
const Movies = require("./models/movies.js");
const Cars = require("./models/cars.js");
const Users = require("./models/users.js");

router.get("/api/users", async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/api/users", async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/api/users", async (req, res) => {
  const newUser = new Users({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNum: req.body.phoneNum,
  });
  try {
    const result = await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/api/users/:id", async (req, res) => {
  try {
    const result = await Users.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    if (result !== null) {
      return res.status(201).json(req.body);
    } else {
      return res.status(500).json({ message: "Cannot find user" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/api/delete/:id", async (req, res) => {
  const result = await Users.deleteOne({ _id: req.params.id });
  if (deleted.deletedCount === 0) {
    return res.status(404).json({ message: "Car not found" });
  } else {
    return res.status(200).json({ message: "Car deleted" });
  }
});

router.get("/api/cars", async (req, res) => {
  try {
    const cars = await Cars.find();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/api/cars", async (req, res) => {
  const newCar = new Cars({
    brand: req.body.brand,
    model: req.body.model,
    color: req.body.color,
    year: req.body.year,
  });
  try {
    const result = await newCar.save();
    res.status(201).json({ newCar });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/api/cars/:id", async (req, res) => {
  try {
    const result = await Cars.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    if (result === null) {
      return res.status(500).json({ message: "Car not found." });
    } else {
      return res.status(201).json(result);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/api/cars/:id", async (req, res) => {
  const deleted = await Cars.deleteOne({ _id: req.params.id });
  if (deleted.deletedCount === 0) {
    return res.status(404).json({ message: "Car not found" });
  } else {
    return res.status(200).json({ message: "Car deleted" });
  }
});

router.get("/api/movies", async (req, res) => {
  try {
    const movies = await Movies.find();
    res.send(movies);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

router.post("/api/movies", async (req, res) => {
  const movie = new Movies({
    title: req.body.title,
    director: req.body.director,
    year: req.body.year,
  });

  try {
    const newMovie = await movie.save();
    res.status(201).json({ newMovie });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

router.delete("/api/movies", async (req, res) => {
  const response = await Movies.deleteOne({ title: req.body.title });
  if (response.deletedCount === 0) {
    return res.status(404).json({ message: "Movie not found" });
  } else {
    return res.status(200).json({ message: "Movie deleted" });
  }
});

router.put("/api/movies/:id", async (req, res) => {
  const response = await Movies.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
  if (response === null) {
    return res.status(404).json({ message: "Movie not found" });
  } else {
    return res.status(200).json(response);
  }
});

module.exports = router;
