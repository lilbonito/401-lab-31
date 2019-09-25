import React, { useEffect, useState, useReducer } from 'react';

import Auth from '../auth/auth.js';

import styles from './todo.module.scss';

const initialState = {
  item: '',
  toDoItems: []
};

function reducer(state, action) {
  switch (action.type) {
    case "update Item list":
    return {...state, item: action.data };
    case "update todo items":
    return {...state, toDoItems: action.data};
    default:
    throw new Error();


  }
};

function Todo (props) {

  const[state, dispatch] = useReducer(reducer, initialState);


  // handleForm = (e) => {
  //   e.preventDefault();
  //   e.target.reset();
  //   let item = { title:this.state.item, status:false };
  //   this.setState({toDoItems:[...this.state.toDoItems, item]});
  // };

  // handleChange = (e) => {
  //   this.setState( {item:e.target.value} );
  // }

  toggle = (e,id) => {
    e.preventDefault();
    let toDoItems = state.toDoItems.map( (item,idx) =>
      idx === id ? {title:item.title, status:!item.status} : item
    );
    this.setState({toDoItems});
  };

    return (
      <section className={styles.todo}>

        <Auth capability="read">
          {state.toDoItems.map((item, idx) =>
            <div key={idx} onClick={(e) => toggle(e, idx)}>
              <span className={styles[`complete-${item.status}`]}> {item.title} </span>
            </div>
          )}
        </Auth>

        {/* <Auth capability="create">
          <form onSubmit={this.handleForm}>
            <input
              onChange={this.handleChange}
              name="item"
              placeholder="Add To Do List Item Here"
            />
          </form>
        </Auth> */}

      </section>
    );
  };

export default Todo;
