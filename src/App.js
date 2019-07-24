import React, { Component } from 'react';
import './App.css';
import AppBar from './components/layout/AppBar'
import CandidateItem from './components/CandidateItem';


class App extends Component{

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

          <h1 style={ this.getStyle()}>hello</h1>
          <p >this is a test </p>
          
        </view>
        <CandidateItem/>
      </div>
      
      
    )
  }
}
export default App;
