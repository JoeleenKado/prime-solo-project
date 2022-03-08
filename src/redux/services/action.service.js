import {Component} from 'react'
class ActionService extends Component {  
fetchArt() {
        return {type: "FETCH_ART"}
    }
fetchUser() {
  return {type: 'FETCH_USER'}
}
     } //END ActionService
  export default new ActionService("");
  