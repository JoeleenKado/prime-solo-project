//import mapStoreToProps from '../../redux/mapStoreToProps';
const axios = require('axios')




const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
// router.get('/', rejectUnauthenticated, (req, res) => {
//   // GET route code here
//   console.log('in /api/art GET route');
//   console.log('Is User logged in?', req.isAuthenticated());
//   console.log('req.user:', req.user);

//   let queryText = `SELECT * FROM "art"
//                     WHERE "user_id" = $1;`;
  
//   pool.query(queryText, [req.user.id]).then((result) => {
//       res.send(result.rows);
//   }).catch((error) => {
//       console.log(error);
//       res.sendStatus(500);
//   });


// });

router.get('/', async (req, res) => {
  // GET route code here
  // function getRandomIntInclusive(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  // }
  
  console.log('(1) in /api/artic GET route');

  
  
  const randomPage = Math.floor(Math.random() * (20) + 1)
  console.log('(2) randomPage:', randomPage)
  let randomData
  let randomArt
  // console.log('Is User logged in?', req.isAuthenticated());
  // console.log('req.user:', req.us
  
    const response = await axios.get(`https://api.artic.edu/api/v1/artworks/search?q=picasso,gauguin,cezanne,van goh,matisse&fields=id,artist_display,image_id,title&page=${randomPage}`
    ).catch((err) => {
      console.log('(2.5) error in GET data')
    })
    

    // axios.get(`https://api.artic.edu/api/v1/artworks?fields=artist_display,image_id,title&limit=100&page=${randomPage}`)
        // .then( response => {
          // console.log('here is our response:', response)
          const art = response.data.data
            // console.log(`(3) here is the artwork yielded by 'https://www.artic.edu/open-access/public-api': ${art}`);
//filter the data so that we have only artworks done by our artists
// Object.filter = (data, predicate) =>
//       Object.keys(data)
//         .filter((key) => predicate(data[key]))
//         .reduce((res, key) => Object.assign(res, { [key]: data[key] }), {});
//     const filteredData = Object.filter(data, (data) => data === "picasso");
//     console.log("filteredData:", filteredData);

// const filteredData = data.filter(index => index.artist_display.includes('Cezanne'));
// console.log('filteredData:', filteredData)

// function filterItems(arr, query) {
//   return arr.filter(function(el) {
//     return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
//   })
// }

// console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
// console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']
// const artwork = []
const filteredArt = []

function artFilter(objArr, artist) {
  console.log('Entering artFilter()')
  objArr.forEach((obj) => {if (obj.artist_display.includes(artist)){
   return console.log('(3.5) in artFilter if block:', filteredArt.push(obj))
  } else return null
  // return null
  //  else if (!obj.artist_display.includes(artist)){  return null}
  // return console.log('(4) exiting filterArtwork if()')
// return console.log('STAR')
} 
  )
  // console.log('filteredArtwork:', artwork)
return console.log('(4) Exiting filterArt()')
}//END artFilter()
// const accentedE = document.write('e&#769;')
artFilter(art, 'Pablo Picasso')
artFilter(art, 'Paul Gauguin')
artFilter(art, 'Vincent van Gogh')
artFilter(art, 'Henri Matisse')
artFilter(art, "Paul C\xE9zanne")
// console.log('herehere:', 'C\xE9zanne' )


// filterArtwork(data, 'Cezanne')


console.log('(5) filteredArt:', filteredArt)

// const filteredData = data.filter(artwork => (artwork.artist_display.includes('Gauguin''Picasso')));
// console.log('here', filteredData);
      
// console.log(lea);



// function filterItems(arr, query) {
//   return arr.filter(function(el) {
//     return el
//   })
// }
// console.log('here', lea)

            randomArt = filteredArt[Math.floor(Math.random()*filteredArt.length)];
            console.log('(4) randomArt:', randomArt)


     
          
          
          //Now we must hit the iiif api to get the image associated with our randomArt.image_id
            //console.log('response:', response);
            // Response.data is the info or data part of the axios response.
            // Giphy also sends stuff in data, so 2 data's gets to the array of images
            // res.send( response.data );
        
        // .catch( error => {
        //     console.log('Error doing GET to artic', error );
        //     res.sendStatus( 500 );
        // }) catch(err) {console.error(err)}
        //  console.log('fff', randomArt.image_id)

// console.log('parsedImageId:', imageId)

// const artBox = {
//   randomArt : randomArt,
//   imageId : imageId
// }
// console.log('articObject:', artBox)

res.send(randomArt)
       

// axios.get(`https://www.artic.edu/iiif/2/${parsedData}/full/843,/0/default.jpg`).then((res) => {
//         randomArt = res.data 
        
//         //randomArt is an image, therefore we cannot properly console.log() it.
//           // res.send(randomArt)
//         }).catch((err) => {
//           console.log('Error doing GET to iiif', err)
//         })
//         res.send(randomArt)



})
/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  let art = req.body;
  console.log(`Adding art`, art);
 // console.log('RS:', props.store)
//console.log(this.state.user.id);

  let queryText = `INSERT INTO "art" ("user_id", "title", "medium", "dimension", "url", "statement")
  VALUES ($1, $2, $3, $4, $5, $6);
  `;
  pool.query(queryText, [art.user_id, art.title, art.medium, art.dimension, art.url, art.statement])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new artwork`, error);
      res.sendStatus(500);
    });

});

module.exports = router;

router.put('/',  (req, res) => {
  console.log('in PUT');
  
  let art = req.body; // Book with updated content
  
  let id = req.params.id; // id of the book to update
console.log('Updating', art.title);
console.log(art);

  //console.log(`Updating book ${id} with `, book);
let queryText = `UPDATE "art"
SET "title" = $1, "medium" = $2, "dimension" = $3, "url" = $4, "statement" = $5
WHERE "id" = $6;`;

  // TODO - REPLACE BELOW WITH YOUR CODE
  pool.query(queryText, [art.title, art.medium, art.dimension, art.url, art.statement, art.id]).then( (result) => {
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