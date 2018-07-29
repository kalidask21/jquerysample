import React, { Component } from 'react';
import './App.css';
import IdCard from './Card/Card'
import Button from 'muicss/lib/react/button'


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
        <h4> Visitor Card</h4>
        <p> Visit Status </p>
        <Button color="primary" onClick={this.visitStatusHandler.bind(this,'All')}> All </Button>
        <Button color="primary" onClick={this.visitStatusHandler.bind(this,'Yes')}> Visted </Button>
        <Button color="primary" onClick={this.visitStatusHandler.bind(this,'No')}> Not Visted </Button>
        <div className="mui--appbar" style={{border: "1px solid #aaa"}}>
          {data}
      </div>
      </div>
    );
  }
}

export default App;
