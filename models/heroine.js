const mongoose = require("mongoose")
const heroineSchema = mongoose.Schema({
    heroine_name: {
        type: String,
        minLenght: 5
    },
    heroine_color:{
        type: String,
        minLenght: 4
    },
    heroine_cost:{
        type: Number,
        minLenght: 5
    }
})
module.exports = mongoose.model("Heroine", heroineSchema)