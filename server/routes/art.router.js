//import mapStoreToProps from '../../redux/mapStoreToProps';
const axios = require('axios')




const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');
// app.use('/like', Router);

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  console.log('in /api/art GET route');
  console.log('Is User logged in?', req.isAuthenticated());
  console.log('req.user:', req.user);

  let queryText = `SELECT * FROM "art"
                    WHERE "user_id" = $1;`;
  
  pool.query(queryText, [req.user.id]).then((result) => {
      res.send(result.rows);
  }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
  });


});

router.get('/:id', rejectUnauthenticated, (req, res) => {
  // GET route code here
  const {id} = req.params

  console.log(`in /api/art/${id} GET route`);
  console.log('Is User logged in?', req.isAuthenticated());
  console.log('req.user:', req.user);
// const id = req.params.id
  let queryText = `SELECT * FROM "art"
                    WHERE "user_id" = $1;`;
  
  pool.query(queryText, [id]).then((result) => {
      res.send(result.rows);
  }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
  });


});


// router.get('/aic', (req, res) => {
//   // GET route code here
//   console.log('in /api/art/aic GET route');
//   // console.log('Is User logged in?', req.isAuthenticated());
//   // console.log('req.user:', req.us
//   axios.get(`https://api.artic.edu/api/v1/artworks?fields=artist_display,image_id,title`)
//         .then( response => {
//             console.log('here is our response', response.data);
            
//             //console.log('response:', response);
//             // Response.data is the info or data part of the axios response.
//             // Giphy also sends stuff in data, so 2 data's gets to the array of images
//             res.send( response.data );
//         })
//         .catch( error => {
//             console.log('Error doing GET from aic', error );
//             res.sendStatus( 500 );
//         })
// })
/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  let art = req.body;
  console.log(`Adding art`, art);
 // console.log('RS:', props.store)
//console.log(this.state.user.id);

  let queryText = `INSERT INTO "art" ("user_id", "title", "medium", "size", "url", "statement")
  VALUES ($1, $2, $3, $4, $5, $6);
  `;
  pool.query(queryText, [art.user_id, art.title, art.medium, art.size, art.url, art.statement])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new artwork`, error);
      res.sendStatus(500);
    });

});

module.exports = router;

router.put('/like/:id', rejectUnauthenticated, (req, res) => {
const {id} = req.params
  console.log(`put like; the painting with the following
  id will be updated:`, id)

  let queryText = `UPDATE "art" 
  SET "likes" = SUM("likes" + 1)
WHERE id = $1;
  `;
  pool.query(queryText, [id])
    .then(result => {
      console.log('result of update likes query:', result)
      res.send(result.rows[0]);
    })
    .catch(error => {
      console.log(`Error adding new artwork`, error);
      res.sendStatus(500);
    });
    // res.sendStatus(500)
  })

router.put('/', rejectUnauthenticated, (req, res) => {
  console.log('in PUT');
  
  let art = req.body; // Book with updated content
  const property = Object.keys(art)[0]
  const value = Object.values(art)[0]
  // let id = req.params.id; // id of the book to update
console.log('Updating', art);
console.log(art);
console.log('property:', property)
console.log('value:', value)
  //console.log(`Updating book ${id} with `, book);
let queryText = `UPDATE "art"
SET "${property}" = $1
WHERE "id" = $2;`;
// "medium" = $2, "sizes" = $3, "statement" = $4

// console.log('art.property:', art.property)
  // TODO - REPLACE BELOW WITH YOUR CODE
  pool.query(queryText, [value, art.id]).then( (result) => {
    console.log('in pool.query');
     
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
console.log('Deleting artwith id:', id);
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

    router.get('/:id', rejectUnauthenticated, (req, res) => {
      // GET route code here
      id = req.params.id;
      console.log('req.params', req.params);
      console.log('in /api/art/:id GET route');
      console.log('Getting details for art with id:', id)
      console.log('Is User logged in?', req.isAuthenticated());
      console.log('req.user:', req.user);
    
      let queryText = `SELECT * FROM "art"
                        WHERE "id" = $1;`;
      
      pool.query(queryText, [id]).then((result) => {
          res.send(result.rows);
      }).catch((error) => {
          console.log(error);
          res.sendStatus(500);
      });
    
    
    });