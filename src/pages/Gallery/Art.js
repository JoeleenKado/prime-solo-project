import React from 'react'
import './Gallery.css'
function Art(props) {
    const {title, statement, dimensions, medium, url} = props.art
  //  const url = `${props.art.url}/resize=300`
// console.log('url:', url
// const url = `${props.art.url}`
// const resizedUrl = props.art.url.splice(32, 0, '/resize=300')

console.log('1st half of url:', url.slice(0, 32));

console.log('2nd half of url:', url.slice(32));
const size = '/resize=width:300,height:200'
// expected output: "the lazy dog."
const url300 = url.slice(0, 32) + size + url.slice(32)
console.log('url300:', url300)
// https://cdn.filestackcontent.com/2yclMtrSuiWobS11HHtw/resize=300)   
   return (
    //  <>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
    
      <table>
    <tbody>
      {/* front */}
    <tr>
        <td><img src={url300} alt='artwork'/></td>
      </tr>
      <tr>
        <td>Title: {title}</td>
      </tr>
      </tbody></table>
    
  
    
    
    
    </div>
   
   
   <div class="flip-card-back">
          <table><tbody>
          <tr>
        <td>Medium: {medium}</td>
      </tr>
      <tr>
        <td>Dimensions: {dimensions}</td>
      </tr>
      <tr>
        <td>Statement: {statement}</td>
      </tr>
      
      
      </tbody>
      </table>
      
    </div>
 
 
 
 </div>
</div>




     
    // {/* </> */}
   )
}
export default Art