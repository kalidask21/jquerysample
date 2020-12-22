import React, { Component } from "react";

import ACTIONS from "./module/action";
import { connect } from "react-redux";

import {
  withStyles,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Grid,
  TextField,
  Button
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
  }
});


const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  createItem: item => dispatch(ACTIONS.createAction(item)),
  deleteItem: id => dispatch(ACTIONS.deleteAction(id))
});


class ToDO extends Component {
  state = { 
    item : []
  };

  generate = () => {
    return this.props.items.map(item => (
      <ListItem key={item.id}>
        <ListItemText primary={item.desc} />
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete"
            onClick={this.handleDelete}
            value={item.id}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ));
  };


  handleSubmit = event => {
    // console.log(this.state.item);
    this.setState({ item: "" });
    if (this.state.item !== "") {
      console.log("add the item to the store");
      this.props.createItem(this.state.item);
    }
    event.preventDefault();
  };
  
  handleDelete = event => {
    // delete the item from the store
    this.props.deleteItem(event.target.value);
  };
  handleChange = event => {
    console.log("event.target.name "+event.target.name);
    console.log("event.target.name "+event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div>
          
              <TextField
                label="New Task"
                id="margin-dense"
                value={this.state.item}
                className={classes.textField}
                margin="dense"
                name="item"
                onChange={this.handleChange}
              />
            
            
              <Button onClick={this.handleSubmit}> Add</Button>
           
          
        </div>
        <div>
          <Grid item container justify="space-evenly" alignItems="center">
            <div className={classes.demo}>
              <List dense={false}>{this.generate()}</List>
            </div>
          </Grid>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ToDO));