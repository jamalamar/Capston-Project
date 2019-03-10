import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';


 class Google extends Component {
  render() {

    const responseGoogle = (response) => {
      console.log(response);
    }

    return (

      <GoogleLogin
        clientId="" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

    );
  }
}

export default Google;