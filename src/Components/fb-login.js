import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';


class Facebook extends Component {

  render() {

    const responseFacebook = (response) => {
      this.props.handleLogin(response);
    }


    return (

        <FacebookLogin
          appId=""
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook} 
          type="submit"/>
    );
  }
}

export default Facebook;