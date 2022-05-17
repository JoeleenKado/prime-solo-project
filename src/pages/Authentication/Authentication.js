// import { PinDropSharp } from "@material-ui/icons"
import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";


const Authentication = (props) => {
const [tryCode, setTryCode] = useState('')
// const {code} = props.store.code
const {username} = props.match.params.user

useEffect(() => {
    console.log('fetching code for ', username)
props.dispatch({type: 'FETCH_CODE', payload: username})
}, [])

function compareCodes() {
    // if (tryCode === code) {
    //     props.dispactch({type: 'LOGIN'})
    // }
}

console.log('dfdfdf', props.match.params.user)
return (
    <>
    {JSON.stringify(props)}
    {/* console.log('') */}
    {/* {!props.store.code.length ? <h2>LOADING...</h2> : */}


    <form htmlFor='code'
    onSubmit={
        compareCodes()
       
        
        }>
        {/* <label htmlFor='code'> */}
            
            <input
            //  value={code}
            onChange={(e) => setTryCode(e.target.value)}
            ></input>
            <button></button>
            {/* </label> */}
    </form>
    {/* } */}
    </>
)
}

export default connect(mapStoreToProps)(Authentication);