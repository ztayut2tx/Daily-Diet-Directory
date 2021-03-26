import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 165;

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
}));

function SideBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>      
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
              <ListItem button>
                <ListItemText primary =
                  "New Client Profile">
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText primary =
                  "New Meal Plan">
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText primary =
                  "Ingredient List">
                </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemText primary =
                  "View Plans">
                </ListItemText>
              </ListItem>
          </List> 
        </div>
      </Drawer>
    </div>
  );
}

export default SideBar;
