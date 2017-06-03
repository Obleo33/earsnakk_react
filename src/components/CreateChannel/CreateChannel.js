import React, { Component } from 'react';
import './CreateChannel.css'


const newStation = () => {
  console.log('clicked');
  fetch('/api/v1/playlist')
    .then(response => console.log(response))
}

class CreateChannel extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      genres: {}
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render(){
    return (
      <div className="create-channel-wrapper">
        <input
          className="create-channel-input"
          type="text"
          placeholder="Channel Name"
          value={this.state.name}
          onChange={(e) =>  this.setState({ name: e.target.value }) }
          />
        <form className="create-channel-form">
          <fieldset>
            <legend>Choose Channel Genres</legend>
            <input type="checkbox" name="genres" value="Hiphop" />Hiphop <br />
            <input type="checkbox" name="genres" value="EDM" />EDM<br />
            <input type="checkbox" name="genres" value="Rock" />Rock<br />
            <input type="checkbox" name="genres" value="All Genres" />All Genres<br />
          </fieldset>
        </form>
        <input onClick={(e) => this.handleSubmit(e) } type="submit" value="Submit now" />
        <button onClick={ () => newStation() }>createTEST</button>
      </div>
    )
  }
}


export default CreateChannel;
