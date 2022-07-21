const Mongoose = require("mongoose");
const RemoteDB = `mongodb+srv://iradukundajo123-:8hp3p7_q7iv%23FfV@cluster0.lpxbzlt.mongodb.net/authentification?retryWrites=true&w=majority`;
const connectDB = async () => {
  await Mongoose.connect(RemoteDB).then((client) => {
    console.log("MongoDB Connected");
  });
};
module.exports = connectDB;
