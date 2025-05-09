const mongoose = require("mongoose");

const { Schema } = mongoose;

const { partySchema } = require("./Party");

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    parties: { type: [partySchema] },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
