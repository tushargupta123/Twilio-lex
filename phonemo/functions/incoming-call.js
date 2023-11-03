exports.handler = (context,event,callback) =>{
    const twiml = new Twilio.twiml.VoiceResponse();
    twiml.dial().conference('sample-conference-name');
    console.log(`twiml is ${twiml}`);
    return callback(null,twiml)
}