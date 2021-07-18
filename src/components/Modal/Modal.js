import React, {useEffect, useRef} from "react";
import { PickerOverlay } from 'filestack-react';
import ModalHook from '../ArtDrawer/ModalHook'
import createPortal from 'react-dom'
const filestackApiKey = process.env.REACT_APP_FILESTACK_API_KEY


export default function Modal({children}) {
  const elRef = useRef(null)
  if (!elRef.current) {
      elRef.current = document.createElement('div')
  }
    return (<>
    <div>Hello Modal</div>
<button>close API</button>


{/* we have no state over here so we cannot do the togglemodal function . We do have the value of statemhowever which has been
passed in witht he modalState Prop We must put this value in a box. the only thing that is actually being passed over 
is the value 'false' what can we do with false. so we would need to change the value to true and then send that true
back to the class component. we would have no way of putting that true into state */}


{/* <ModalHook modalStateProp={modalStateProp}/> */}

    {/* <PickerOverlay apikey={filestackApiKey}
                    buttonText="Upload Image"
                    className="btn"
                    // options={basicOptions}
                    onSuccess={(event) => this.onSuccess(event, 'image_path')}
                    // onError={this.onError}
                    />; */}
                    
                                      </>
    )//END return

    
  
}//END modal