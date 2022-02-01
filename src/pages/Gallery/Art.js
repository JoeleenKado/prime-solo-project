import React from 'react'

function Art(props) {
    const {title, statement, dimensions, medium, url} = props.art
   return (
   <table>
    <tbody>
      <tr>
        <td>Title: {title}</td>
      </tr>
      <tr>
        <td><img src={url} alt='arwork'/></td>
      </tr>
      <tr>
        <td>Statement: {statement}</td>
      </tr>
      <tr>
        <td>Dimensions: {dimensions}</td>
      </tr>
      <tr>
        <td>Medium: {medium}</td>
      </tr>
      </tbody>
      </table>
   )
}
export default Art