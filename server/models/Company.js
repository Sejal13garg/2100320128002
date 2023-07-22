const mongoose = require("mongoose");
const { Schema } = mongoose;
const companySchema = new Schema({
  companyname: {
    type: String,
    required: true,
  },
  ownername: {
    type: String,
    required: true,
  },
  rollno: {
    type: String,
    required: true,
  },
  owneremail: {
    type: String,
    required: true,
    unique: true,
  },
  accesscode: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("company", companySchema);
