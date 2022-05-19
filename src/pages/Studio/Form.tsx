import React, { useState } from "react";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { connect, useDispatch } from "react-redux";
import * as filestack from "filestack-js";
import "./Studio.css";

interface IProps {
  props: any;
}
const Form: import('react').FunctionComponent<IProps> = (props: any) => {
  const key = process.env.REACT_APP_FILESTACK_API_KEY;
  const client = filestack.init(key);
  const [title, setTitle] = useState("");
  const [statement, setStatement] = useState("");
  const [medium, setMedium] = useState("");
  const [size, setSize] = useState("");
  const [url, setUrl] = useState("");
  const resize = "/resize=width:300,height:200";
  let url300;
  const options = {
    onFileUploadFinished(file) {
      return new Promise((resolve, reject) => {
        url300 = file.url.slice(0, 32) + resize + file.url.slice(32)     
        resolve(
          setUrl(url300)
        );
        reject((reason) => console.log("Rejected:", reason));
      });
    },
  };
  const dispatch = useDispatch();
  const art = {
    user_id: props.store.user.id,
    title: title,
    statement: statement,
    medium: medium,
    size: size,
    url: url,
    like: 0,
  };
  async function addArt() {
    console.log(`Sending ${art.title} to Database...`);
    dispatch({ type: "ADD_ART", payload: art });
    setTitle("");
    setMedium("");
    setSize("");
    setStatement("");
    setUrl("");
  }
  const falseButtonStyle = (label) => {
    if (!label.length) {
      return { backgroundColor: "yellow" };
    } else {
      return { backgroundColor: "green" };
    }
  };
  return (
    <span id="publish-span">
      <h3>Publish an Artwork</h3>
      <form
        id="art-form"
        name="art"
        onSubmit={(e) => {
          e.preventDefault();
          addArt();
        }}
      >
        <button className="false-button" style={falseButtonStyle(title)}>
          Title
        </button>
        <input
          id="title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={(e) => setTitle(e.target.value)}
        />
        <br/>
        <button style={falseButtonStyle(medium)} className="false-button">
          Medium
        </button>
        <input
          value={medium}
          onChange={(e) => setMedium(e.target.value)}
          onBlur={(e) => setMedium(e.target.value)}
        />
        <br />
        <button style={falseButtonStyle(size)} className="false-button">
          Size
        </button>
        <input
          value={size}
          onChange={(e) => setSize(e.target.value)}
          onBlur={(e) => setSize(e.target.value)}
        />
        <br />
        <textarea
          className="statement"
          rows={4}
          maxLength={300}
          value={statement}
          onChange={(e) => setStatement(e.target.value)}
          onBlur={(e) => setStatement(e.target.value)}
        />
        <br />
        <button
          style={falseButtonStyle(statement)}
          className="false-button"
          id="statement-button"
        >
          Statement
        </button>
        <br />
        <button
          style={falseButtonStyle(url)}
          id="upload-img-btn"
          onClick={(e) => {
            e.preventDefault();
            client.picker(options).open();
          }}
        >
          UPLOAD IMAGE
        </button>
        <br />
        {!url.length ? null : (
          <>
            <img src={url} alt="artwork" />
            <br />
          </>
        )}
        {!url.length ? null : <button id="submit-art-button">SUBMIT</button>}
      </form>
    </span>
  ); //END return
} //END ArtForm
export default connect(mapStoreToProps)(Form);
