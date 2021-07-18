// what I want this hook to do: Pass in the state showmodal as a prop

// So this must be essentially a piece of state that floats above everyhthing else as a ghost parent. 


//import React from 'react'
import {Link} from 'react-router-dom'
import { useState, useEffect } from "react";

// const Pet = ({ name, animal, breed }) => {
//     return React.createElement("div", {}, [
//       React.createElement("h2", {}, name),
//       React.createElement("h3", {}, animal),
//       React.createElement("h3", {}, breed),
//     ]);
//   };
 
  const ModalHook = ({modalStateProp}) => {
    const [modalState, setModalState] = useState([]);

    useEffect(() => {
       setModalState({modalStateProp})
    }, [])

      return [modalState]
  }

  export default ModalHook