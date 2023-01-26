import React from "react";
import './style.css'

class Mainapp extends React.Component {
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

  delete_todo= (index)=>{
  this.state.todos.splice(index,1)
  this.setState({
    todos:this.state.todos
  })
  }
  edit_todo= (index)=>{
  let updated_val = prompt("enter Your Updated Value");
  this.state.todos[index] =updated_val;
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
      <>
        <div className="main-div">

        <h3>React Todo List</h3>

          <input
            value={value} required
            type="text"
            onChange={(e) => this.setState({ value: e.target.value })}
            placeholder="Enter your item"
          />
          <button className="addbtn" onClick={this.add_todo}>Add Item</button>
          <ul>
            {todos.map((curelem, index) => {
              return <li key={index}>{curelem}
              <button className="btn" onClick={() => this.delete_todo(index)}>
              <i className="far fa-sharp fa-solid fa-trash"></i>
              </button>
              <button className="btn" onClick={() => this.edit_todo(index)}><i className="fa-regular fa-pen-to-square"></i></button>
              </li>;
            })}

            <button className="delbtn" onClick={this.deleteAll}>Delete All</button>
          </ul>
        </div>
        
      </>
    );
  }
}
export default Mainapp;
