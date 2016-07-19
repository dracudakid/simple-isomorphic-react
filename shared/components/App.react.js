import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreator from '../actions/actionCreator';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Simple Isomorphic React App</h1>
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="todos">Todos</Link> </li>
        </ul>
       { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreator, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);