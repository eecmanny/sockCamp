import React from 'react'
import './Html.css'

const Html = () => {
  return (
    <div className="html">
      <div className="html-container1">
        <h2>HTML</h2>
        <p>HTML is ....</p>
      </div>
      <div className="html-container2">
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

export default Html