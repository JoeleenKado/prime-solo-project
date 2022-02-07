import React, { useEffect, useState } from 'react'
import './Gallery.css'
import Edit from './Edit'
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

function Art(props) {
    const {artwork, history} = props
    const {artist, title, statement, size, medium, url, id} = artwork
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

// function toggleAccordion(e) {
//   const content = e.target.nextElementSibling;
//   if (content.style.maxHeight) {
//     content.style.maxHeight = null;
//   } else {
//     content.style.maxHeight = content.scrollHeight + "px";
//   }
//   // if (content.style.tranform) {
    
// console.log('target:', e.target)
// // console.log('parentELement:', e.target.parentElement.nextElementSibling )
 
// // console.log('flipCardInner:', flipCardInner)

// let nextSibling = flipCardInner.nextElementSibling;
// console.log('nextElementSibling:', nextSibling);


// console.log('content:', content)
// let element = document.getElementsByClassName('flip-card-inner')
//   // }
//   console.log('element:', element)
// }

console.log('1st half of url:', url.slice(0, 32));

console.log('2nd half of url:', url.slice(32));
const resize = '/resize=width:300,height:200'
// expected output: "the lazy dog."
const url300 = url.slice(0, 32) + resize + url.slice(32)
console.log('url300:', url300)
// https://cdn.filestackcontent.com/2yclMtrSuiWobS11HHtw/resize=300)   
   

return (
     <>
     <div className='container'>
<div class="flip-card">
  <div className="flip-card-inner">
    <div class="flip-card-front">
      {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
    
      <table>
    <tbody>
      {/* front */}
    <tr>
        <td><img src={url300} alt='artwork'/></td>
      </tr>
      {/* <tr>
        <td>{title}</td>
      </tr> */}
      </tbody></table>
    
  
    
    
    
    </div>
   
   
   <div className="flip-card-back">
          <table><tbody>
          <tr>
        <td>Medium: {medium}</td>
      </tr>
      <tr>
        <td>Size: {size}</td>
      </tr>
      <tr>
        <td>Statement: {statement}</td>
      </tr>
      {/* <tr><td><Edit/></td> */}
      {/* </tr> */}
      <tr><td><button 
       onClick={() => history.push(`edit/${title}/${medium}/${size}/${statement}/${encodeURIComponent(url300)}/${id}`)}
      >EDIT</button></td></tr>
      </tbody>
      </table>
    
 
 
 </div>
 <br/>
</div>
{title}



{/* function toggleAccordion(e) { */}
  {/* // const content = e.target.nextElementSibling;
  if (content.style.transform) {

    content.style.maxHeight = null;
   } 
   {/* // } else { */}
  {/* //   content.style.maxHeight = content.scrollHeight + "px"; */}
  {/* // } */}
{/* } */} 

{/* {loaded ? (() => {
  if (!flipCardInner.style.transform) {
      return title
  } else { */}
{/* return(  */}
  {/* <div className="accordian-container"> */}



    {/* <button className="accordion" onClick={(e) => toggleAccordion(e)}> */}
               
               
                 {/* Edit */}
               {/* </button>  */}
             {/* <div className="accordion-content"> */}
                 {/* <br /> */}
                  {/* <Edit */}
                  {/* //  art={art} */}
                 {/* />  */}
                 {/* <br /> */}
               {/* </div> */}
               {/* </div> */}
   


    {/* )  */}
{/* ) */}
 {/* : (
 
  null          

 ) */}
{/* <>
 
           </>  */}







 </div>
 {/* {title} */}


    </div> 
     </> 
   )
}
// export default Art
export default connect(mapStoreToProps)(Art);
