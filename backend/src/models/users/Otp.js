const mongoose = require("mongoose");
const OTPSchema = mongoose.Schema(
  {
    email: { type: String },
    otp: { type: String },
    status: { type: Number, default: 0 },
  },
  { versionKey: false, timestamps: true }
);
module.exports.Otp = mongoose.model("otps", OTPSchema);
