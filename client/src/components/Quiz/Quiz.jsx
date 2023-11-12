import React from 'react'
import './quiz.css'

const Quiz = () => {
  return (
    <div className="combo">
      <div className="combo-container1">
        <h2>Combo</h2>
        <p>The Ultimate Test</p>
      </div>
      <div className="combo-container2">
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

export default Quiz