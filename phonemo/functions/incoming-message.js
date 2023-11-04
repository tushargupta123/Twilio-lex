const assets = Runtime.getAssets();
const { Data } = require(assets["/data.js"].path);

exports.handler = (context, event, callback) => {
  const twiml = new Twilio.twiml.MessagingResponse();
  const data = new Data(context);
  const action = data.parseInput(event.body);
  switch(action.command){
    case "join":
        const talk = data.getTalkByCode(action.code);
        if(talk){
            data.addRegistration(action.code, event.From);
            twiml.message(`you are now registered for ${talk.title}. Don't call us we'll call you!`)
        }else{
            twiml.message(`Unable to find upcoming talk with code "${action.code}"`)
        }
        break;
    default:
        twiml.message(`I am not sure what you mean by "${event.body}"`);
        break;
  }
  return callback(null, twiml);
};