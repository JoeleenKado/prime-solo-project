
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
import * as filestack from 'filestack-js';
// import "../App/App.css";
import dotenv from 'dotenv'
import canvas from "../../canvas.jpg";
import SubmitButton from "../../components/SubmitButton/SubmitButton.js";

// export default function ArtForm() {
function Form(props) {
// const [url] = props.store.art
  const key = process.env.REACT_APP_FILESTACK_API_KEY
  const client = filestack.init(key);
  const options = {
    onFileUploadFinished(file) {
      return new Promise((resolve, reject) => {
        // Do something async
        resolve(
          console.log('resolved', file), 
          setUrl(file.url)
        // props.dispatch({type: 'SET_ART', payload: file.url})
        );
        
        reject((reason) => console.log('Rejected:', reason))
        // Or reject the selection with reject()
      });
    }

    }
  // client.picker().open();
  //
  const [title, setTitle] = useState('')
  const [statement, setStatement] = useState('')
const [medium, setMedium] = useState('')
  const [dimensions, setDimensions] = useState('')
  const [url, setUrl] = useState('')
  //  const [url, setUrl] = useState('')

  const dispatch = useDispatch()

  const art = {
      user_id: props.store.user.id,
      title: title,
      statement: statement,
      medium: medium,
      dimensions: dimensions,
      url: url
    }

  
  async function addArt() {
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
      // setUrl('')
      setStatement('')
    // } catch(err){console.error(err)}
      
      dispatch({type: "RESET_ART"})
        
        
    
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

                <label htmlFor="image" onClick={(e) => {
                  e.preventDefault()
                  client.picker(options).open()}}>
                Image
                 {!url.length ? null : <img src={url} alt='artwork'/>}
                     {/* <input
//                   value={dimensions}
//                   onChange={(e) => setDimensions(e.target.value)}
//                   onBlur={(e) => setDimensions(e.target.value)}
// /> */}
                </label>
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
