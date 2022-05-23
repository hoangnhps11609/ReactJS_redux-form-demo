import React, { Component } from 'react'
import { Field, Form, reduxForm } from 'redux-form'
import { Button, Form as FormUI, Icon, Input, Label, Segment } from 'semantic-ui-react'

class RegisterForm extends Component {
  renderField = ({input, label, type, meta:{touched, error, warning}}) => {
    return(
      <div>
        <label>{label}</label>
        <input type={type} {...input} placeholder={label}/>
        {
          touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))
        }
      </div>
    )
  } 


  renderUIField = (props) => {
    const {input, label, type, meta:{touched, error, warning}} = props
    return(
      <FormUI.Field>
        <Input type={type} {...input} value={input.value} 
          onChange={(param, data) => input.onChange(data.value)} 
          placeholder={label}></Input>
        {
          touched && ((error && <Label pointing='above'>{error}</Label>) 
            || (warning && <Label pointing='above'>{warning}</Label>))
        }
      </FormUI.Field>
    )
  } 

  render() {
    const {handleSubmit} = this.props
     return (
      <Segment>
          <FormUI onSubmit={handleSubmit}>
              <Field name='email' component={this.renderUIField} type='email'></Field>  
              <Field name='password' component={this.renderUIField} type='password'></Field>
              <Button color='green'>
                <Icon name= 'save outline'></Icon>
                Register</Button>
          </FormUI>
      </Segment>
    )
  }
}

const validate = values =>{
  const errors = {}

  if(!values.email){
    errors.email = 'Email is required'
  }else if(values.email.length<10){
    errors.email = 'Email length > 10'
  }

  if(!values.password){
    errors.password = 'Password is required'
  }else if(values.password.length<10){
    errors.password = 'Password length > 10'
  }

  return errors;
}

const warn = values => {
  const warnings = {}
  if(values.email && !values.email.includes('gmail')){
    warnings.email = 'Email dont use gmail'
  }
  return warnings;
}


export default reduxForm({
    form: 'registerForm',
    validate, 
    warn
}) (RegisterForm)