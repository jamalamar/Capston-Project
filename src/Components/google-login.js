import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';


 class Google extends Component {
  render() {

    const responseGoogle = (response) => {
      this.props.handleLogin(response);
    }

    return (

      <GoogleLogin
        clientId="303023437973-54akvpila60n4klom26bq8dgno9kg9bi.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

    );
  }
}

export default Google;