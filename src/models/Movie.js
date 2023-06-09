import { Schema, model, models } from "mongoose";

const movieSchema = new Schema({
  title: String,
  original_title: String,
  release_date: String,
  poster_path: String,
  overview: String,
});

const Movie = models.Movie || model("Movie", movieSchema);

export default Movie;
