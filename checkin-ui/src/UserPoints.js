import React, { Component } from 'react';

class UserPoints extends Component {
  render() {
    let {firstName, lastName, points, visits} = this.props.user
    return (
      <div>{`Hey ${firstName} ${lastName}! You have visited ${visits} times and so far have scored ${points} points!`}</div>
    );
  }
}
export default UserPoints;