import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import API from '../../Utils/API';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3, 0, 8),
  },
  margin: {
    height: theme.spacing(3),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';


const IOSSlider = withStyles({
  root: {
    color: '#3880ff',
    height: 2,
    padding: '15px 0',
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    '&:focus, &:hover, &$active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 12px)',
    top: -22,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);

function UpdateProfile() {
  const classes = useStyles();
  
  function nameInput(event) {
    const name = event.target.value;
    //setClient(name);
    return name
  }  
  function heightInput(event) {
    const height = event.target.value;
    //setClient(height);
    return height
  }  
  function weightInput(event) {
    const weight = event.target.value;
    //setClient(weight);
    return weight
  }  
  function bodyfatInput(event) {
    const bodyfat = event.target.value;
   // setClient(bodyFat);
   return bodyfat
  }  
  function ageInput(event) {
    const age = event.target.value;
    //setClient(age);
    return age
  }  
  function updateClient(name, height, weight, bodyfat, age) {
    API.updateClient({
      name: name,
      height: height,
      weight: weight,
      bodyfat: bodyfat,
      age: age
    }).then("/dashboard")
    }
  
    return (
      <Container component="main" maxWidth="xs" className={classes.content}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <EmojiPeopleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Update Client Profile
          </Typography>
          <form onSubmit={updateClient} className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={nameInput}
            />
            <div className={classes.root}>
                <Typography gutterBottom>Height in Inches</Typography>
                <div className={classes.margin} />
                <IOSSlider aria-label="ios slider" defaultValue={0} valueLabelDisplay="on"
                min={0}
                step={1}
                max={100}
                onChange={heightInput} />
                <div className={classes.margin} />
                <Typography gutterBottom>Weight in Pounds</Typography>
                <div className={classes.margin} />
                <IOSSlider aria-label="ios slider" defaultValue={0} valueLabelDisplay="on"
                min={0}
                step={1}
                max={300}
                onChange={weightInput} />
                <div className={classes.margin} />
                <Typography gutterBottom>BodyFat %</Typography>
                <div className={classes.margin} />
                <IOSSlider aria-label="ios slider" defaultValue={0} valueLabelDisplay="on" 
                min={0}
                step={.5}
                max={50} 
                onChange={bodyfatInput} />
                <div className={classes.margin} />
                <Typography gutterBottom>Age</Typography>
                <div className={classes.margin} />
                <IOSSlider aria-label="ios slider" defaultValue={0} valueLabelDisplay="on" 
                min={0}
                step={1}
                max={100} 
                onChange={ageInput} />
            </div>         
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              href="/clientCard"
            >
              Save Client
            </Button>
          </form>
        </div>
      </Container>
    );
  }
  export default UpdateProfile;