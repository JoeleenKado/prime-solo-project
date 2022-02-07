import { useState, FunctionComponent } from "react";
// import LicenseDataService from "./services/license.service";
import React from 'react'
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";
import * as filestack from 'filestack-js';

function Edit(props) {
   const { title, statement, dimensions, medium, url, id } = props.match.params;



  const key = process.env.REACT_APP_FILESTACK_API_KEY
  const client = filestack.init(key);
   console.log('props.art:', props.history.params)




   

  const options = {
  onFileUploadFinished(file) {
    return new Promise((resolve, reject) => {
      // Do something async
      resolve(
        console.log('resolved', file), 

       props.dispatch({type: 'SET_ART', payload: file.url}),
      setUrlEdit(file.url)
      );

     
      
      reject((reason) => console.log('Rejected:', reason))
      // Or reject the selection with reject()
    });
  }}

  const size = '/resize=width:300,height:200'
  const url300 = url.slice(0, 32) + size + url.slice(32)


  const [urlEdit, setUrlEdit] = useState(url300)
  const [titleEdit, setTitleEdit] = useState(title);
    const [dimensionsEdit, setDimensionsEdit] = useState(dimensions);
    const [mediumEdit, setMediumEdit] = useState(medium);
    const [statementEdit, setStatementEdit] = useState(statement);
  


  
  
  

  // const art = {
  //   title: titleEdit,
  //   statement: statementEdit,
  //   medium: mediumEdit,
  //   dimensions: dimensionsEdit,
  //   url: urlEdit,
  //   id: id
  // };

  function update (property, edit) {
    // switch (property) {
    // case 'title':
    //  console.log('property:', property)
     return props.dispatch({type: "UPDATE_ART", payload: {[property]: edit,
    id: id}})

      // case 'statement':
      // return props.dispatch({type: "UPDATE_ART", payload: {statement: statementEdit}})
      // case 'medium':
      // return props.dispatch({type: "UPDATE_ART", payload: {medium: mediumEdit}})
      // case 'dimensions':
      // return props.dispatch({type: "UPDATE_ART", payload: {dimensions: dimensionsEdit}})

      // case property === 'medium'
      // return props.dispatch({type: "UPDATE_ART", payload: {medium: mediumEdit}})

// default: return null
//      }
    }

  //   [property]
  //   LicenseDataService.edit(art)
  //   .then(() => {
  //     console.log("in submit().then()");
  //     setTypeEdit("");
  //     setNameEdit("");
  //     setEmailEdit("");
  //     return setRefresh(!refresh);
  //   });
  // }




  return (
    <>
    {JSON.stringify(props)}
    <form
      className="form"
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   submit();
      // }}
    >
      {/* <input
        type="radio"
        name="type"
        value="District"
        onChange={(e) => setTypeEdit(e.target.value)}
        onBlur={(e) => setTypeEdit(e.target.value)}
      ></input> */}
      <label htmlFor="title">Title
      <input
        // type="radio"
        // name="type"
       placeholder={title}
         value={titleEdit}

        // value={titleEdit}
         onChange={(e) => setTitleEdit(e.target.value)}
         onBlur={(e) => setTitleEdit(e.target.value)}
      ></input>
<button 
 onClick={(e) => update('title', titleEdit)}
>update Title</button>
</label>
      <label htmlFor="statement">Statement
      
       <input
        // type="radio"
        // name="type"
        value={statementEdit}
        onChange={(e) => setStatementEdit(e.target.value)}
        onBlur={(e) => setStatementEdit(e.target.value)}
      ></input> 
      <button onClick={(e) => update('statement', statementEdit)}>update</button> 

      </label>
      <br />
      <br />
      <label htmlFor="medium">
        Medium
        {/* {typeEdit === "" ? type : typeEdit} Name */}
        {/* <input
        //   placeholder={medium}
          onChange={(e) => setMediumEdit(e.target.value)}
          onBlur={(e) => setMediumEdit(e.target.value)}

          value={mediumEdit}
        /> */}
        {/* <button onClick={(e) => update('medium', mediumEdit)}>update</button> */}

      </label>
      <label htmlFor="dimensions">
{/* Dimensions        <input
        //   placeholder={email}
          onChange={(e) => setDimensionsEdit(e.target.value)}
          onBlur={(e) => setDimensionsEdit(e.target.value)}
          value={dimensionsEdit}

          // placeholder={dimensions}
        /> */}
        {/* <button onClick={(e) => update('dimensions', dimensionsEdit)}>update</button> */}

      </label>
      <br />

      {/* <label htmlFor="image">
        url
       {/* <input
        placeholder={url300}
          // onChange={(e) => setUrlEdit(e.target.value)}
          // onBlur={(e) => setUrlEdit(e.target.value)}
value={urlEdit}
          // placeholder={url}
        /> */}
      {/* </label> */} 

      <button 
onClick={(e) => {
                  e.preventDefault()
                  client.picker(options).open()}}>
                    UPLOAD IMAGE
                  </button>
{/* {!urlEdit.length ? null : ( */}
{/* <img src={urlEdit} alt='artwork'/> */}
      {/* <button onClick={(e) => { */}
        {/* // update('url', urlEdit) */}
    {/* // }} */}
    {/* // >update</button> */}
    
      <img src={decodeURIComponent(props.match.params.url)}/>  

      {console.log('dfd', decodeURI(props.match.params.url))}
      
      
      {/* <button onClick={(e) => props.dispatch({type: 'DELETE_ART', payload: id})}>DELETE</button> */}
      <br />
    </form>
    </>
  ); //END return ()
}; //END Edit
export default connect(mapStoreToProps)(Edit);

