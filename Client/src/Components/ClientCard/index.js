import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
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

export default function ClientCard() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.content}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Client Name:
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Height:
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Weight:
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              BodyFat %:
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Age:
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            type="submit"
            fullWidth
            size="small"
            variant="contained"
            color="primary"
            href="/updateProfile"
            >
            Update Profile
          </Button>
          <Button
            type="submit"
            fullWidth
            size="small"
            variant="contained"
            color="primary"
            href="/createMealPlan"
            >
            Create Meal Plan
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
