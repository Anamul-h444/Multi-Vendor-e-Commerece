const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    email: { type: String, unique: true },
    name: { type: String },
    password: { type: String },
    photo: { type: String },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports.User = mongoose.model("users", DataSchema);
