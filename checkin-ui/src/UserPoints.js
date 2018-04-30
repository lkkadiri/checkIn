import * as lang from './lang'

import React, { Component } from 'react';

class UserPoints extends Component {
  render() {
    return (
      <div>{lang['pointsMessage'](this.props.user)}</div>
    );
  }
}
export default UserPoints;