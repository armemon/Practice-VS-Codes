import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Header, Footer } from './Header'
import BasicTextFields from './Rating'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//     </div>
//   );
// }

class App extends React.Component {  //merge this class and React.Component
  constructor() {
    super()
    this.state = {
      todos: ["AR", "Memon", "Muhammad"],
      value: ''
    }
  }


  render() {
      let firstName = "AR"
  let lastName = "Memon"
  let arr = [1, 2, 3, 4, 5]

//destructuring
let { todos, value } = this.state
  return (
    <div className="App">
      <Header />
      <div>
        <input type="text" placeholder="ENTER VALUE" name="" id="" />
        <button>Add item</button>
        <ul>
          {todos.map((v, i) => {
            return <li key={i}>{v}</li>
          })}
        </ul>
      </div>
      {/* <h1 style={{ color: "blue" }, { backgroundColor: "red" }}>Hello! {firstName} {lastName}</h1>
        <h1 style={{ color: "red" }}>{`Hello! ${firstName} ${lastName}`}</h1>
        <BasicTextFields />
        <h1 style={{ fontSize: 45 }}>{arr}</h1>
        <Footer /> */}

    </div>
  )
}
}
// import { Component } from 'react';
// class Arr extends Component{  //merge this class and React.Component
// class Arr extends React.Component {
//   render() {
//     let todos = [{ text: "ghous" }, { text: "ahmed" }]
//     return (
//       <div className="App, ul">
//         <ul>
//           {/* //self closing tag is imp */}
//           <img src="https://images.unsplash.com/photo-1550355291-bbee04a92027?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
//             alt="car" height="200px" />
//           {todos.map((item, index) => {
//             return <li style={{ fontSize: "45px" }} key={index}>{item.text}</li>
//           }
//           )}
//           {/* //using index */}
//           {/* <li>{todos[0].text}</li>
//             <li>{todos[1].text}</li> */}
//         </ul>
//       </div>
//     )
//   }
// }



export default App;
