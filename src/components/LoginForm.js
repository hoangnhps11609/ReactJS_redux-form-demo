import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class LoginForm extends Component {
  render() {
      const {handleSubmit, mate, pristine, reset, submitting} = this.props
    return (
      <div>
          <form onSubmit={handleSubmit}>
              <div>
                  <label htmlFor='email'>Email</label>
                  <Field name='email' component='input' type='email'></Field> 
              </div>

              <div>
                  <label htmlFor='password'>Password</label>
                  <Field name='password' component='input' type='password'></Field> 
              </div>

                <button>Login</button>
          </form>
      </div>
    )
  }
}

export default reduxForm({
    form: 'loginForm'
}) (LoginForm)