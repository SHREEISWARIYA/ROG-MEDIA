const mongoose = require("mongoose");
const { isEmail } = require("validator");
const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Required Valid Name"],
    },
    email_address: {
      type: String,
      required: [true, "Please Enter Valid Email Address"],
      trim: true,
      lowercase: true,
      validate: [isEmail, "Please, enter a valid email "],
    },
    subject: {
      type: String,
      required: [true, "subject needed"]
    },
    phone: {
      type: String,
      required: [true, "Must mention mobile number for contact"],
    },
    message: {
      type: String,
      required: [true, "Message needed"]
    }
  }
)

const customerModel = mongoose.model("customerDetails", customerSchema);
module.exports = customerModel;