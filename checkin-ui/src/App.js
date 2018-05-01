import './App.css';
import 'react-phone-number-input/rrui.css'
import 'react-phone-number-input/style.css'

import * as lang from './lang'

import React, { Component } from 'react';

import Phone from 'react-phone-number-input'
import UserForm from './UserForm';
import UserPoints from './UserPoints';
import logo from './logo.svg';
import request from 'request-promise';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  display: flex;
  justify-content: space-around;
`;

const Heythere = styled.p`
  font-size: 1em;
  line-height: 1.5em;
  color: #8294A6;
  text-transform: uppercase;
  letter-spacing: 0.10em;
`;

const WelcomeMessage = styled.p`
  font-size: 1.5em;
  line-height: 1.5em;
  color: #37495C;
`;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phone: '',
      user: null,
      requested: false,
      newUser: false,
      error: null
    }
    this.handleCheckIn = this.handleCheckIn.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  /**
   * Handles Checkin when user types in their phone number
   * 
   * @memberof App
   */
  async handleCheckIn() {    
    try {
        this.setState({ requested: true })
        var options = {
          method: 'POST',
          uri: `${process.env.REACT_APP_CHEKIN_API_URL}/users/phone`,
          body: {
            phone: this.state.phone
          },
          json: true
        };
        let res = await request(options)

      if (!res) {
        await this.setState({ newUser: true })
      }
      await this.setState({ user: res })
        
    } catch (error) {
        if(error.name === 'RequestError'){
          await this.setState({ error: lang['requestError'] })
        }else{
          await this.setState({ error })
        }
    }
  }

  /**
   * Handles the user signup action
   * 
   * @param {any} { firstName, lastName, email } 
   * @memberof App
   */
  async handleSubmit({ firstName, lastName, email }) {
    this.setState({ newUser: false })
    var options = {
      method: 'POST',
      uri: `${process.env.REACT_APP_CHEKIN_API_URL}/users`,
      body: {
        phone: this.state.phone,
        firstName,
        lastName,
        email
      },
      json: true
    };

    let res = await request(options)
    await this.setState({ user: res })
  }
  render() {    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Wrapper>
          {this.state.error && 
             <WelcomeMessage>{this.state.error}</WelcomeMessage>
          }
          {!this.state.requested &&
            <div>
              <Heythere>{lang['heythere']}</Heythere>
              <WelcomeMessage>{lang['welcomeMessage']}</WelcomeMessage>
              <div className='phone-number-input'>
                <Phone
                  country={'US'}
                  placeholder="Enter phone number"
                  value={this.state.phone}
                  onChange={phone => this.setState({ phone })}
                  indicateInvalid
                />
              </div>
              <input type="submit" value="Check In" onClick={this.handleCheckIn} />
            </div>
          }
          {this.state.newUser &&
            <UserForm handleSubmit={this.handleSubmit} />
          }
          {this.state.user &&
            <UserPoints user={this.state.user} />
          }
        </Wrapper>
      </div>
    );
  }
}

export default App;
