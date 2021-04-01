import React from 'react';
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';

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

  return (
    <Container className={classes.root}>
      <Paper elevation={3} gutterBottom className={classes.content}>
        <Typography className={classes.title} >
            Create Meal Plan
        </Typography>
        <Typography component="h2">
            Client Name:
        </Typography>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Choose Date"
                //value={selectedDate}
                //onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
          </MuiPickersUtilsProvider>
        <div className={classes.form}>
          <Typography>
            Create Meal
          </Typography>
          <form >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
              <TextField id="standard-basic" label="Search Food" />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField id="standard-basic" label="Weight In Grams" />
              </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Add Food
            </Button>
          </form>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Next Meal
          </Button>
        </div>
        {/* <Container>
          {clients.mealPlans.meals.length ? (
            <div>
             <Typography className={classes.title} >
             Meal Plan
             </Typography>
             <Typography component="h2">
                  Client Name:
             </Typography>
            </div>
              {clients.mealPlans.map(plan => {
                return (
                  <div>
                    <Typography component="h2" key={plan._id}>
                      Date: {plan.date}
                    </Typography>
                    <List key={plan.meals._id}>
                      <ListItem>
                        <Typography>
                          Meal Number: {plan.meals._id}
                        </Typography>
                        <TableContainer>
                          <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                              <TableRow>
                                <TableCell>Food</TableCell>
                                <TableCell align="right">Amount&nbsp;(g)</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                  <TableCell component="th" scope="row">{plan.meals.foods.food}</TableCell>
                                  <TableCell align="right">{plan.meals.foods.amount}</TableCell>
                                  <TableCell align="right">{plan.meals.foods.calories}</TableCell>
                                  <TableCell align="right">{plan.meals.foods.fat}</TableCell>
                                  <TableCell align="right">{plan.meals.foods.carbs}</TableCell>
                                  <TableCell align="right">{plan.meals.foods.protein}</TableCell>
                                </TableRow>
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </ListItem>
                    </List>
                  </div>
                )})}) : (<h1>No Results to Display</h1>)}
          
        </Container> */}
      </Paper>
    </Container>
  );
}
