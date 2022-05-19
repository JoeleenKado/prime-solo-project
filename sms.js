require('dotenv').config();

const accountSid = process.env.REACT_APP_TWILIO_ACCOUNT_SID;
const authToken = process.env.REACT_APP_TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);



client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+15153163716',
     to: '+16512635151'
   })
  .then(message => console.log(message.sid));



  