import React from 'react'
const Dropdown = ({ workshop }) => {
    return (
      <>
        {workshop.map((frame) => {
        //   console.log("licenseObject:", licenseObject);
        //   const { license, name } = licenseObject;
          return (
            <>
              {/* {name === licenseName ? null : ( */}
                <option key={frame} value={frame}>
                  {frame}
                </option>
              {/* )} */}
            </>
          ); //END return ()
        })}
      </>
    ); //END return ()
  }; //END Dropdown
  export default Dropdown;
  