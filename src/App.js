import React, { Component } from 'react';
import './App.css';
import AppBar from './components/layout/AppBar'
import Candidates from './components/Candidates';


class App extends Component{

  state = {
    candidates: [{
      "Name": "Test Test",
      "id": 1,
      "title": "delectus aut autem",
      "party": "Democrat"
    },
    {
      "Name": "George Bush",
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "party": "Democrat"
    },
    {
      "Name": "Donald Trump",
      "id": 3,
      "title": "fugiat veniam minus",
      "party": "Democrat"
    }]
  }

  getStyle = () => {
    return {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }

  render() {
    return(
      <div>
        <AppBar/>
        <view style={ this.getStyle()}>

          {/* <h1 style={ this.getStyle()}>hello</h1>
          {this.state.candidates.map((person, i)=>{
            console.log(person.Name);
            return <p>Hello {person.Name} </p>
          })} */}
          <Candidates candidates={this.state.candidates}/>
          {/* <Candidates></Candidates> */}
        </view>
      </div>
      
      
    )
  }
}
export default App;
