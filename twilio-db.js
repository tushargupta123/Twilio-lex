const mongoose = require('mongoose')
const express = require('express');
const bodyParser = require('body-parser');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const Message = require('./messageModel');

async function main() {
    await mongoose.connect("mongodb+srv://tushargupta2k3:tUshar%40123@twitter.fzbvq5v.mongodb.net/twilio_db");
}
  
main().catch((err) => console.log(err));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sms',async (req, res) => {
  const msgText = req.body.Body;
  const senNum = req.body.From.replace('whatsapp:', '');
    try{
        const newMsg = new Message({
            text:msgText,
            senderNumber:senNum,
        })
        await newMsg.save();
    }catch(err){
        console.log("Message not saved")
    }
  const twiml = new MessagingResponse();
  twiml.message(`You send ${msgText} from: ${senNum}`);
  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  main();
  console.log("db connection established")
});