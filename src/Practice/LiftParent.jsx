import React, { useState } from 'react'
import LiftChild from './LiftChild';

function LiftParent() {
const [name,setName] = useState("");


  return (
    <div>
      <h2>parent</h2>
      <p>im inside parent:-{name}</p>
      <LiftChild name={name} setName={setName} />
  
    </div>
  )
}

export default LiftParent