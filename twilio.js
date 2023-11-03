// for sending message

// const accountSid = 'ACf5e5c3d53a9ab4c563b663fc1e5954bb';
// const authToken = 'fde9d9987c1addb4da7d663d33284267';
// const client = require('twilio')(accountSid, authToken);

// client.messages
//       .create({from: '+15313313936', body: 'Hi there', to: '+917837242626'})
//       .then(message => console.log(message));












// for auto responding

// const MessagingResponse = require('twilio').twiml.MessagingResponse;


// const response = new MessagingResponse();
// const message = response.message();
// message.body('Hello World!');

// console.log(response.toString());












// sending message to whatsapp

// const accountSid = 'ACf5e5c3d53a9ab4c563b663fc1e5954bb';
// const authToken = 'fde9d9987c1addb4da7d663d33284267';
// const client = require('twilio')(accountSid, authToken);

// client.messages
//     .create({
//         body: 'Hi this message is from tushar on whatsapp',
//         from: 'whatsapp:+14155238886',
//         to: 'whatsapp:+917837242626'
//     })
//     .then(message => console.log(message.sid));












// sending reply in whatsapp with media

// const express = require('express');
// const bodyParser = require('body-parser');
// const MessagingResponse = require('twilio').twiml.MessagingResponse;
// const PDFDocument = require('pdfkit');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));

// app.post('/sms', (req, res) => {
//   const msgText = req.body.Body;
//   const senNum = req.body.From.replace('whatsapp:', '');

//   const twiml = new MessagingResponse();
//   twiml.message(`You send ${msgText} from: ${senNum}`);

//   // for attaching image
//   twiml.message().media('https://vignette2.wikia.nocookie.net/watamote/images/4/48/Imae_%28ep_11%29_%283%29.jpeg/revision/latest?cb=20140725134208');



//   // for attaching pdf

//   const doc = new PDFDocument();
//   const pdfFilePath = path.join(__dirname, 'sample.pdf');
//   doc.pipe(fs.createWriteStream(pdfFilePath));
//   doc.info.Title = 'Sample';
//   doc.info.Author = 'Tushar';
//   doc.text(`You send ${msgText} from: ${senNum}`);
//   doc.end();
// //   const mediaUrl = `c:\Users\tusha\Desktop\FlexiEle\sample.pdf`;
// //   twiml.message().media(mediaUrl);





//   res.writeHead(200, { 'Content-Type': 'text/xml' });
//   res.end(twiml.toString());
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


// ngrok steps
// 1. open ngrok
// 2. write hhtp 3000
// 3. get forwarding link from there
// 4. go to twilio whatsapp server configuration and paste link over there


























// receiving media from twilio

// const express = require('express');
// const bodyParser = require('body-parser');
// const MessagingResponse = require('twilio').twiml.MessagingResponse;

// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));

// app.post('/sms', (req, res) => {
//   const img = req.body.MediaUrl0;
//   const senNum = req.body.From.replace('whatsapp:', '');
//   const twiml = new MessagingResponse();

//   twiml.message().media(img);

//   res.writeHead(200, { 'Content-Type': 'text/xml' });
//   res.end(twiml.toString());
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

























// create a call from twilio

const accountSid = 'ACf5e5c3d53a9ab4c563b663fc1e5954bb';
const authToken = 'fde9d9987c1addb4da7d663d33284267';
const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
         url: 'https://handler.twilio.com/twiml/EH79e1b64d4c5ab7754f7860174b2a1cd6',    // this url is from twiml bin
         to: '+917837242626',
         from: '+15313313936'
       })
      .then(call => console.log(call.sid));
