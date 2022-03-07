import { useState } from "react";
import React from 'react'
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import * as filestack from 'filestack-js';
import './Edit.css';
function Edit(props) {
  const {art} = props.store
   const { title, statement, size, medium, url, id } = props.match.params;
 const decodedUrl = decodeURIComponent(url)
console.log('Our url has been decoded:', decodedUrl)
console.log('size:', size)
  const key = process.env.REACT_APP_FILESTACK_API_KEY
  const client = filestack.init(key);
   const resize = '/resize=width:300,height:200'
   let url300
  const options = {
  onFileUploadFinished(file) {
    return new Promise((resolve, reject) => {
      resolve(
        console.log('resolved', file), 
          url300 = file.url.slice(0, 32) + resize + file.url.slice(32),

      setUrlEdit(url300)
      );
      reject((reason) => console.log('Rejected:', reason))
      // Or reject the selection with reject()
    });
  }}

  const [urlEdit, setUrlEdit] = useState(decodedUrl)
  const [titleEdit, setTitleEdit] = useState(title);
    const [sizeEdit, setSizeEdit] = useState(size);
    const [mediumEdit, setMediumEdit] = useState(medium);
    const [statementEdit, setStatementEdit] = useState(statement);
  
  function update (property, edit) {
     props.dispatch({type: "UPDATE_ART", payload: {[property]: edit,
    id: id}
  })
    }
  return (
    <>
    {/* {JSON.stringify(props)} */}
    <form
      id="edit-form"    
    > 
      {/* <label className='sr-only' htmlFor="title">Title */}
      <input htmlFor='Title Edit'      
       placeholder={title}
         value={titleEdit}
         onChange={(e) => setTitleEdit(e.target.value)}
         onBlur={(e) => setTitleEdit(e.target.value)}
      ></input>
<button 
 onClick={(e) => update('title', titleEdit)}
>UPDATE TITLE</button>
<br/>
<input htmlFor='Medium'
          placeholder={mediumEdit}
          value={mediumEdit}
          onChange={(e) => setMediumEdit(e.target.value)}
          onBlur={(e) => setMediumEdit(e.target.value)}
          value={mediumEdit}
        /> 
        <button onClick={(e) => {
          e.preventDefault()
          update('medium', mediumEdit)
          }}>
            UPDATE MEDIUM
            </button>
      <br/>      
      <input htmlFor='Size'
          onChange={(e) => setSizeEdit(e.target.value)}
          onBlur={(e) => setSizeEdit(e.target.value)}
          value={sizeEdit}
          placeholder={sizeEdit}
        /> 
         <button onClick={(e) => update('size', sizeEdit)}>UPDATE SIZE</button> 
      <br />
       <textarea id='edit-statement' 
       htmlFor='Statement Edit'
       rows='5'
       maxLength='300'
        placeholder={statementEdit}
        value={statementEdit}
        onChange={(e) => {
          setStatementEdit(e.target.value)
          console.log('statement has changed:', statementEdit)
        }}
        onBlur={(e) => setStatementEdit(e.target.value)}
      /> 
      <br/>
      <button id='update-statement-btn' onClick={(e) => update('statement', statementEdit)}>UPDATE STATEMENT</button> 
      <br />
        <button htmlFor='Upload Image'
onClick={(e) => {
                  e.preventDefault()
                  client.picker(options).open()}}>
                    UPLOAD IMAGE
                  </button>
        <img src={urlEdit}/>
       <button htmlFor='Update Image' onClick={(e) => {
         e.preventDefault()
        update('url', urlEdit)} }
     >UPDATE IMAGE</button>      
      <br />
      <button id='delete-btn' onClick={(e) =>{
        e.preventDefault()
        props.dispatch({type: 'DELETE_ART', payload: id})
      props.history.push('/gallery')
      }}>
          DELETE ARTWORK
          </button>
    </form>
    </>
  ); //END return ()
}; //END Edit
export default connect(mapStoreToProps)(Edit);
