import React from "react";


function Greet(props) {
  return (
    <div>
        <h1>Hello Harsh from Functional Component {props.name}</h1>
        {props.children}
    </div>
  )
}

export default Greet
