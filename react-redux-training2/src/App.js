import React,{ Component }from 'react'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      articles :[
         { title :  'A', id :1 },
         { title :  'B', id :2 }
      ]
    }
  }

  componentDidMount(){
    const newData = [
      { title :  'C', id :4 },
      { title :  'D', id :5 }
    ];

    let { articles } = this.state;
    articles = [...articles,...newData];
    console.log(articles)
    console.log(this.state.articles);

    this.setState(state => {
      console.log(state)
      return {...state,...{ articles }}
    })
  }

  render(){
    const { articles } = this.state;
    return (
      <div className="App">
         {articles.map(el =>{
           return (
             <div>
               <h4>{el.title}</h4>
             </div>
           )
         })}
      </div>
    );
  }
  
}

export default App;
