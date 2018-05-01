import React from 'react';
import ReactDOM from 'react-dom';
import UserPoints from './UserPoints';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserPoints user={{lala: ""}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
