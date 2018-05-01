import * as lang from './lang'

import React, { Component } from 'react';

import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`
const StyledLabel = styled.label`
  text-align: left;
`;

const SignupMsg = styled.p`
  font-size: 1.5em;
  max-width: 460px;
  padding: 1em;
  line-height: 1.5em;
  color: #37495C;
`;
class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

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
        <StyledForm onSubmit={(event) => {
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