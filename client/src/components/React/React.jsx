import React from 'react'
import './React.css'

const react = () => {
  return (
    <div className="react">
      <div className="react-container1">
    
      <Collapse className='reactHeader'>
          <h2>
React is both a frontend and a backend library. It is used to build user interfaces and also the backend of a web site..</h2>
          <Panel header="What does starter code on an HTML page look like?" key="1">
            <p className='htmlBox'>
              <pre className='htmlText'>
                &lt;!DOCTYPE html&gt;
                &lt;html lang="en"&gt;
                &lt;head&gt;
                &lt;meta charset="UTF-8"&gt;
                &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                &lt;title&gt;HTML Code as Text&lt;/title&gt;
                &lt;/head&gt;
                &lt;body&gt;
                &lt;h1&gt;This is HTML code as text&lt;/h1&gt;
                &lt;/body&gt;
                &lt;/html&gt;
              </pre>
            </p>
          </Panel>
        </Collapse>

        <Collapse className='reactHeader'>
          <h2>

            React is a component based library.  Components are independent and reusable bits of code.  They serve the same purpose as JavaScript
            functions, but work in isolation and return HTML via a render() function.  </h2>
          <Panel header="What does starter code on an HTML page look like?" key="1">
            <p className='htmlBox'>
              <pre className='htmlText'>
                &lt;!DOCTYPE html&gt;
                &lt;html lang="en"&gt;
                &lt;head&gt;
                &lt;meta charset="UTF-8"&gt;
                &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                &lt;title&gt;HTML Code as Text&lt;/title&gt;
                &lt;/head&gt;
                &lt;body&gt;
                &lt;h1&gt;This is HTML code as text&lt;/h1&gt;
                &lt;/body&gt;
                &lt;/html&gt;
              </pre>
            </p>
          </Panel>
        </Collapse>

        <Collapse className='reactHeader'>
          <h2>
            HTML is short for Hyper Text Markup Language. HTML pages have a specific format.  They start with a document type declaration: !DOCTYPE html.
            This declaration reprents the document type, and helps browsers to display web pages correctly.</h2>
          <Panel header="What does starter code on an HTML page look like?" key="1">
            <p className='htmlBox'>
              <pre className='htmlText'>
                &lt;!DOCTYPE html&gt;
                &lt;html lang="en"&gt;
                &lt;head&gt;
                &lt;meta charset="UTF-8"&gt;
                &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                &lt;title&gt;HTML Code as Text&lt;/title&gt;
                &lt;/head&gt;
                &lt;body&gt;
                &lt;h1&gt;This is HTML code as text&lt;/h1&gt;
                &lt;/body&gt;
                &lt;/html&gt;
              </pre>
            </p>
          </Panel>
        </Collapse>

       

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