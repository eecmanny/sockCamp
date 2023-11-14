import React from 'react'
import './javascript.css'
import { Collapse } from 'antd';
const { Panel } = Collapse;





const Javascript = () => {
  return (
    <div className="js">
      <div className="js-container1">
        <h2>JavaScript</h2>


        <Collapse className='jsHeader'>
          <h2>
            JavaScript is NOT Java! A good definition of JavaScript or JS is: "JavaScript allows you to make web pages more interactive by assessing and modifying
            the content and markup used in a web page while it is being viewed in the browser." /</h2>
          <Panel header="What is an does an example of JavaScript look like?" key="1">
            <p className='jsBox'>
                  <pre className='jsText'> 
                 &brace;const name ="John"
                    function greetings(name)&brace;
                      console.log(Hello, $&brace;name&Brace;!);
                  &brace; 
            &brace; &lt;/pre&gt;
            </pre>
           </p> 
        </Panel>
      </Collapse>

      <Collapse>
        <h2>
         JavaScript contains loops and function, methods and switch statements.
         A method is an action that can be performed on an object
         Actions that can be performed on a JavaScript object are called methods.
         A function is a block of code that can be called and executed when needed.

        </h2>
        <Panel header="How do you write a method?" key="1">
          <p className='htmlBox'>
            <pre className='ElementText'>
              function saySomething() &brace;
              alert("Hello World!");
          
            </pre>
          </p>
        </Panel>
      </Collapse>

      <Collapse>
        <h2>

          In JavaScript a switch statement is used to perform different actions based on different conditions. 
          Loops are used to run the same block of code over and over again, as long as a certain condition is true.
          
        </h2>
        <Panel header="What does a loop look like?" key="1">
          <p className='htmlBox'>
            <pre className='Tags'>
          const array = [1, 2, 3];
          for (const i in array) &lbrace;
          console.log(i); &rbrace;

            </pre>
          </p>
        </Panel>
      </Collapse>
    </div>

      </div >
      )
}

export default Javascript






{/* //               JavaScript works with different object types, including strings, numbers, dates, and arrays.
//                 Object types can be used to store different types of data, and they can also be used to perform different actions. 
//                 It also works with different items such as: methods, functions, objects, and regular expressions. It includes if statements, switch statements, loops, and functions.
//                 A method is an action that can be performed on objects. A function is a block of code that can be called and executed when needed. An object is a collection of properties and methods.
//                 It includes if statements, switch statements, loops, and functions. Loops are used to run the same block of code over and over again, as long as a certain condition is true.
//                 A switch statement is used to perform different actions based on different conditions. A function is a block of code that can be called and executed when needed.

 */}



