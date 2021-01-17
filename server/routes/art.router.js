//import mapStoreToProps from '../../redux/mapStoreToProps';





const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  console.log('in /api/art GET route');
  console.log('Is User logged in?', req.isAuthenticated());
  console.log('req.user:', req.user);

  let queryText = `SELECT * FROM "art"`;
  
  pool.query(queryText).then((result) => {
      res.send(result.rows);
  }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
  });


});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  let newArt = req.body;
  console.log(`Adding art`, newArt);
 // console.log('RS:', props.store)
//console.log(this.state.user.id);

  let queryText = `INSERT INTO "art" ("user_id", "title", "medium", "dimension", "url", "statement")
  VALUES ($1, $2, $3, $4, $5, $6);
  `;
  pool.query(queryText, [newArt.user_id, newArt.title, newArt.medium, newArt.dimension, newArt.url, newArt.statement])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new artwork`, error);
      res.sendStatus(500);
    });

});

module.exports = router;

router.put('/:id',  (req, res) => {
  console.log('in PUT');
  
  let artwork = req.body; // Book with updated content
  
  let id = req.params.id; // id of the book to update
console.log(artwork, id);
  //console.log(`Updating book ${id} with `, book);
let queryText = `UPDATE "art"
SET "title" = $1, "medium" = $2, "dimension" = $3, "url" = $4, "statement" = $5
WHERE "id" = $6;`;

  // TODO - REPLACE BELOW WITH YOUR CODE
  pool.query(queryText, [artwork.title, artwork.medium, artwork.dimension, artwork.url, artwork.statement, id]).then( (result) => {
            // Delete sends back an OK status, 
            // client will then ask for all the data with a GET
            res.sendStatus(200);
        })
        .catch( (error) => {
            console.log('Error from db:', error);
            res.sendStatus(500);
        })

});

router.delete('/:id',  (req, res) => {
  let id = req.params.id; // id of the thing to delete
console.log('id to delete', id);
res.send('ok');
//  console.log('in delete');
let queryText = `DELETE FROM "art" WHERE id=$1
RETURNING "title";`//what is the 1 here
  //console.log('Delete route called with id of', id);
  // TODO - REPLACE BELOW WITH YOUR CODE
  //res.sendStatus(500);
  pool.query(queryText, [id])
    .then(result => {
      console.log('Artwork Deleted:', result.rows[0]); 

      //res.sendStatus(200);
    })
    .catch(error => {
      console.log(`Error with Delete request`, error);
      res.sendStatus(500);
    })});

