import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "./Forum.css";

interface IProps {
  history: any;
  // refresh: boolean;
  store: any;
}

const Forum: import("react").FunctionComponent<IProps> = ({history, store}) => {
  console.log('store', store)
  const dispatch = useDispatch();
  const { users } = store;
  const [heading, setHeading] = useState("Other Artists:");
  useEffect(() => {
    dispatch({ type: "FETCH_USERS" });
  }, []);
  return (
    <span id="friend-span">
      <h3>{heading}</h3>
      <ul>
        {!users.length ? (
          <h1>Loading Artists...</h1>
        ) : (
          users.map((user: any) => {
            const { username, id } = user;
            return (
              <li
                onClick={(e) => {
                  e.preventDefault();
                  history.push(`/gallery/${username}/${id}`);
                }}
              >
                {username}
              </li>
            );
          })
        )}
      </ul>
    </span>
  ); //END return
} //END Forum
export default (Forum);
