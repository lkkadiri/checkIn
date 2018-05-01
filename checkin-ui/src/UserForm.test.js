import Enzyme,{shallow} from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDOM from 'react-dom';
import UserForm from './UserForm';

Enzyme.configure({adapter: new Adapter()});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
describe('action handlers', () => {
  it('should handleChange', async ()=>{
    const UF = shallow(<UserForm />);
    await UF.instance().handleChange({target: {name: 'foo', value: 'bar'}});
    expect(UF.state().foo).toEqual('bar');
  })  
  it('should handleSubmit', async ()=>{
    const mockSubmit = jest.fn();
    const UF = shallow(<UserForm handleSubmit={mockSubmit}/>);
    UF.find('StyledForm').simulate('submit', { preventDefault() {} })    
    expect(mockSubmit).toHaveBeenCalled();
  })  
})