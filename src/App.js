import React, { Component } from 'react';
import './App.css';
import AppBar from './components/layout/AppBar'
import Candidates from './components/Candidates';
import { width } from '@material-ui/system';


class App extends Component{

  state = {
    candidates: [{
      "Name": "Test Test",
      "id": 1,
      "title": "delectus aut autem",
      "party": "Democrat",
      "pic": '/trump.jpg'
    },
    {
      "Name": "George Bush",
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "party": "Democrat",
      "pic": '/trump.jpg'
    },
    {
      "Name": "Donald Trump",
      "id": 3,
      "title": "fugiat veniam minus",
      "party": "Democrat",
      "pic": '/trump.jpg'
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
