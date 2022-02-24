import React, { useEffect, useState } from 'react'
import './Gallery.css'
import Edit from './Edit'
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import Caption from './Caption';
function Art(props) {
    const {artwork, history} = props
    const {artist, title, statement, size, medium, url, id} = artwork
    const encodedUrl = encodeURIComponent(url)
 console.log('artwork', artwork)
//     console.log('Object.values(artwork)', Object.values(artwork))
//  const values = Object.values(artwork)
//  values.forEach(value => {
//    if (value === '') {value = "N/A"}
// Object.filter = (obj, predicate) => 
//     Object.keys(obj)
//           .filter( key => predicate(obj[key]) )
//           .reduce( (res, key) => Object.assign(res, { [key]: obj[key] }), {} );

// Example use:
// var scores = {
//     John: 2, Sarah: 3, Janet: 1
// };
// const filtered = Object.filter(artwork, item => item === ''); 
// console.log('filtered:', filtered);  

// console.log('fffffdccc', Object.keys(filtered))



// var superSecret = function(spy){
//   function filter(obj) {
//     Object.keys(obj).forEach(function(key){ obj[key] = "NA" });
// return Object.assign(artwork, filtered)
//   }

  // Object.keys(filtered).forEach(function(key){ filtered[key] = "NA" });

// Object.keys(filtered).forEach(key => {
//   filtered[key] = 99;
// });
// console.log('newvalues:', Object.values(filtered))
// console.log('key', Object.keys(filtered))
// const target = artwork
// const source = 
// const filteredArtwork = Object.assign(artwork, filtered)


// console.log('filteredArtwork:', filteredArtwork)
// Object.values(filtered).forEach()

// const filteredArtwork = filter(filtered)
//   })
// let blankValues = []
//  console.log('kkkkk', Object.values(artwork).forEach(value => {if (value === ''){
//    console.log('hooray')
//    blankValues.push(value)
//   }}))
//   console.log('blankValues', blankValues)
// // Example use:
// var scores = {
//   John: 2, Sarah: 3, Janet: 1
// };
// var filtered = Object.filter(scores, score => score > 1); 
// console.log(filtered);


    const [loaded, setLoaded] = useState(false)
    let flipCardInner
    // let otherFlip
      //  const url = `${props.art.url}/resize=300`
// console.log('url:', url
// const url = `${props.art.url}`
// const resizedUrl = props.art.url.splice(32, 0, '/resize=300')
// function processFlipCardInner(e) {
//   flipCardInner = document.querySelector('.flip-card-inner');
// //  otherFlip = document.getElementsByClassName('flip-card-inner')
//   console.log('flipCardInner:', flipCardInner)
// // console.log('otherFlip:', otherFlip)
// }
// useEffect(() => {
//   processFlipCardInner() 
// setLoaded(true)
// },[])


// console.log('1st half of url:', url.slice(0, 32));

// console.log('2nd half of url:', url.slice(32));
// // const resize = '/resize=width:300,height:200'
// // expected output: "the lazy dog."
// // const url300 = url.slice(0, 32) + resize + url.slice(32)
// // console.log('url300:', url300)
// // https://cdn.filestackcontent.com/2yclMtrSuiWobS11HHtw/resize=300)   
// // f
// console.log('encodedURL:', encodedUrl)
// console.log('filteredArtwork.size:', filteredArtwork.size)

return (
  <>
  {/* <ul> */}
     <li>
     {/* <div className='row'> */}
       {/* <figure> */}
       <img src={url} alt='artwork'/>
         {/* <div> */}
{/* <div class="one"> */}
{/* <table>
    <tbody>
      {/* front */}
    {/* <tr>
        <td><img src={url} alt='artwork'/></td>
      </tr> */}
      {/* <tr>
        <td>{title}</td>
      </tr> */}
      {/* </tbody></table> */} 
    {/* <figcaption> */}


    {/* </figcaption> */}
  
    
    



{/* </div> */}
 {/* </figure> */}
 <Caption artwork={artwork} history={history}/>

    {/* </div>  */}
     </li> 
     {/* </ul> */}
     {/* <Caption artwork={artwork}/> */}
       </>
   )
}
// export default Art
export default connect(mapStoreToProps)(Art);
