import React, {Component} from 'react'
//import { useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
//styling
import {AppBar, Button, Toolbar, Grid, Badge, CardMedia, IconButton, makeStyles, Paper, InputBase, TextField, Card, withStyles} from '@material-ui/core'
import '../App/App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import CssBaseline from '@material-ui/core/CssBaseline';
import purple from '@material-ui/core/colors/purple';
import canvas from '../../canvas.jpg'
// const useStyles = makeStyles(theme =>({
//     root: {
//         '& .MuiFormControl-root': {
//             width: '80%',
//             margin: theme.spacing(1)
//         }
//     }
// }))

// const initialFValues = {
//     title: '',
//     medium: '',
//     dimension: '',
//     url: '',
//     statement: ''
// }

const styles = {
    inputs: {
        width: '',
        paddingTop: '0px',
        // marginTop: '20px',
        verticalAlign: 'middle',
        // height: '100%'

    },
    paper: 
        { backgroundColor: "purple",
        width: '35vw',
        height: '40vw',
        margin: 'auto',
        textAlign: 'center',
        

      },
      centerText : {
        textAlign : 'center'
      }, alignAndJustify: {
        width: 500,
        height: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
        margin: 'auto'
      },
      thumbnail: "require('../../src/canvas.jpg')",
      media : {
        height: '0'
      }
}

const theme = createMuiTheme({
    shape: {
        borderRadius: '40px'
      },
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: purple[500],
          },
          background: {
              default : '#42f59b'
          }
          ,
      
    },
  });

// export default function ArtForm() {
    class ArtForm extends Component {

        // handleChange = (event) => {
        //     // this.setState({
        //     //     feeling: event.target.value
        //     // }) 
        //     console.log('input change')
        // }

        state = {
            newArt: {
              user_id: '',
              title: '',
              medium: '',
              dimension: '',
              url: '',
              statement: ''
            },
        }

        handleInputChange = (event, inputProperty) => {
console.log('Handling input-change...');
console.log('Setting state...');

//console.log('Handling input change. this.state.newArt.user_id', this.state.newArt.user_id);
            this.setState({
              newArt : {
                ...this.state.newArt,
                [inputProperty]: event.target.value,
                user_id: this.props.store.user.id
              }
            }, function () {
                console.log('state has been set:', this.state);
            })
          }

          addArt = () => {
            if(this.state.newArt.title === '') {
                alert('A title is required for your Artwork.')
            } else {
            
                console.log(`Sending ${this.state.newArt.title} to Database...`);
            //Clear message... should say Hello!
            //console.log(`Sending ${this.state.newArt} to DB.`);

                 this.props.dispatch({ type: 'ADD_ART', payload: this.state.newArt })
            }
            // this.setState({
            
            //    newArt: {title: '',
            //     medium: '',
            //     dimension: '',
            //     url: '',
            //     statement: ''}
            // }
            // )
          }


            render() {

    // const [values, setValues] = useState(initialFValues);
    // const classes = useStyles();
    // const dispatch = useDispatch();



    // const handleInputChange= e=> {
    //     const {name, value} = e.target
    //     setValues({
    //         ...values,
    //         [name]: value
    //     })
    // }

    // const addArt= ()=> {
    //     console.log('adding art');
        
    //     }
    
    //   <form  className={classes.root}> 


    const { classes } = this.props;
    return(

        <ThemeProvider theme={theme}>
<CssBaseline />
           <Grid container
           className={classes.paper}
           //alignItems="center"
        spacing={2}
        direction="column">
        {/* // justify="center"
//   style={{ minHeight: '100vh', maxWidth: '100%', verticalAlign: 'middle'
// }}> */}
                              
                              
                              <Card 
                              elevation={10}
                              className={classes.paper} 
                              // backgroundImage={canvas}
                              
                            //   style={{  maxWidth: '100%', verticalAlign: 'middle'
                            // }}
                            //   variant="outlined"
                            //square
                            > 


{/* <CardMedia  className={classes.marginAuto, classes.media} style={{width: '130px', height: '130px'}}/> */}


                              <form
                            //   style={{ verticalAlign: 'middle' }}
                            >

                               {/* <Grid item 
                                align="center"
                            //    style={{  maxWidth: '100%', verticalAlign: 'middle', paddingTop: '10px'
                            // }}
                            //    className={classes.inputs}

                            //    justify="center"
                               
                               > */}

               {/* <Card> */}

               <Grid item xs={12.0} sm={12}>
              {/* //  align="center"> */}
                   <TextField
                   variant="outlined"
                   label="Title"
                   name="title"
                  className={classes.inputs}
                  
                   value={this.state.newArt.title}
                    onChange ={ (event) => this.handleInputChange( event, 'title' ) } 
                   />
                 </Grid> 
<br/>
                <Grid item xs={12.0} sm={12}>
                {/* // align="center">  */}
                   <TextField
                   variant="outlined"
                   label="Medium"
                   name="medium"
                   className={classes.inputs}


                   value={this.state.newArt.medium}
                onChange ={ (event) => this.handleInputChange( event, 'medium' ) } 
                   />
                 </Grid>
                 <br/> 

                 <Grid item xs={12.0} sm={12}> 
                   <TextField
                   variant="outlined"
                   label="Dimensions"
                   name="dimension"
                   className={classes.inputs}


                   value={this.state.newArt.dimension}
                onChange ={ (event) => this.handleInputChange( event, 'dimension' ) } 

                   />

                 </Grid>  
                 <br/> 

                 <Grid item xs={12.0} sm={12}> 
                    <TextField
                   variant="outlined"
                   label="URL"
                   name="url"
                   className={classes.inputs}
                   value={this.state.newArt.url}
                onChange ={ (event) => this.handleInputChange( event, 'url' ) } 

                   />

                 </Grid> 
                 <br/> 

                 <Grid item xs={12.0} sm={12}> 
                    <TextField
                   variant="outlined"
                   label="Statement"
                   name="statement"
                   className={classes.inputs}
                  //  style={{width: '130px', height: '130px', marginBottom: '50px'}}
                   value={this.state.newArt.statement}
                onChange ={ (event) => this.handleInputChange( event, 'statement' ) } 

                

                   />




                 </Grid> 

                 <br/> 


                 <Grid item xs={12.0} sm={12}> 


                 <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          // multiline
          multiLine={true}
  rows={2}
          rowsMax={4}
          value={'statementtwo'}
          onChange={this.handleInputChange}
        />
                 

                 {/* <button onClick={() => dispatch({type: 'ADD_ART'})}>ADD ART</button>  */}
                 </Grid> 

                 <br/> 

               </form>
               {/* </Card> */}
               {/* </Grid> */}
               </Card>
               
           </Grid>
           <br/>
           <Button elevation={10}
          //  Box display="flex" flexDirection="column"
          //  textAlign='center'
          //  display='flex'
          //  justifyContent='center'
          //  justify="center"
           onClick={this.addArt}
                //  variant="raised"
                //  color="purple"
                 className={classes.alignAndJustify}
                 >Click Me!</Button>
           </ThemeProvider>

    )//END return
}//END render
}//END ArtForm
export default connect(mapStoreToProps)(withStyles(styles)(ArtForm));