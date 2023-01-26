import React from "react";
import('./style.css')
class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      value: "",
    };
  }
  add_todo = () => {
    this.setState({
      todos: [...this.state.todos,this.state.value],
      value : "",
    });
  };
  delete_todo=(index)=>{
  this.state.todos.splice(index,1)
  this.setState({
    todos: this.state.todos
  })
  }

  deleteAll=()=>[
    this.state.todos = "",
    this.setState({
        todos: [],
    })
  ]

  render() {
    let { todos, value } = this.state;
    return (
      <div className="main-div">
        <input
          value={value}
          type="text"
          placeholder="Enter list"
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <button className="addbtn" onClick={this.add_todo}>AddItem</button>
        <ul>
          {todos.map((v, i) => {
            return <li key={i}>{v} 
            <button className="btn" onClick={() => this.delete_todo(i)}>
              <i className="far fa-sharp fa-solid fa-trash"></i>
              </button>
            </li>;
            
          })}
          <button className="delbtn" onClick={this.deleteAll}>Delete All</button>
        </ul>
      </div>
    );
  }
}

export default Todos;
