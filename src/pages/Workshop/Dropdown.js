import React from 'react'

const Dropdown = ({ frames }) => {
    return (
      <>
        {frames.map((frame) => {
            const {name, url} = frame
        //   console.log("licenseObject:", licenseObject);
        //   const { license, name } = licenseObject;
          return (
            <>
              {/* {name === licenseName ? null : ( */}
                <option key={name} value={name}>
                  {name}
                </option>
              {/* )} */}
            </>
          ); //END return ()
        })}
      </>
    ); //END return ()
  }; //END Dropdown
  export default Dropdown;
  