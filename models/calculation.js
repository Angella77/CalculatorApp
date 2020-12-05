const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calculationSchema = new Schema({
    equation: {type: String, required: true },
    result: { type: String, required: true },
    time: { type: Date, default: Date.now }
});


const Calculation = mongoose.model("Calculation", calculationSchema);

module.exports = Calculation;
