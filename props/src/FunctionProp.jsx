import React from 'react'

const FunctionProp = (props) => {
    console.log(props)
  return (
    <div>
        <h1>My name is {props.userName} and my age is {props.age}</h1>
    </div>
  )
}

export default FunctionProp