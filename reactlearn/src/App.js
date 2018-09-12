import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>hello world</h2>
        <Qiantao canshu1="这是参数1"></Qiantao>
        <Fun canshu2="这是参数2"></Fun>
      </div>
    );
  }
}

function Fun(props){
  return <h2>{props.canshu2}</h2>
}

class Qiantao extends Component{
  constructor(props){
    super(props);
    this.state={
      names:["小明","小红","小兰"]
    }
  }
  render(){
    return(
      <div>
          <h2>下级标签，{this.props.canshu1}</h2>
          <ul>{this.state.names.map(v=>{
            return <li key={v}>{v}</li>
          }
            
          )}</ul>

      </div>
      
    );
  }
}

export default App;
