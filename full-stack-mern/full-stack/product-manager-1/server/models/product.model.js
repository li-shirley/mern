const mongoose = require('mongoose');

const priceValidator = function(price) {
    var re = /^\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(\.[0-9][0-9])?$/;
    return re.test(price)
}

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required."]
    },
    price: {
        type: Number,
        required: [true, "Price is required."],
        min: [.01, "Price must be greater than 0."],
        validate: [priceValidator, "Invalid price format."]
    },
    description: { 
        type: String,
        required: [true, "Description is required."] },
}, { timestamps: true });

module.exports.Product = mongoose.model('Product', ProductSchema);

