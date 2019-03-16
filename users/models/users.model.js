const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rest-api-tutorial');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    permissionLevel: Number
 });