import React,{Component} from 'react'



class App extends Component{
  // constructor(){
  //   super()
  //   this.state={
  //     name: "Abdul Rehman",
  //     email: 'a.rehman78766@gmail.com',
  //     value: "",
  //   }

  // }
  // get_Name=()=>{
  //   console.log(this.state.name);
  // }
  // setName = () =>{
  //  this.setState({
  //   name: this.state.value,
  //  })
  // }
  // hangleChange(e){
  // this.setState({
  //   [e.target.name] : e.target.value,
  // })
  // }
  render(){
    return(
      <>
          <h2>Hello World</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae alias ipsa doloribus laborum obcaecati mollitia aspernatur amet blanditiis maxime at, quibusdam fugiat est debitis nihil dolorum recusandae rem quisquam doloremque.</p>

//       <h2>My Name is: {this.state.name}</h2>
//       <h3>My Email is: {this.state.email}</h3>
//       <input type="text" name='name' placeholder='Enter Your Name' onChange={(e)=> this.hangleChange(e)} />
//       <input type="text" name='email' placeholder='Enter Your email' onChange={(e)=> this.hangleChange(e)} />

//       {/*  <input type="text" placeholder='Enter Your Name' onChange={(e)=>this.setState({name: e.target.value})}/>
//       <input type="text" placeholder='Enter Your Name' onChange={(e)=>this.setState({value: e.target.value})}/>*/}

//       <button onClick={this.setName}>SetName</button>
// <button onClick={this.get_Name}>GetName</button>

</>
    )
  }
}

export default App
