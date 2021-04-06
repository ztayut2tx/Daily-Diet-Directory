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
import FoodSelector from '../FoodSelector/index'

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
}));

export default function CreateMealPlan() {
 const classes = useStyles();
 const food = Food;
 const [title, setTitle] = useState({});
 const [amount, setAmount] = useState({});
 const [dataObject, setDataObject] = useState({});
 const [note, setNote] = useState({});
 const [meal, setMeal] = useState({});

 useEffect(() => {
   loadMeal()
 }, []);

 function loadMeal() {
   console.log("loadMealFired")
   API.getMeal()
   .then(res =>
    setMeal(res.data)
    )
    .catch(err => console.log(err));
 }

 function handleTitleChange(event) {
   console.log("handleTitleChangeFired")
   const title = event.target.value;
   setTitle(title)
   .then(saveMeal())
 };

 function saveMeal() {
   console.log("saveMealFired")
   API.saveMeal({
    title: title
   })
 };

 function handleFoodSelection(event) {
   console.log("handleFoodSelectionFired")
  const ingredient = event.target.value;
  const dataObject = food.find(obj => obj.name === ingredient)
  setDataObject(dataObject)
 };

 function handleAmountSelection(event) {
   console.log("handleAmountSelectionFired")
   const amount = event.target.value;
   setAmount(amount)
 };

 function handleNotes(event) {
   console.log("handleNotesFired")
   const note = event.target.value;
   setNote(note)
   .then(updateMeal())
 };

 function updateMeal() {
   console.log("updateMealFired")
   API.updateMeal({
    foods: [{
      food: dataObject.name,
      amount: amount,
      calories: dataObject.calories/100 * amount,
      protein: dataObject.protein/100 * amount,
      carbs: dataObject.carbs/100 * amount,
      fat: dataObject.fat/100 * amount
      }],
      notes: note
   }).then(RenderMeal())
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
        <form>
        <TextField id="standard-basic" label="Title" name="title" />
        <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleTitleChange}
                className={classes.submit}
              >
                Step 1: Set Meal Title
        </Button>
        </form>
        <div className={classes.form}>
          <Typography>
            Add Ingredients to Meal
          </Typography>
          <form >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
              <FoodSelector  name="ingredient" onSubmit={handleFoodSelection} />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField id="standard-basic" label="Weight In Grams" name="amount" onSubmit={handleAmountSelection} />
              </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={updateMeal}
                className={classes.submit}
              >
                Step 2: Add Ingredient
            </Button>
          </form>
          <form>
            <TextField
            id="outlined-multiline-static"
            label="Add Notes for Meal"
            name="note"
            multiline
            rows={4}
            variant="outlined"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleNotes}
                className={classes.submit}
              >
                Step 3: Add Notes
            </Button>

          </form>
        </div>
      <RenderMeal />
      </Paper>
    </Container>
  );         
}

