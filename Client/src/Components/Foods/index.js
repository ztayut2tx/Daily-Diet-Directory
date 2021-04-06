import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Food from '../../food.js';

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

  
  function Oil(){
    const classes = useStyles();
    const food = Food;
    const oil = food.filter(foods => foods.type === 'Oil');
      if (oil.length > 0){
          return (
            <div className={classes.content}>
            <Typography className={classes.heading}>
            Oil
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
                    {oil.map(oil => (
                        <TableRow>
                        <TableCell component="th" scope="row">{oil.name}</TableCell>
                        <TableCell align="right">100</TableCell>
                        <TableCell align="right">{oil.calories}</TableCell>
                        <TableCell align="right">{oil.protein}</TableCell>
                        <TableCell align="right">{oil.carbs}</TableCell>
                        <TableCell align="right">{oil.fat}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </ListItem>
            </List>
        </div>
          )}
        else {
            return (
                <h2>No results to display.</h2>
            )
        }
}

function Fruit(){
    const classes = useStyles();
    const food = Food;
    const fruit = food.filter(foods => foods.type === 'Fruit');
      if (fruit.length > 0){
          return (
            <div className={classes.content}>
            <Typography className={classes.heading}>
            Fruit (Raw Weight)
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
                    {fruit.map(fruit => (
                        <TableRow>
                        <TableCell component="th" scope="row">{fruit.name}</TableCell>
                        <TableCell align="right">100</TableCell>
                        <TableCell align="right">{fruit.calories}</TableCell>
                        <TableCell align="right">{fruit.protein}</TableCell>
                        <TableCell align="right">{fruit.carbs}</TableCell>
                        <TableCell align="right">{fruit.fat}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </ListItem>
            </List>
        </div>
          )}
        else {
            return (
                <h2>No results to display.</h2>
            )
        }
}

function Vegetables(){
    const classes = useStyles();
    const food = Food;
    const vegetables = food.filter(foods => foods.type === 'Vegetable');
      if (vegetables.length > 0){
          return (
            <div className={classes.content}>
            <Typography className={classes.heading}>
            Vegetables (Raw Weight)
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
                    {vegetables.map(vegetables => (
                        <TableRow>
                        <TableCell component="th" scope="row">{vegetables.name}</TableCell>
                        <TableCell align="right">100</TableCell>
                        <TableCell align="right">{vegetables.calories}</TableCell>
                        <TableCell align="right">{vegetables.protein}</TableCell>
                        <TableCell align="right">{vegetables.carbs}</TableCell>
                        <TableCell align="right">{vegetables.fat}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </ListItem>
            </List>
        </div>
          )}
        else {
            return (
                <h2>No results to display.</h2>
            )
        }
}

function Nuts(){
    const classes = useStyles();
    const food = Food;
    const nuts = food.filter(foods => foods.type === 'Nuts');
      if (nuts.length > 0){
          return (
            <div className={classes.content}>
            <Typography className={classes.heading}>
            Nuts (Raw Weight)
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
                    {nuts.map(nuts => (
                        <TableRow>
                        <TableCell component="th" scope="row">{nuts.name}</TableCell>
                        <TableCell align="right">100</TableCell>
                        <TableCell align="right">{nuts.calories}</TableCell>
                        <TableCell align="right">{nuts.protein}</TableCell>
                        <TableCell align="right">{nuts.carbs}</TableCell>
                        <TableCell align="right">{nuts.fat}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </ListItem>
            </List>
        </div>
          )}
        else {
            return (
                <h2>No results to display.</h2>
            )
        }
}

function Grains(){
    const classes = useStyles();
    const food = Food;
    const grain = food.filter(foods => foods.type === 'Grain');
      if (grain.length > 0){
          return (
            <div className={classes.content}>
            <Typography className={classes.heading}>
            Grains (Cooked Weight)
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
                    {grain.map(grain => (
                        <TableRow>
                        <TableCell component="th" scope="row">{grain.name}</TableCell>
                        <TableCell align="right">100</TableCell>
                        <TableCell align="right">{grain.calories}</TableCell>
                        <TableCell align="right">{grain.protein}</TableCell>
                        <TableCell align="right">{grain.carbs}</TableCell>
                        <TableCell align="right">{grain.fat}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </ListItem>
            </List>
        </div>
          )}
        else {
            return (
                <h2>No results to display.</h2>
            )
        }
}
function Meat(){
    const classes = useStyles();
    const food = Food;
    const meat = food.filter(foods => foods.type === 'Meat');
      if (meat.length > 0){
          return (
            <div className={classes.content}>
            <Typography className={classes.heading}>
            Meat (Cooked Weight)
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
                    {meat.map(meat => (
                        <TableRow>
                        <TableCell component="th" scope="row">{meat.name}</TableCell>
                        <TableCell align="right">100</TableCell>
                        <TableCell align="right">{meat.calories}</TableCell>
                        <TableCell align="right">{meat.protein}</TableCell>
                        <TableCell align="right">{meat.carbs}</TableCell>
                        <TableCell align="right">{meat.fat}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </ListItem>
            </List>
        </div>
          )}
        else {
            return (
                <h2>No results to display.</h2>
            )
        }
}

function Fish(){
    const classes = useStyles();
    const food = Food;
    const fish = food.filter(foods => foods.type === 'Fish');
      if (fish.length > 0){
          return (
            <div className={classes.content}>
            <Typography className={classes.heading}>
            Fish (Cooked Weight)
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
                    {fish.map(fish => (
                        <TableRow>
                        <TableCell component="th" scope="row">{fish.name}</TableCell>
                        <TableCell align="right">100</TableCell>
                        <TableCell align="right">{fish.calories}</TableCell>
                        <TableCell align="right">{fish.protein}</TableCell>
                        <TableCell align="right">{fish.carbs}</TableCell>
                        <TableCell align="right">{fish.fat}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </ListItem>
            </List>
        </div>
          )}
        else {
            return (
                <h2>No results to display.</h2>
            )
        }
}
  
  export default function IngredientList() {
   
   const classes = useStyles();
  
    return (
      <Container className={classes.root}>
        <Paper elevation={3} gutterBottom className={classes.content}>
          <div className={classes.content}>
          <Typography className={classes.title} >
              Ingredient List
          </Typography>
          <Typography component="h2">
              All ingredient data presented involving calories and macro nutrients are averages that have been rounded to the nearest whole number.
          </Typography>
          </div>
          <Container>
            <Oil />     
            <Fruit /> 
            <Vegetables />
            <Nuts />
            <Grains />
            <Meat />
            <Fish />    
          </Container>
        </Paper>
      </Container>
    );
  }
  