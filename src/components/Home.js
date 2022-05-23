import React, { Component } from 'react'
import userAxios from '../axios'

class Home extends Component {

    handleCreate = async () =>{
        const response = await userAxios.post('', {
            id: 1,
            email: 'hoang@gmail.com',
            password: '456789'
        })
        console.log(response.data)
    }

    handleRetrive = async () =>{
        const response = await userAxios.get('/1')
        console.log(response.data)
    }

    handleList = () =>{
        userAxios.get('').then((savedUser) => {
            console.log(savedUser);
        }).catch((err) =>{
            console.log(err);
        })
    }

    handleUpdate = () =>{
        userAxios.put('/2', {
            id: 2,
            email: 'hoang@gmail.com111111111111',
            password: '456789'
        }).then((savedUser) => {
            console.log(savedUser);
        }).catch((err) =>{
            console.log(err);
        })
    }

    handleDelete = () =>{
        userAxios.delete('/1').then((savedUser) => {
            console.log(savedUser);
        }).catch((err) =>{
            console.log(err);
        })
    }

  render() {
    return (
      <div>
          <button onClick={this.handleCreate}>Create</button> 
          <button onClick={this.handleRetrive}>Retrive</button> 
          <button onClick={this.handleUpdate}>Update</button> 
          <button onClick={this.handleList}>List</button> 
          <button onClick={this.handleDelete}>Delete</button> 

          <button onClick={() => this.props.history.push('/login')}>Login</button>
          <button onClick={() => this.props.history.push('/register')}>Register</button>
      </div>
    )
  }
}

export default Home