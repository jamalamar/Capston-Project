import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';


class Facebook extends Component {

  render() {

    const responseFacebook = (response) => {
      console.log(response);
    }

    return (

        <FacebookLogin
          appId=""
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook} />
    );
  }
}

export default Facebook;