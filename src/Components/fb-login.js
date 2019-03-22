import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';


class Facebook extends Component {

  render() {

    const responseFacebook = (response) => {
      this.props.handleLogin(response);
        this.props.handleNewUser();
    }

    return (

        <FacebookLogin
          appId="2404638263154758"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook} 
          type="submit"/>
    );
  }
}

export default Facebook;