const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/train", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected succesfull");
  })
  .catch((error) => {
    console.log(error);
  });
