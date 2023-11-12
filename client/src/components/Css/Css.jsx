import React from 'react'
import './Css.css'

const Css = () => {
  return (
      <div className="css">
        <div className="css-container1">
          <h2>CSS</h2>
          <p>CSS is short for Cascading Style Sheets. While html is the standard language for creating web pages, and it is used to 
            describe the structure of the web page -- CSS was created to remove the styling format from the html page.  CSS function is
             to create the styles used in the web site and to make it look good. 
            CSS is responsible for font color, font size, background color, and the layout of the web page.
            CSS uses rules to style the web page.  A CSS rule-set consists of a selector and a declaration block. The selector points to the HTML element you want to style.
            An example of this would look like;  .body ( background-color: lightgreen;)  or .p color: green; font-size: 20px;.
            
             This way all the "p" tags in your web site will have a green 
            font color and a font size of 20px. One of the big advantages of this is: if you want to change something throughout your site, you only have to change it in one place.
            
            
            
            
            </p>
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