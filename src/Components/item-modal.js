import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';



function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});


class ItemModal extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
	

	render(){	
		const { classes } = this.props;
		
		return(
			<div>
			<button onClick={this.handleOpen}>Button</button>
	        <Modal
	          aria-labelledby="simple-modal-title"
	          aria-describedby="simple-modal-description"
	          open={this.state.open}
	          onClose={this.handleClose}>	
	          	
	          		<p style={getModalStyle()} className={classes.paper}>Hello</p>
	          	

	        </Modal>
	   </div>
		)
	}	
}


ItemModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const ItemModalWrapped = withStyles(styles)(ItemModal);

export default ItemModalWrapped;



