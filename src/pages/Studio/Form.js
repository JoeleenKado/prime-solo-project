
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
// import SubmitButton from "../../components/SubmitButton/SubmitButton.js";
import './Studio.css'
// export default function ArtForm() {
function Form(props) {
// const [url] = props.store.art
  const key = process.env.REACT_APP_FILESTACK_API_KEY
  const client = filestack.init(key);
  // let url
  const [title, setTitle] = useState('')
    const [statement, setStatement] = useState('')
  const [medium, setMedium] = useState('')
    const [size, setSize] = useState('')
    const [url, setUrl] = useState('')
    const resize = '/resize=width:300,height:200'
let url300
  const options = {
    onFileUploadFinished(file) {
      return new Promise((resolve, reject) => {
        // Do something async
        resolve(
          console.log('resolved', file), 
          url300 = file.url.slice(0, 32) + resize + file.url.slice(32),
console.log('url300:', url300),
          
          setUrl(url300)
        // props.dispatch({type: 'SET_ART', payload: file.url})
        );
        
        reject((reason) => console.log('Rejected:', reason))
        // Or reject the selection with reject()
      });
    }

    }

  const dispatch = useDispatch()

  const art = {
      user_id: props.store.user.id,
      title: title,
      statement: statement,
      medium: medium,
      size: size,
      url: url,
      like: 0,
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
      setSize('')
      // setUrl('')
      setStatement('')
      setUrl('')
    // } catch(err){console.error(err)}
      
      // dispatch({type: "RESET_ART"})
        
        
    
    // }
  };


  const falseButtonStyle = (label) => {
if (!label.length) {return {backgroundColor: 'yellow'
}}else{ return {backgroundColor : 'green'}}
  }

    return (
      
      // <div className="container">
      <span id='publish-span'>
        {/* <center> */}
        <h3>Publish an Artwork</h3>
            <form id='art-form' name='art' 
            // classname='contained-form'
            // className='item-a'
             onSubmit={ (e) => {
               e.preventDefault()
               addArt()
            }}
            //   style={{ verticalAlign: 'middle' }}
            >
              
                    {/* <br/> */}
                  {/* <label htmlFor="title"> */}
                    <button className="false-button"
                    style={falseButtonStyle(title)}
                    
                    >Title</button>
                    <input id='title-input'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  onBlur={(e) => setTitle(e.target.value)}
/>
{/* Title */}

                {/* </label> */}
              {/* <br /> */}
                {/* // align="center">  */}
                {/* <label htmlFor="statement"> */}
                  
                {/* </label> */}
              <br />

              {/* <label htmlFor="medium"> */}
              <button 
              style={falseButtonStyle(medium)}
              className="false-button">Medium</button>
                    <input
                  value={medium}
                  onChange={(e) => setMedium(e.target.value)}
                  onBlur={(e) => setMedium(e.target.value)}
/>
{/* Medium */}

                {/* </label> */}

              <br />

              {/* <label htmlFor="size"> */}
                <button 
              style={falseButtonStyle(size)}
              className="false-button">Size</button>
                    <input
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  onBlur={(e) => setSize(e.target.value)}
/>
{/* Size */}

                {/* </label> */}
                <br/>

                    <textarea className='statement'
                    rows='4'
                    // cols='25'
                    maxLength='300'
                  value={statement}
                  onChange={(e) => setStatement(e.target.value)}
                  onBlue={(e) => setStatement(e.target.value)}
/>
<br/>
<button 
              style={falseButtonStyle(statement)}

className='false-button' id='statement-button'>Statement</button>

{/* Statement */}
<br/>
                <button 
                style={falseButtonStyle(url)}
                id='upload-img-btn' onClick={(e) => {
                  e.preventDefault()
                  client.picker(options).open()}}>
                    UPLOAD IMAGE
                    </button> 
                {/* <label htmlFor="image">  */}
                

                
                    <br/>
                 {!url.length ? null :( <>
                                 {/* <center> */}

                 <img src={url} alt='artwork'/>
                 <br/>
</>
)
                  } 
                    
                {/* </label> */}
                {!url.length ? null :
                <button id='submit-art-button'>SUBMIT</button> 
                }
                {/* </SubmitButton> */}
              
            </form>
            {/* </center> */}
            </span>
            // </div>
            // </div>
    ); //END return
   //END render
} //END ArtForm
export default connect(mapStoreToProps)(Form);
