import React from 'react'

function Hello() {
//   return (
//     <div>
//       <h1>Hello Harsh</h1>
//     </div>
//   )
    return React.createElement('div',null,React.createElement('h1',null,'Hello Harsh'));
}

export default Hello


// Diffrance between jsx and simple code.