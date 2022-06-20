const mongoose = require('mongoose');
const { Schema } = mongoose;

const myurlsSchema = new Schema(
    {
        url_original: {
            type: String,
            required: true,
        },
        url_acortada: {
            type: String,
            required: true,
        }
    }, 
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Urls', myurlsSchema);