const express = require('express');
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');
  const encryptLib = require('../modules/encryption');
  const pool = require('../modules/pool');
  const userStrategy = require('../strategies/user.strategy');
  // app.use('/api', router)
  
  const router = express.Router();
  
  
  router.route('/password').put(
    (req, res) => {
        console.log('req.body:', req.body)
        const username = req.body.username;
          const password = encryptLib.encryptPassword(req.body.password);
          let queryText = `UPDATE "user"
        SET "password" = $1
        WHERE "username" = $2;`;
          pool.query(queryText, [password, username]).then( (result) => {
            console.log('in pool.query');      
          res.send(req.body)})
   
        // res.send('hello get cat')
    }
)



  
  
  module.exports = router;
