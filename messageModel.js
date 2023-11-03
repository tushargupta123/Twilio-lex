const mongoose = require('mongoose')

const messageModel = new mongoose.Schema({
    text:String,
    senderNumber:String
},{timestamps:true})

const Message = mongoose.model('Message',messageModel);

module.exports = Message;