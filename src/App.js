import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import  Checkbox from "@material-ui/core/Checkbox";
import { FormControlLabel, TextField } from "@material-ui/core";
import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";
import '@fontsource/roboto';
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from '@material-ui/icons/Delete';
import { Typography, Container, Paper, Grid } from "@material-ui/core";

const useStyles= makeStyles({
  root:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius:15,
    height: 48,
    marginBottom: 15,
    color:'white',
    padding:'5px 30px'
  }
})

const theme= createMuiTheme({
  typography:{
    h2:{
      fontSize: 36,
    }
  },
  palette:{
    primary:{
      main:green[400],
    },
    secondary:{
      main: orange[400],
    }
  }
})

function ButtonStyled (){
  const classes = useStyles();
  return <Button className={classes.root}>Styled Button</Button>
}

function CheckboxExample (){
  const [checked, setChecked]=React.useState(true)
  return (
    <FormControlLabel
    control={<Checkbox
    checked={checked}
    inputProps={{'aria-label': 'secondary checkbox'}}
    onChange={(e)=> setChecked(e.target.checked)}
    />}
    label="Testing checkbox"
    />
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="xs">
    <div className="App">
      <header className="App-header">
      <Typography variant="h2">Welcome MUI Tutorial</Typography>
      <Typography variant="subtitle1" component="div">Learn MUI</Typography>
      <Grid>
        <Paper style={{height:75, width:50,}}/>
      </Grid>
      <ButtonStyled/>
      <TextField
        variant= "filled"
        color="secondary"
        type="email"
        placeholder="test@sawan"
        label="Put email"
      />
      <CheckboxExample/>
      <ButtonGroup>
        <Button
          onClick={() => alert("saved")}
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
        
        >
          Save
        </Button>
        <Button
          onClick={() => alert("deleted")}
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<DeleteIcon />}
          
        >
          Delete
        </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    </Container>
    </ThemeProvider>
  );
}

export default App;
