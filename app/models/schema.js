//this file outlines the data that will be post to the database

import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.promise = global.Promise;

const infoSchema = new Schema(
  {
    username: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const Info = mongoose.models.Info || mongoose.model("Info", infoSchema);

export default Info;
