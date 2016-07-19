import React from 'react';

export default class Todos extends React.Component {

  constructor(props) {
    super(props);
  }

  handleAddTodo(){
    let text = this.refs.todo.value;
    this.props.addTodo(text);
  }

  render() {
    return (
      <div>
        <h3>TODOS</h3>
        <pre>{JSON.stringify(this.props.todos, null, 2)}</pre>
        <input type="text" ref="todo" placeholder="Type something..."/>
        <button onClick={this.handleAddTodo.bind(this)}>Add todo</button>
      </div>
    );
  }
}
