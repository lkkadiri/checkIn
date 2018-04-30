import React, { Component } from 'react';

import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`
const StyledLabel = styled.label`
  text-align: left;
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
      <StyledForm onSubmit={(event) => {
          event.preventDefault();
          this.props.handleSubmit(this.state);
        }}>
        <StyledLabel>
          First Name:
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
        </StyledLabel>
        <StyledLabel>
          Last Name:
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
        </StyledLabel>
        <StyledLabel>
          Email:
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
        </StyledLabel>
        <input type="submit" value="Submit" />
      </StyledForm>
    );
  }
}
export default UserForm;