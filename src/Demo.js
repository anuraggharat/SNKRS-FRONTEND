// import React, { Component } from 'react'

// export default class Demo extends Component {
  
// // In Class based components the state is initialized in the constructor.  
// constructor(props) {
//     super(props);
//     //this.state is a state object
//     this.state = {
//       name: "Anurag",
//       country: "India",
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hi, I am {this.state.name}.</h1>
//         <p>I am from {this.state.country}</p>
//         <button onClick={()=>(this.setState({name:"Anurag Gharat",country:"India"}))} >Get Full Name</button>
//       </div>
//     );
//   }
// }


import React, { useState } from 'react'

export default function Demo() {
  
  const[state,setState]=useState({
    name:"Anurag",
    country:"India"
  })
  
    return (
      <div>
        <h1>Hi, I am {state.name}.</h1>
        <p>I am from {state.country}</p>
        <button
          onClick={() =>
            setState({ name: "Anurag Gharat", country: "India" })
          }
        >
          Get Full Name
        </button>
      </div>
    );
}
