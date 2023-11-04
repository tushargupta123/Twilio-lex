exports.handler = function(context, event, callback) {
  const twiml = new Twilio.twiml.VoiceResponse();
  console.log(`secret luggage password :${context.PASSWORD_FOR_MY_LUGGAGE}`)
  twiml.say(`Hello ${event.FirstName}!`);
  callback(null, twiml);
};


// twilio serverless:start