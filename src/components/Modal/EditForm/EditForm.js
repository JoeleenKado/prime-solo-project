import React from 'react'
import mapStoreToProps from "../../../redux/mapStoreToProps";


class EditForm extends React.Component {
    componentDidMount() {
        this.props.dispatch({ type: "FETCH_ART" });
      }

state = {
    open: false
}

openModal = () => {
   
    this.setState({
        open: true,
    }); // end setState
  } //END openModal

  // handles the pop-up modal
  hideModal = () => {
    this.setState({ 
      open: false 
    }); // end setState
  }//END hideModal



}//END EditForm

export default connect(mapStoreToProps)(
    withStyles(styles)(withRouter(ArtCard))
    );
