import React, { Component } from 'react';
import './App.css';
import WordContainer from './components/word/WordContainer'
import WordSearcher from './components/word/WordSearcher'
import WordModifier from './components/word/WordModifier';
import words from './model/WordDO'
import { connect } from 'react-redux'

class App extends Component {
  
  // Constructor, its not mandatory to use. but if 
  // we want any pre initialization on  component we can use.
  // Should not use Async call because its impact our performance.

  constructor(props){
    super(props); // should do this else component wont work.
    // can use this.state to create state but its optional
    console.log("[App.js] constructor is called.")

  }

  // After  constructor called . it will call below method in Lifecyle then handover 
  // to Rended() once returned state.
  static getDerivedStateFromProp = (props,state) => {
    return state;
  }


  state = {
        wordtext : 'kkk'
  };

  searchHandler = () => {
     console.log("Search is Clicked")
  }
  
  onchangeHandler(event){
      console.log(event.target.value);
      console.log(event)
  }

  modifyHandler =() =>{
    console.log("Search is Clicked")
  }

  deleteHandler =() =>{
    console.log("Delete  is Clicked")
  }

  render() {

    const titlestyle = {
          fontStyle: 'italic'
    }

    return (
      <div className="App">
       <br />
       <h4 style={titlestyle}> {this.props.apptitle} </h4>
       <hr /> 
        <WordSearcher search={this.searchHandler} 
            > </WordSearcher>
        <hr /> 
        <WordModifier add={this.props.onAddWord}
                      wordtextbox = {() => {this.onchangeHandler}}
                      wordtextValue = {this.state.wordtext}
                      delete={this.modifyHandler}
                      modify={this.deleteHandler} /> 
      <div>
         <hr /> 
          <WordContainer wordsdata={this.props.words}></WordContainer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
     return {
        words : store.words
     }
}

const mapdispatchAction = (dispatch) => ({
    onAddWord : () => dispatch({
       type : 'ADD_WORD',
       value : [new words({ word : 'Annoying', example : 'example'}) ]
     })
});

export default connect(mapStateToProps,mapdispatchAction)(App);
