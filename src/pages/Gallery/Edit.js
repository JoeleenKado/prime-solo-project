import { useState, FunctionComponent } from "react";
// import LicenseDataService from "./services/license.service";
import React from 'react'
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect } from "react-redux";

function Edit(props) {
    


  const { title, statement, dimensions, medium, url, id } = props.art;

  const [titleEdit, setTitleEdit] = useState(title);
  const [dimensionsEdit, setDimensionsEdit] = useState(dimensions);
  const [mediumEdit, setMediumEdit] = useState(medium);
  const [statementEdit, setStatementEdit] = useState(statement);
  const [urlEdit, setUrlEdit] = useState(url)

  const art = {
    title: titleEdit,
    statement: statementEdit,
    medium: mediumEdit,
    dimensions: dimensionsEdit,
    url: urlEdit,
    id: id
  };

  function update(property, edit) {
    // switch
    // case property === 'title'
    console.log('property:', property)
     return props.dispatch({type: "UPDATE_ART", payload: {[property]: edit,
    id: id}})

    //   case poperty === 'statement'
    //   return props.dispatch({type: "UPDATE_ART", payload: {statement: statementEdit}})
    //   case property === 'medium'
    //   return props.dispatch({type: "UPDATE_ART", payload: {medium: mediumEdit}})
    //   case property === 'dimensions'
    //   return props.dispatch({type: "UPDATE_ART", payload: {dimensions: dimensionsEdit}})

    //   case property === 'medium'
    //   return props.dispatch({type: "UPDATE_ART", payload: {medium: mediumEdit}})




    // [property]
    // LicenseDataService.edit(art)
    // .then(() => {
      // console.log("in submit().then()");
    //   setTypeEdit("");
    //   setNameEdit("");
    //   setEmailEdit("");
    //   return setRefresh(!refresh);
    // });
  }




  return (
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
<button onClick={(e) => update('title', titleEdit)}>update</button>
</label>
      <label htmlFor="statement">Statement
      
      <input
        // type="radio"
        name="type"
        value={statementEdit}
        onChange={(e) => setStatementEdit(e.target.value)}
        onBlur={(e) => setStatementEdit(e.target.value)}
      ></input>
      </label>
      <br />
      <br />
      <label htmlFor="medium">
        Medium
        {/* {typeEdit === "" ? type : typeEdit} Name */}
        <input
        //   placeholder={medium}
          onChange={(e) => setMediumEdit(e.target.value)}
          onBlur={(e) => setMediumEdit(e.target.value)}

          value={mediumEdit}
        />
      </label>
      <label htmlFor="dimensions">
Dimensions        <input
        //   placeholder={email}
          onChange={(e) => setDimensionsEdit(e.target.value)}
          onBlur={(e) => setDimensionsEdit(e.target.value)}

          placeholder={dimensions}
        />
      </label>
      <br />

      <label htmlFor="image">
        image
       <input
        //   placeholder={email}
          onChange={(e) => setDimensionsEdit(e.target.value)}
          onBlur={(e) => setDimensionsEdit(e.target.value)}

          placeholder={dimensions}
        />
      </label>
      <button>UPDATE</button>
      <br />
    </form>
  ); //END return ()
}; //END Edit
export default connect(mapStoreToProps)(Edit);

