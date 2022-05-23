import React, { Component } from 'react'
import LoginForm from './LoginForm'

class Login extends Component {
    handleLogin = (values)=>{
        console.log(values);
    }
  render() {
    return (
      <div>
        <LoginForm onSubmit={this.handleLogin}></LoginForm>
      </div>
    )
  }
}

export default Login
