class Data{
    constructor(context){
        this.context = context;
    }

    getCurrentTalk(){
        return this.getUpcomingTalks()[0];
    }

    getUpcomingTalks(){
        return [
            {title: "Billionaires in Space",
            code:"astronaut",
            startTime:"2023-11-04T05:23:31.818Z",
            speakers:[{
                name:"Tushar",
                phoneNumber:"+917837242626"
            }],
            },
            {title: "Taco tuesday should be everyday",
            code:"taco",
            startTime:"2023-11-04T05:23:31.818Z",
            speakers:[{
                name:"Tushar",
                phoneNumber:"+917837242626"
            }],
            },
        ]
    }

    parseInput(input){
        const action = {
            input
        };
        const normalized = input.trim().toLowerCase();
        const parts = normalized.split(/\s+/);
        if(parts.length===2){
            action.command = parts[0];
            action.code = parts[1];
        }
        return action;
    }

    getTalkByCode(code){
        const talks = this.getUpcomingTalks();
        return talks.find((talk) => talk.code === code);
    }

    addRegistration(code,phoneNumber){
        return true;
    }

    async getRegistrants(talk){
        const client = this.context.getTwilioClient();
        const messages = await client.messages.list({
            to: this.context.TWILIO_PHONE_NUMBER
        });
        return messages.filter((msg) => {
            const action = this.parseInput(msg.body);
            return action.command === "join" && action.code === talk.code;        
        }).map((msg) => {
            return {phoneNumber: msg.From};
        });
    };
};

module.exports = {
    Data
}