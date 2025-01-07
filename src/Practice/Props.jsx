import React from 'react'

const Props = (props) => {
  return (
    <div>{props.children}
    {props.component}
    </div>
  )
}

export default Props