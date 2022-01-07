import React from 'react'

function History(props) {
    const {title, statement, dimensions, medium} = props
   return (
   <table>
    <tbody>
      <tr>
        <td>Title: {title}</td>
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
export default History