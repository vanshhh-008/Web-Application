const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    review: {
        type: String,
        required: true,
    },
});


const ReviewModel = mongoose.model('reviews', ReviewSchema);

module.exports = ReviewModel;
