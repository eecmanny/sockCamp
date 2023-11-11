import React from 'react'
import './React.css'

const react = () => {
  return (
    <div className="react">
      <div className="react-container1">
        <h2>React</h2>
        <p>React is.."React is a JavaScript library for building user interfaces."
          It is maintained by Facebook and a community of individual developers and companies.
          React is both a frontend and backend library.  It is used to build user interfaces and it is used to build the backend of a web site.
          React is a component based library.  Components are independent and reusable bits of code.  They serve the same purpose as JavaScript 
          functions, but work in isolation and return HTML via a render() function. 
        
          
          
          
          
          .</p>
      </div>
      <div className="react-container2">
        <div className="question">
          <p>
            {/* {`Question 1: ${}`} */}
          </p>
        </div>
        <div className="answer">
          <p>
            Answer: Hyper Text Markup Language
          </p>
        </div>
        <div className="question">
          <p>
          {/* {`Question 2: ${}`} */}
          </p>
        </div>
        <div className="answer">
          <p>
            Answer: Hyper Text Markup Language
          </p>
        </div>
        <div className="question">
          <p>
          {/* {`Question 3: ${}`} */}
          </p>
        </div>
        <div className="answer">
          <p>
            Answer: Hyper Text Markup Language
          </p>
        </div>
      </div>
    </div>
  )
}


export default react