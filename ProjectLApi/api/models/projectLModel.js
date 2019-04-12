'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CardSchema = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String,
        required: 'Kindly enter the name of the card'
    },
    title: {
        type: String
    },
    subtitle: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Cards', CardSchema);