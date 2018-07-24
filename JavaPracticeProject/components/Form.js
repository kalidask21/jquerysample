/**
 * http://usejsdoc.org/
 */
import React, { Component } from "react";

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fname : '',
			lname : '',
			fullName :'',
		    city : ''
		};

		this.handleChangeF = this.handleChangeF.bind(this);
		this.handleChangeL = this.handleChangeL.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeF(event) {
		this.setState({
			fname : event.target.value
		});
	}


	handleChangeL(event) {
		this.setState({
			lname : event.target.value
		});
	}

	handleSubmit(event) {
		console.log('A name was submitted: ' + this.state.fname);
		console.log('A name was submitted: ' + this.state.lname);
		this.state({
			fullName: this.state.fname + ' ' + this.state.lname,
			city : 'Sacramento'
		})
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
	        <label>
	         First Name:
	          <input type="text" value={this.state.fname} onChange={this.handleChangeF} />
	        </label>
	        <label>
	         Last Name:
	          <input type="text" value={this.state.lname} onChange={this.handleChangeL} />
	        </label>
	        <p>Hi {this.state.fullName} , Welcome to {this.state.city} </p>
	        <input type="submit" value="Submit" />
	      </form>
			);
	}
}