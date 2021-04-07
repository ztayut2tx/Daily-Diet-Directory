import React, { useState, useEffect } from 'react';
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import API from '../../Utils/API';
import Food from '../../food.js';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(2),
      padding: theme.spacing(1),
      width: theme.spacing('auto'),
      height: theme.spacing('auto'),
    },
    justifyContent: "center",
    padding: theme.spacing(3, 0, 8),
  },
  content: {
    margin: "5%",
  },
  center: {
    justifyContent: "center"
  },
  width: {
    width: "100%"
  },
  title: {
    textAlign: 'center',
    fontSize: '25px'
  },
  heading: {
    textAlign: 'left',
    fontSize: '20px'
  },
  form: {
    borderStyle: 'groove',
    borderWidth: '2px',
    borderRadius: '5px',
    padding: '5px'
  },
  submit: {
    margin: theme.spacing(2, 0, 0),
  },
  table: {
    minWidth: 650,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

export default function CreateMealPlan() {
 const classes = useStyles();
 const food = Food;
 const [title, setTitle] = useState({});
 const [amount, setAmount] = useState([]);
 const [amountObject, setAmountObject] = useState([]);
 const [ingredient, setIngredient] = useState({});
 const [dataObject, setDataObject] = useState([]);
 const [note, setNote] = useState({});
 const [meal, setMeal] = useState({});

 useEffect(() => {
   loadMeal()
 }, []);

 function loadMeal(id) {
   console.log("loadMealFired")
   API.getMeal(id)
   .then(res =>
    setMeal(res.data)
    )
    .catch(err => console.log(err));
 }

 function handleTitleChange(event) {
   console.log("handleTitleChangeFired")
   setTitle(event.target.value)
 };

//  function saveMeal() {
//    console.log("saveMealFired")
//    API.saveMeal({
//     title: title
//    })
//  };

const names = Food.map(a => a.name);

function handleFoodSelector (event) {
  event.preventDefault()
  const { options } = event.target;
  const value = [];
  for (let i = 0, l = options.length; i < l; i += 1) {
    if (options[i].selected) {
      value.push(options[i].value);
      setIngredient(value[0]);
    }
  }
}
      
function handleDataObject(event) {
  event.preventDefault()
    console.log(ingredient);
    let potato = {};
    potato = food.find(obj => obj.name === ingredient);
    let newArray = [...dataObject];
    newArray.push(potato);
    setDataObject(newArray);
}

 function handleAmountSelection(event) {
   console.log("handleAmountSelectionFired")
   setAmount(event.target.value)
 };
 function handleAmountObject(event) {
   event.preventDefault()
   console.log(amount);
   let stuff = {};
   stuff = amount;
   let newStuff = [...amountObject];
   newStuff.push(stuff);
   setAmountObject(newStuff);
 };
 function handleAddButton(event) {
   event.preventDefault();
   handleDataObject(event);
   handleAmountObject(event);
 };

 function handleNotes(event) {
   console.log("handleNotesFired")
   setNote(event.target.value)
 };

 function saveMeal(evt) {
   
   evt.preventDefault();
   let mealToSave = {};
   let length = dataObject.length
   for (let i = 0; i<length; i++) {
     mealToSave ={
       title: title,
       foods: [
           {
           food: dataObject[i].name,
           amount: amountObject[i],
           calories: dataObject[i].calories/100 * amountObject[i],
           protein: dataObject[i].protein/100 * amountObject[i],
           carbs: dataObject[i].carbs/100 * amountObject[i],
           fat: dataObject[i].fat/100 * amountObject[i]
           }
         ],
       notes: note
     }
  }
   console.log("saveMealFired")
   API.saveMeal(
    mealToSave
   )
};

function RenderMeal(){
  console.log("RenderMealFired")
    if (meal === true){
        return (
          <div className={classes.content}>
          <Typography className={classes.heading}>
          {meal.title}
          </Typography>
          <List >
          <ListItem>
              <TableContainer>
              <Table className={classes.table} size="small" aria-label="a dense table">
                  <TableHead>
                  <TableRow>
                      <TableCell>Ingredient</TableCell>
                      <TableCell align="right">Amount&nbsp;(g)</TableCell>
                      <TableCell align="right">Calories</TableCell>
                      <TableCell align="right">Protein&nbsp;(g)</TableCell>
                      <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                      <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  </TableRow>
                  </TableHead>
                  <TableBody>
                  {meal.foods.map(foods => (
                      <TableRow>
                      <TableCell component="th" scope="row">{foods.name}</TableCell>
                      <TableCell align="right">{foods.amount}</TableCell>
                      <TableCell align="right">{foods.calories}</TableCell>
                      <TableCell align="right">{foods.protein}</TableCell>
                      <TableCell align="right">{foods.carbs}</TableCell>
                      <TableCell align="right">{foods.fat}</TableCell>
                      </TableRow>
                  ))}
                  </TableBody>
              </Table>
              </TableContainer>
              <Typography>
                {meal.notes}
              </Typography>
          </ListItem>
          </List>
      </div>
        )}
      else {
          return (
              <h2>No results to display.</h2>
          )
      }   
};

  return (
    <Container className={classes.root}>
      <Paper elevation={3} gutterBottom className={classes.content}>
        <Typography className={classes.title} >
            Create Meal 
        </Typography>
        <div className={classes.form}>
        <form className={classes.form}>
        <TextField id="standard-basic" label="Title" name="title" className={classes.center} onChange={handleTitleChange}/>
        {/* <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onSubmit={handleTitleChange}
                className={classes.submit}
              >
                Step 1: Set Meal Title
        </Button> */}
        </form>
          <Typography>
            Add Ingredients to Meal
          </Typography>
           <form className={classes.form}> 
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="select-multiple-native">
                  Select Ingredient
                </InputLabel>
                <Select
                  multiple
                  native
                  value={ingredient}
                  onChange={handleFoodSelector}
                  inputProps={{
                    id: 'select-multiple-native',
                  }}
                >
                  {names.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </Select>
              </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField id="standard-basic" label="Weight In Grams" name="amount" type="number" onChange={handleAmountSelection}>
                <input type="number"/>
              </TextField>
              </Grid>
            </Grid>
             <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleAddButton}
                className={classes.submit}
              >
                Add Ingredient
            </Button> 
         </form>
          <form className={classes.form}>
            <TextField
            id="outlined-multiline-static"
            label="Add Notes for Meal"
            name="note"
            multiline
            rows={4}
            variant="outlined"
            className={classes.width}
            onChange={handleNotes}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={saveMeal}
              >
                Create Meal 
            </Button>

          </form>
        </div>
      <RenderMeal />
      </Paper>
    </Container>
  );         
}

