// use MovieDB;                                               r

db.createCollection("movies");

db.createCollection("directors");

db.createCollection("actors");

//======= Adding Data to Movies Collections =================================
db.movies.insertMany([
  {
    title: "Movie 1",
    releaseYear: 2020,
    genre: "Action",
    director: "Director 1",
    actors: ["Actor 1", "Actor 2"],
  },
  {
    title: "Movie 2",
    releaseYear: 2021,
    genre: "Comedy",
    director: "Director 2",
    actors: ["Actor 3", "Actor 4"],
  },
  {
    title: "Movie 3",
    releaseYear: 2022,
    genre: "Drama",
    director: "Director 3",
    actors: ["Actor 5", "Actor 6"],
  },
  {
    title: "Movie 4",
    releaseYear: 2023,
    genre: "DramaAction",
    director: "Director 4",
    actors: ["Actor 5", "Actor 6"],
  },
  {
    title: "Movie 5",
    releaseYear: 2024,
    genre: "ComedyAction",
    director: "Director 5",
    actors: ["Actor 2", "Actor 6"],
  },

  // Add more movie documents here
]);

//======= Adding Data to Director Collections =================================

db.director.insertMany([
  {
    name: "Director 1",
    nationality: "India",
    moviesDirected: ["Movie 1", "Movie 2"],
  },
  {
    name: "Director 2",
    nationality: "USA",
    moviesDirected: ["Movie 3", "Movie 4"],
  },
  {
    name: "Director 3",
    nationality: "Spain",
    moviesDirected: ["Movie 5", "Movie 6"],
  },
  // Add more director documents here
]);

//======= Adding Data to Actor Collections =================================

db.actors.insertMany([
  {
    name: "Actor 1",
    nationality: "India",
    moviesActedIn: ["Movie 1", "Movie 3"],
  },
  {
    name: "Actor 2",
    nationality: "India",
    moviesActedIn: ["Movie 1", "Movie 4"],
  },
  {
    name: "Actor 3",
    nationality: "India",
    moviesActedIn: ["Movie 2", "Movie 5"],
  },
  {
    name: "Actor 4",
    nationality: "India",
    moviesActedIn: ["Movie 1", "Movie 4"],
  },
  {
    name: "Actor 5",
    nationality: "India",
    moviesActedIn: ["Movie 3", "Movie 5"],
  },
  {
    name: "Actor 6",
    nationality: "India",
    moviesActedIn: ["Movie 5"],
  },
  // Add more actor documents here
]);
