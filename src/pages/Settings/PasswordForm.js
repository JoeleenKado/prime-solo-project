import React, { useState } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

const PasswordForm = (props) => {
  const [username, setUsername] = useState(props.store.user.username);
  const [password, setPassword] = useState("");
  function updatePassword(event) {
    event.preventDefault();
    if (password.length) {
      props.dispatch({
        type: "UPDATE_PASSWORD",
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      props.dispatch({ type: "PASSWORD_INPUT_ERROR" });
    }
  }
  return (
    <form className="formPanel" onSubmit={updatePassword}>
      <h1>Login</h1>
      {props.store.errors.loginMessage && (
        <h3 className="alert" role="alert">
          {props.store.errors.loginMessage}
        </h3>
      )}
      <div>
        <label htmlFor="New Password">
          New Password:
          <input
            type="text"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
        </label>
      </div>
      <div>
        <input
          className="btn"
          type="submit"
          name="submit"
          value="Change Password"
        />
      </div>
    </form>
  );
}; //END PasswordForm
export default connect(mapStoreToProps)(PasswordForm);
