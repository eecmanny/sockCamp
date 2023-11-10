import React from 'react'
import './Css.css'

const Css = () => {
  return (
      <div className="css">
        <div className="css-container1">
          <h2>CSS</h2>
          <p>CSS is ....</p>
        </div>
        <div className="css-container2">
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

export default Css