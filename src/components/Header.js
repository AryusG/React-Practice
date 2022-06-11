import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        date: new Date().toLocaleString()
      }
  }
  
  render () {
    return (
      <div>
        <h1>
          Hello, World
        </h1>
        <h3>The time is: {this.state.date}</h3>
      </div>
    );
  }
}
