import Enzyme,{shallow} from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

const request = require('request-promise');

jest.mock('request-promise');
Enzyme.configure({adapter: new Adapter()});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('action handlers', () => {
  it('should handle checkin with phone', async ()=>{
    const app = shallow(<App />);
    await app.instance().handleCheckIn();
    expect(request).toHaveBeenCalled();
  })  
  
  it('should handle user signup', async ()=>{
    const app = shallow(<App />);
    await app.instance().handleSubmit({firstName: 'Leela', lastName: 'Kadiri', email: 'lk@lk.co'});
    expect(request).toHaveBeenCalled();
  })  
  
  it('should handle server error', async ()=>{
    const app = shallow(<App />);
    request.mockImplementation( () => {
       throw new Error('Server Unavailable');
    });
    try {
      await app.instance().handleSubmit({firstName: 'Leela', lastName: 'Kadiri', email: 'lk@lk.co'});
      
    } catch (error) {
      expect(error.message).toEqual('Server Unavailable')
    }
   
  })  
})