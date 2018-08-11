import React, { Component } from 'react';
import './App.css';
import IdCard from './Card/Card'
<<<<<<< HEAD
import Button from 'muicss/lib/react/button'

=======
import MyForm from './Card/MyForm'
>>>>>>> 20dada3063be76c6ba8107e97fa620e99230451e

class App extends Component {
 state = {
     visitors : [{
        name :'Kalidas',
        job : 'Engineer',
        age : 29,
        location : 'California',
        visited: 'Yes'
     },
     {
        name :'Srujan',
        job : 'Engineer',
        age : 26,
        location : 'New York',
        visited: 'Yes'
     },
     {
        name :'Joe',
        job : 'Senior Engineer',
        age : 29,
        location : 'Arkanas',
        visited: 'No'
     },
     {
        name :'Jim',
        job : 'Application Engineer',
        age : 45,
        location : 'New Jersey',
        visited: 'No'
     }],
     visitStatus : 'All'
      
  }
  visitStatusHandler = (visitStatusInp)=>{
    this.setState({
      visitStatus : visitStatusInp
    })
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

  visitorData = ()=>{
    return [{
      name :'Kalidas',
      job : 'Engineer',
      age : 29,
      location : 'California',
      visited: 'YES'
   }];
  }

  render() {
    let data = null;
    data = (
      <div>
          {this.state.visitors.map((visitor) => {
          return (
             this.state.visitStatus !== 'All' ?
             visitor.visited === this.state.visitStatus ?
              <IdCard name={visitor.name}
                age={visitor.age}
                job={visitor.job}
                visited={visitor.visited ? 'Yes': 'No'}>{visitor.location}</IdCard> : '' :
              <IdCard name={visitor.name}
                age={visitor.age}
                job={visitor.job}
                visited={visitor.visited ? 'Yes': 'No'}>{visitor.location}</IdCard>
              );
            })
          }
      </div>);

    return (
      <div className="App">
<<<<<<< HEAD
        <h4> Visitor Card</h4>
        <p> Visit Status </p>
        <Button color="primary" onClick={this.visitStatusHandler.bind(this,'All')}> All </Button>
        <Button color="primary" onClick={this.visitStatusHandler.bind(this,'Yes')}> Visted </Button>
        <Button color="primary" onClick={this.visitStatusHandler.bind(this,'No')}> Not Visted </Button>
        <div className="mui--appbar" style={{border: "1px solid #aaa"}}>
          {data}
      </div>
=======
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
>>>>>>> 20dada3063be76c6ba8107e97fa620e99230451e
      </div>
    );
  }
}

export default App;
