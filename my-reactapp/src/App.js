import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './Card/Card'
import MyForm from './Card/MyForm'

class App extends Component {
 state = {
     visitors : [{
        name :'Kalidas',
        job : 'Engineer',
        age : 29,
        location : 'California',
        visited: 'YES'
     },
     {
        name :'Srujan',
        job : 'Engineer',
        age : 26,
        location : 'Arkanas'
     }]

  }
  visitStatusHandler = (status)=>{
    this.setState({
      visitors :[{
        name : this.state.visitors[0].name,
        job : 'Engineer',
        age : 29,
        location : 'California',
        visited: status
       }]})
  }
  changeNameHandler =  (event)=>{
     this.setState({
      visitors :[{
        name :event.target.value,
        job : 'Engineer',
        age : 29,
        location : 'California',
        visited: 'Yes'
      }]})
  }

  render() {
    return (
      <div className="App">
        <h4> Id Card APP</h4>
        <MyForm />
        <button onClick={this.visitStatusHandler.bind(this,'YES')}> Visted </button>
        <button onClick={this.visitStatusHandler.bind(this,'NO')}> Not Visted </button>
        <IdCard name ={this.state.visitors[0].name}
                age={this.state.visitors[0].age}
                job={this.state.visitors[0].job}
                modifyname={this.changeNameHandler}
                visited = {this.state.visitors[0].visited}
              >{this.state.visitors[0].location}</IdCard>
         <span>&nbsp;</span>
      </div>
    );
  }
}

export default App;
