import React from 'react'
import './javascript.css'
import { Collapse } from 'antd';
const { Panel } = Collapse;

const Javascript = () => {
  return (
    <div className="javascript">
      <div className="javascript-container1">
        <h2>JavaScript</h2>


        <Collapse className='javascriptHeader'>
          <h2>
            JavaScript is NOT Java! A good definition of JavaScript or JS is: "JavaScript allows you to make web pages more interactive by assessing and modifying
            the content and markup used in a web page while it is being viewed in the browser." </h2>
          <Panel header="What is an does an example of JavaScript look like?" key="1">
            <p className='javascriptBox'>
                  <pre className='javascriptText'> 
                 &#123;const name ="John"
                    function greetings(name)&#125;#
                      console.log(Hello, $&#123;name&#125;!); 
            &#125; &lt;/pre&gt;
            </pre>
           </p> 
        </Panel>
      </Collapse>

      <Collapse  className='javascriptHeader'>
        <h2>
         JavaScript contains loops and function, methods and switch statements.
         A method is an action that can be performed on an object
         Actions that can be performed on a JavaScript object are called methods.
         A function is a block of code that can be called and executed when needed.

        </h2>
        <Panel header="How do you write a method?" key="1">
          <p className='javascriptBox'>
            <pre className='ElementText'>
              function saySomething()&#123;
              alert("Hello World!");
            &#125;
            </pre>
          </p>
        </Panel>
      </Collapse>

      <Collapse className='javascriptHeader'>
        <h2>

          In JavaScript a switch statement is used to perform different actions based on different conditions. 
          Loops are used to run the same block of code over and over again, as long as a certain condition is true.
          
        </h2>
        <Panel header="What does a loop look like?" key="1">
          <p className='javascriptBox'>
            <pre className='Tags'>
          const array = [1, 2, 3];
          for (const i in array) &#123;
          console.log(i); &#125;;

            </pre>
          </p>
        </Panel>
      </Collapse>
    </div>

      </div >
      )
}

export default Javascript



