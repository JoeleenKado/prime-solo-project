import React, { useState } from "react";
 import { useDispatch} from "react-redux";
import * as filestack from "filestack-js";
import "./Edit.css";
interface IProps {
  history: any;
  store: any;
  match: any;
}
const Edit: import("react").FunctionComponent<IProps> = ({history, store, match}) => {
  const dispatch = useDispatch();
  // console.log('in edit:', props)
  const { art } = store;
  const { title, statement, size, medium, url, id } = match.params;
  const decodedUrl = decodeURIComponent(url);
  console.log("Our url has been decoded:", decodedUrl);
  console.log("size:", size);
  const key = process.env.REACT_APP_FILESTACK_API_KEY;
  const client = filestack.init(key!);
  const resize = "/resize=width:300,height:200";
  let url300: string;
  const options = {
    onFileUploadFinished(file: any) {
      return new Promise((resolve, reject) => {
        url300 = file.url.slice(0, 32) + resize + file.url.slice(32);
        resolve(       
          setUrlEdit(url300)
        );
        reject((reason: any) => console.log("Rejected:", reason));
      });
    },
  };
  const [urlEdit, setUrlEdit] = useState(decodedUrl);
  const [titleEdit, setTitleEdit] = useState(title);
  const [sizeEdit, setSizeEdit] = useState(size);
  const [mediumEdit, setMediumEdit] = useState(medium);
  const [statementEdit, setStatementEdit] = useState(statement);
  function update(property: any, edit: any) {
    dispatch({
      type: "UPDATE_ART",
      payload: { [property]: edit, id: id },
    });
  }
  return (
    <>
      <form id="edit-form">
        <input
          htmlFor="Title Edit"
          placeholder={title}
          value={titleEdit}
          onChange={(e) => setTitleEdit(e.target.value)}
          onBlur={(e) => setTitleEdit(e.target.value)}
        ></input>
        <button onClick={(e) => update("title", titleEdit)}>
          UPDATE TITLE
        </button>
        <br />
        <input
          htmlFor="Medium"
          placeholder={mediumEdit}
          value={mediumEdit}
          onChange={(e) => setMediumEdit(e.target.value)}
          onBlur={(e) => setMediumEdit(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            update("medium", mediumEdit);
          }}
        >
          UPDATE MEDIUM
        </button>
        <br />
        <input
          htmlFor="Size"
          onChange={(e) => setSizeEdit(e.target.value)}
          onBlur={(e) => setSizeEdit(e.target.value)}
          value={sizeEdit}
          placeholder={sizeEdit}
        />
        <button onClick={(e) => update("size", sizeEdit)}>UPDATE SIZE</button>
        <br />
        <textarea
          id="edit-statement"
          htmlFor="Statement Edit"
          rows={5}
          maxLength={300}
          placeholder={statementEdit}
          value={statementEdit}
          onChange={(e) => {
            setStatementEdit(e.target.value);
            console.log("statement has changed:", statementEdit);
          }}
          onBlur={(e) => setStatementEdit(e.target.value)}
        />
        <br />
        <button
          id="update-statement-btn"
          onClick={(e) => update("statement", statementEdit)}
        >
          UPDATE STATEMENT
        </button>
        <br />
        <button
          htmlFor="Upload Image"
          onClick={(e) => {
            e.preventDefault();
            client.picker(options).open();
          }}
        >
          UPLOAD IMAGE
        </button>
        <img src={urlEdit} />
        <button
          htmlFor="Update Image"
          onClick={(e) => {
            e.preventDefault();
            update("url", urlEdit);
          }}
        >
          UPDATE IMAGE
        </button>
        <br />
        <button
          id="delete-btn"
          onClick={(e) => {
            e.preventDefault();
            dispatch({ type: "DELETE_ART", payload: id });
            history.push("/gallery");
          }}
        >
          DELETE ARTWORK
        </button>
      </form>
    </>
  ); //END return ()
} //END Edit
export default (Edit);
