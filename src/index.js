var Alexa = require('alexa-sdk');
//Comment test
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);

    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function() { //Executes when a new session is launched
        this.emit('LaunchIntent');
    },

    'LaunchIntent': function() {
        this.emit(':ask', "Hello Jarvis how are you?");
    },

    'HelloIntent': function() {
        this.emit(':tell', "Good to hear from you. You have successfully tested hello world skill. Good bye.");
    }
};
