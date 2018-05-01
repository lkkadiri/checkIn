import * as lang from './lang'

import React, { Component } from 'react';

import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`
StyledForm.displayName = 'StyledForm';
const StyledLabel = styled.label`
  text-align: left;
`;
StyledLabel.displayName = 'StyledLabel';

const SignupMsg = styled.p`
  font-size: 1.5em;
  max-width: 460px;
  padding: 1em;
  line-height: 1.5em;
  color: #37495C;
`;
SignupMsg.displayName = 'SignupMsg';
class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Sets the various form values to the state for submission
   * 
   * @param {any} event 
   * @memberof UserForm
   */
  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <SignupMsg>{lang['signup']}</SignupMsg>
        <StyledForm id='StyledForm' onSubmit={(event) => {
            event.preventDefault();
            this.props.handleSubmit(this.state);
          }}>
          <StyledLabel>
            First Name:
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
            Last Name:
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
          </StyledLabel>
          <StyledLabel>
            Email:
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </StyledLabel>
          <input type="submit" value="Sign Up" />
        </StyledForm>
      </div>

    );
  }
}
export default UserForm;