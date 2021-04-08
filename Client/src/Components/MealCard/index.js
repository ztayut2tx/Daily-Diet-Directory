import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import API from '../../Utils/API'

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
  title: {
    textAlign: 'center',
    fontSize: '25px'
  },
  heading: {
    textAlign: 'left',
    fontSize: '20px'
  },
  card: {
    maxWidth: 350,
    padding: "5%",
    margin: "5px"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3, 0, 8),
    margin: "5%",
  },
}));

export default function MealCard() {
  const classes = useStyles();
  const [meal, setMeals]= useState([]);

  useEffect(() => {
      loadMeals()
  }, [])

  function loadMeals() {
      API.getMeals()
          .then(res =>
              setMeals(res.data)
              )
              .then(console.log(meal))
              .catch(err => console.log(err))
  };

  function deleteMeal(id) {
      API.deleteMeal(id)
        .then(res => loadMeals())
        .catch(err => console.log(err));
  }

if (meal.length > 0){
  return ( 
    <Container component="main" maxWidth="md" className={classes.root}>
        {meal.map(meal => (
        <Card className={classes.card}>
            <CardContent>
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
                            <TableRow>
                            <TableCell>Total:</TableCell>
                            <TableCell align="right">Amount&nbsp;(g)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    </TableContainer>
                </ListItem>
                </List>
                <Typography>
                    {meal.notes}
                </Typography>
            </CardContent>
            <CardActions>
            <Button
                type="submit"
                fullWidth
                size="small"
                variant="contained"
                color="primary"
                onClick={() => deleteMeal(meal._id)}
                href="/viewMeals"
                >
                Delete Meal
            </Button>
            </CardActions>
        </Card>
        ))}
    </Container>
    )
}
    else {
        return(
            <Container component="main" maxWidth="xs" className={classes.root}>
                <Card className={classes.root}>
                <CardActions>
                    <Button
                        type="submit"
                        fullWidth
                        size="small"
                        variant="contained"
                        color="primary"
                        href="/createMeal"
                        >
                        Create Meal
                    </Button>
                </CardActions>
                </Card>
            </Container>
        )
    }
}

