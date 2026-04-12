import React from 'react'

import templateB from "../images/templateB.png";

const Templates = () => {
  return (
    <div>
      <div className='template-page'>
        <h1>Welcome to DevelopHers!</h1>
      <p>To get started, choose a template</p>
      <div className='template-picker'>
        <p><a href=""><img src=""  alt='Preview of Template A'/></a></p>
        <p><a href=""><img src={templateB}  alt='Preview of Template B'/></a></p>
      </div>
    </div>
    </div>
  )
}

export default Templates

