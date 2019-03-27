import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import WordCard from './WordCard';
import RestServiceCaller from '../Service/RestServiceCaller'
const restObject = new RestServiceCaller();

class Wordsloader extends Component {
	constructor() {
		super();
		const data = restObject.loadWords();
		this.state = {
			words: data
		}
	}


	render() {
		return (
			<div class="container">
				<WordCard data={this.state.words} />
			</div>

		);
	}
}

export default Wordsloader;