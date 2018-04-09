import React, { Component } from 'react';
import logo from './bjuppa.jpg';
import './App.css';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="My-header">
          <h1 className="App-intro">
            "Tjong! 
            Hade "så bråttom" att dra så jag glömde min datorladdare... (En HP)
            Kan någon vara barmhärtig och dra ur den och märka upp med mitt namn á la den gången Ekroth glömde sin... (kanske inte samma exponering, men...)"
          </h1>
        </div>

        <div className="My-Content">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className="My-TwitterContent">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="bjornsladdare"
            options={{height: 800}}
          />
        </div>
      </div>
    );
  }
}

export default App;
