import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import LoginForm from "./LoginForm";
import './LoginPage.css'

const LoginPage = (props) => {
 
  const {artic} = props.store;
  const {image_id, title, artist_display} = artic


const [caption, setCaption] = useState(true);

  useEffect(() => {
    props.dispatch({type: 'FETCH_RANDOM'})
    }, []);
  

    const toggleCaption = () => setCaption(!caption);

  
   
    

  
// const letter = 'ad';

// !artic.artist_display ? null : (() => {
  // console.log('artist_display:', artist_display);
  
  

  



// const months = ['Jan', 'March', 'April', 'June'];
// const filteredArtistDisplay = artist_display.splice('Gauguin' || 'picasso' || 'Gogh' || 'Matisse' || 'C\xE9zanne', 0, ';');
// inserts at index 1()
// console.log('spliceString:', spliceString(artist_display))
const ARTISTS = ['Gauguin', 'Picasso', 'Gogh', 'Matisse', 'C\xE9zanne']
const NATIONALITIES = ['\nFrench', '\nDutch', '\nSpanish']
  
if (artist_display) {
//     const {title, image_id, artist_display} = artic;
  // const words = artist_display.split('nSpanish' ||'nDutch' || 'nFrench');
//  console.log('1words:', words)
//  function sliceFunction(array, index) {
//      array.splice(index, 100, ';')

//  }


 const ret = artist_display.replace(NATIONALITIES,'');
 console.log('ret:', ret);   //prints: 123
const splitRet = ret.split(' ')
console.log('splitRet:', splitRet)
const myPop = splitRet.pop()
// console.log('myPop:', myPop())
 function myFuckingFunction() {
 for (let i = 0; i < ARTISTS.length; i++) {
  if(ret.includes(ARTISTS[i])) {
    console.log('hooray')
   return doIt(ARTISTS[i])
 }
  // text += "The number is " + i + "<br>";
}
return console.log('finished')
 }


//  ARTISTS.forEach((artist) => {
//  if(ret.includes(artist)) {
//    console.log('hooray')
//   return doIt(artist)
// }
// })
let moreRet
function doIt(artist) {
 moreRet = ret.replace(artist, `${artist};`)
return console.log('moreRet:', moreRet)
}
console.log('myfuckingFunction():', myFuckingFunction())


// console.log('moreRet:', moreRet)
//  const retArray = ret.split()
//  console.log('retArray:', retArray)
//   return  array.join(' ');
// const splicedRetArray = retArray.splice(ARTISTS, ';')
// splicedRetArray.join(' ')

// //  }
// console.log('splicedRetArray:', splicedRetArray)
// //   // console.log('2words:', words.indexOf('Henri' || 'Pablo' || 'Vincent' || 'Paul'))
// //   console.log('sliceFunction:', sliceFunction(words, 1))




// function sliceFunction (array, index, add ){
// array.splice(index, ARTISTS, add)

// return array.join('')
// // console.log('result:', array)
// }





// const myIndex = retArray.indexOf(ARTISTS)
// console.log('myIndex:', myIndex)
// console.log('splicedRetArrayFINAL:', sliceFunction(retArray, myIndex, ';'))
//   // function spliceString(str, index, count, add) {
//   //   // We cannot pass negative indexes directly to the 2nd slicing operation.
//   //   if (index < 0) {
//   //     index = str.length + index;
//   //     if (index < 0) {
//   //       index = 0;
//   //     }
  //   }
  
  //   return str.slice(0, index) + (add || "") + str.slice(index + count);
  // }
  // console.log('spliceString:', spliceString(artist_display, artist_display.indexOf(ARTISTS + 1), 0, ';'))
  
  // console.log('cdcdcd', words[1])
  // console.log("words['Gauguin' || 'picasso' || 'Gogh' || 'Matisse' || 'C\xE9zanne']:", words.includes(
  //   'Gauguin')
  //   //  || 'picasso' || 'Gogh' 
  //   //  || 'Matisse' || 'C\xE9zanne'
  //   )
//   function spliceString(array, index, count) {
// // const splicedWords = words.splice(2, 0, ';') => words.join
// // console.log('splicedWords:', splicedWords)
//   array.splice(index, count)
// return array.join(' ')
// };

// function spliceString(array, 
//        index, count, add
//       ) {
  
//   //     console.log("artistDisplayString['Gauguin']", artistDisplayString)
//   //     // index = artistDsiplayString['Gauguin' || 'picasso' || 'Gogh' || 'Matisse' || 'C\xE9zanne']
  
//   // console.log('vvvv:', words[1]
//   // || 'picasso' || 'Gogh' || 'Matisse' || 'C\xE9zanne'
  
//        array.splice(index, count, add);
//        return array
//       //  array.join(' ');
//     }


// console.log('dfdfd', 
// const caption = spliceString(words, 2, 0)

return ( <section id ='login-section'>
                {/* {JSON.stringify(props.store)} */}

                {/* <center> */}
                  {/* <figure id='masterpiece'> */}
        {!image_id ? (<h2>Loading Artwork...</h2>) : 
        (<figure>
        <img id='master-image'
         className={'frame', 'border-one'} 
        src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`} 
        alt="random artwork"
        onClick={toggleCaption}
        />
       
       <figcaption 
       className={caption ? '' : 'hide' }
      //  onMouseEnter={toggleHover}
      //  onMouseLeave={toggleHover}
      //  className="hide-on-hover"
       > 

<address id='master-caption'>
  <h2>{title}</h2>
  <p>{moreRet}</p>
  {/* {caption} */}
  {/* <p>{filteredArtistDisplay}</p> */}
</address>
</figcaption> 
        </figure>
)}


{/* <form> */}
{/* <div class="door-container"> */}
  {/* <div id="rose-door">   */}
  <span id='login-form'>
  <LoginForm />
  </span>
  <button
            type="button"
            id='go-to-register'
            onClick={() => {
              props.history.push("/registration");
            }}
          >
            Register
          </button>
          {/* </form> */}
  {/* </div> */}
{/* </div> */}
{/* <div> */}
         
          {/* </div> */}
        {/* </center> */}
      </section>
 ) }else{return <h1>Loading...</h1>}}
    
  



export default connect(mapStoreToProps)(LoginPage);
