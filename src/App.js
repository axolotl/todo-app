import React, { Component } from 'react';
import randomWords from 'random-words';
import Form from './InputForm';
import { reset } from 'redux-form';
import Header from './Header';
import './App.css';

class App extends Component {
  submit = input => {
    const { addTodo } = this.props;
    if (input.input != undefined) {
      addTodo(input.input);
    }
  }

  render() {
    const { todos, addTodo, removeTodo } = this.props;

    return (
      <div className='outer-container'>
        <Header />


        <div className='container'>
          <div className='item'>
            <Form onSubmit={this.submit} />
            <button onClick={()=> addTodo(randomWords())}>add random</button>
          </div>
          {todos.map((todo) => (
            <div key={todo.id} className='item'>
              <p className='text'>{todo.todo}</p>
              <button className='close' onClick={() => removeTodo(todo.id)}>remove</button>
            </div>
          ))}
        </div>

      </div>
    );
  }
}

export default App;
