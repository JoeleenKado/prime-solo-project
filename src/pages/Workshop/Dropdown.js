import React from 'react'

const Dropdown = ({ frames }) => {
    return (
      <>
        {frames.map((frame) => {
            const {name, url} = frame
                 return (
            <>
                <option key={name} value={name}>
                  {name}
                </option>
            </>
          ); 
        })}
      </>
    );
  }; //END Dropdown
  export default Dropdown;
  