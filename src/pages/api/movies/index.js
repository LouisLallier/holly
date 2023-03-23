import Movie from "@/models/Movie";
import connectDB from "@/middlewares/connectDB";
import data from "@/assets/data.json";

const handler = async (req, res) => {
  const method = req.method;
  console.log("coucou");
  switch (method) {
    case "POST":
      const movies = await Movie.insertMany(data);
      res.json(movies);
  }
};

export default connectDB(handler);
