const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();
const router = express.Router()

router.post('/', (req, res) => {
  // GET route code here
  console.log('in /api/art POST route');
  // console.log('Is User logged in?', req.isAuthenticated());
  // console.log('req.user:', req.user);
  const twiml = new MessagingResponse();
  twiml.message('TwilioQuest rules');


  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
  // res.send(twiml)
  // let queryText = `SELECT * FROM "art"
  //                   WHERE "user_id" = $1;`;
  
  // pool.query(queryText, [req.user.id]).then((result) => {
  //     res.send(result.rows);
  // }).catch((error) => {
  //     console.log(error);
  //     res.sendStatus(500);
  // });


});

// d
// router.post('/sms', (req, res) => {

 
// });

// http.createServer(app).listen(8080, () => {
//   console.log('Express server listening on port 8080');
// });
module.exports = router;



router.route('/sms').post(
  (req, res) => {
    console.log('in POST')
      res.send('You havehit the sms api')
  }
)
.get(
  (req, res) => {
    console.log('in /sms get')

    const twiml = new MessagingResponse();
    twiml.message('this is the message from your twilio app');
    // res.writeHead(200, {'Content-Type': 'text/xml'});
    // res.end(twiml.toString());


  
})