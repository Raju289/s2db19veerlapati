const mongoose = require("mongoose")
const heroineSchema = mongoose.Schema({
    heroine_name: String,
    heroine_color: String,
    heroine_cost: Number
})
module.exports = mongoose.model("Heroine", heroineSchema)