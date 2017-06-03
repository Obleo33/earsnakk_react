import React, { Component } from 'react';
import './App.css';
import Routes from '../Routes/Routes';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // this user object has the display name that we will need to create playlists.
      user: {}
    }
  }

  componentDidMount() {

  }


  render() {
    return (
      <div>
        <h1 className="logo">earsnakk</h1>
        <Routes />
      </div>

    );
  }
}

export default App;
