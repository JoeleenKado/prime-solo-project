
import React, {useState } from "react";
//import { useDispatch } from 'react-redux';
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect, useDispatch } from "react-redux";
import { PickerOverlay, PickerInline, client } from 'filestack-react';
import ReactFilestack from 'react-filestack'
import ReactDOM, { render } from 'react-dom'; 
// import Modal from '../../components/Modal/Modal'
// import App from '../../components/App/App'
// import ModalHook from './ArtDrawer/ModalHook'
//styling

// import "../App/App.css";

import canvas from "../../canvas.jpg";
import SubmitButton from "../../components/SubmitButton/SubmitButton.js";

// export default function ArtForm() {
function Form(props) {
  //
  const [title, setTitle] = useState('')
  const [statement, setStatement] = useState('')
const [medium, setMedium] = useState('')
  const [dimensions, setDimensions] = useState('')
  const [url, setUrl] = useState('')

  const dispatch = useDispatch()

  const art = {
      user_id: props.store.user.id,
      title: title,
      statement: statement,
      medium: medium,
      dimensions: dimensions,
      url: url
    }

  
  function addArt() {
    // if (art.title === "") {
    //   alert("A title is required for your Artwork.");
    // } else {
      console.log(`Sending ${art.title} to Database...`);
      //Clear message... should say Hello!
      //console.log(`Sending ${this.state.newArt} to DB.`);
dispatch({type: "ADD_ART", payload: art})
      setTitle('')
      setMedium('')
      setDimensions('')
      setUrl('')
      setStatement('')
        
        
    
    // }
  };


  // toggleModal = () => {
  //   this.setState({showModal: !this.state.showModal})
  // }
  
  
    
    //  const client = filestack.init("A2ocoVhiLQseuc8qsSbygz");
// const {showModal} = this.state

    return (
            <form name='art' 
             onSubmit={ (e) => {
               e.preventDefault()
               addArt()
            }}
            //   style={{ verticalAlign: 'middle' }}
            >
                
                  <label htmlFor="title">
                    Title
                    <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  onBlur={(e) => setTitle(e.target.value)}
/>
                </label>
              <br />
                {/* // align="center">  */}
                <label htmlFor="statement">
                  Statement
                    <input
                  value={statement}
                  onChange={(e) => setStatement(e.target.value)}
                  onBlue={(e) => setStatement(e.target.value)}
/>
                </label>
              <br />

              <label htmlFor="medium">
                Medium
                    <input
                  value={medium}
                  onChange={(e) => setMedium(e.target.value)}
                  onBlur={(e) => setMedium(e.target.value)}
/>
                </label>
              <br />

              <label htmlFor="dimensions">
                Dimensions
                    <input
                  value={dimensions}
                  onChange={(e) => setDimensions(e.target.value)}
                  onBlur={(e) => setDimensions(e.target.value)}
/>
                </label>
                <br/>
                {/* <label htmlFor="url">
                    <input
                  value={url}
                  onChange={(e) => setStatement(url)}
                  onBlur={(e) => setStatement(url)}
/>
                </label> */}

                <button>SUBMIT</button> 
                 {/* <div id='imageAPI'>Not Rendered</div>  */}
             {/* <div id="modalDiv"> */}
                {/* <button onClick={this.toggleModal}>Open API</button> */}
                {/* </div> */}
                  {/* <Modal/> */}

                {/* <SubmitButton
                  addArtProp={this.addArt}
                  elevation={20}
                
                  style={{ justifyContent: "center" }}
                 
                > */}
                  SUBMIT TO GALLERY!
                {/* </SubmitButton> */}
              
            </form>
            
      // </ThemeProvider>
    ); //END return
   //END render
} //END ArtForm
export default connect(mapStoreToProps)(Form);
