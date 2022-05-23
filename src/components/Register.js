import React, { Component } from 'react'
import RegisterForm from './RegisterForm';

class Register extends Component {
    handleRegister = (values)=>{
        console.log(values);
    }

  render() {
    return (
      <div>
        <RegisterForm onSubmit={this.handleRegister}></RegisterForm>
      </div>
    )
  }
}

export default Register
