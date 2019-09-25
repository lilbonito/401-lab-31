import superagent from 'superagent';
import React, { useState, useEffect } from 'react';
import {LoginContext } from './context.js';

const API = process.env.REACT_APP_API;

const If = props => {
  return !!props.condition ? props.children : null;
};

function Login(props){
const [username, setUsername] = useState("Username");
const [password, setPassword] = useState("Password")


function changeUsername( e ) {
  setUsername([e.target.value])
}

function changePassword( e ) {
  setPassword([e.target.value])
}

  // handleSubmit = (e, loginMethodFromContext) => {
  //   e.preventDefault();
  //   superagent
  //   .post(`${API}/signin`)
  //   .auth(props.state.username, props.state.password)
  //   .then(response => {
  //     let token = response.text;
  //     loginMethodFromContext(token);
  //   })
  //   .catch(console.error);
  // };


    return (
      <LoginContext.Consumer>
        {context => {
          return (
            <>
              <If condition={context.loggedIn}>
                <button onClick={context.logout}>
                  Log Out
                </button>
              </If>
              <If condition={!context.loggedIn}>
                <div>
                  <form onSubmit={e => props.handleSubmit(e, context.login)}>
                    <input
                    value={username}
                      placeholder="username"
                      name="username"
                      onChange={changeUsername}
                    />
                    <input
                    value={password}
                      placeholder="password"
                      name="password"
                      type="password"
                      onChange={changePassword}
                    />
                    <input type="submit" value="login" />
                  </form>
                </div>
              </If>
            </>
          );
        }}
      </LoginContext.Consumer>
    );
  }


export default Login;
