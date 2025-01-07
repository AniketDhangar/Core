import React from 'react'

function LiftChild(props) {
  return (
    <div>
      <h2>child</h2>
      <input type="text"
       onChange={(e) => { props.setName(e.target.value) }} 
       />
       <p>card name value:{props.name}</p>
    </div>
  )
}

export default LiftChild