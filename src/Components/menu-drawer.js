import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ComputerIcon from '@material-ui/icons/Computer';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';

const styles = {
  list: {
    width: 250,
  }
};

class SwipeableTemporaryDrawer extends Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {[{name: 'Top',
            icon: 'star_border'},
            {name: 'Trending',
            icon: 'trending_up'},
            {name: 'New',
            icon: 'fiber_new'},
            {name: 'Upcoming',
            icon: 'calendar_today'}].map((item, index) => (
            <ListItem button key={item.name}>
              <Icon>{item.icon}</Icon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            {name: 'Electronics',
            icon: 'computer'},
            {name: 'Home',
            icon: 'home'},
            {name: 'Kitchen',
            icon: 'kitchen'},
            {name: 'Clothing',
            icon: 'wc'},
            {name: 'Accesories',
            icon: 'beach_access'},
            {name: 'Automobile',
            icon: 'commute'}]
            .map((item, index) => (
            <ListItem button key={item.name}>
              <Icon>{item.icon}</Icon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>

      <MenuItem color="inherit">
          <MenuIcon onClick={this.toggleDrawer('left', true)} className={classes.menuButton} color="secondary" aria-label="Open drawer"/>
      </MenuItem>

        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwipeableTemporaryDrawer);