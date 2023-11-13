import React from 'react'
import './Javascript.css'
import { Collapse } from 'antd';
const { Panel } = Collapse;





const Html = () => {
  return (
    <div className="js">
      <div className="js-container1">
        <h2>JavaScript</h2>


        <Collapse className='jsHeader'>
          <h2>
            JavaScript is NOT Java! Instead, a good definition of JavaScript or JS is: "JavaScript allows you to make web pages more interactive by assessing and modifying
            the content and markup used in a web page while it is being viewed in the browser." /</h2>
          <Panel header="What is an does an example of JavaScript look like?" key="1">
            {/* <p className='jsBox'>
                  <pre className='jsText'> 
                  const name ="John"
                    function greetings(name){
                      console.log(Hello, ${name)!);
                  } */}
            {/* </pre> */}
          {/* </p> */}
        </Panel>
      </Collapse>

      <Collapse>
        <h2>

          HTML consists of a series of elements, and these elements are used to structure the web page.
          HTML elements are represented by tags. HTML tags label pieces of content such as "heading", "paragraph", "table", and so on.
          A tag is written with an opening &lt;  &gt; and most tags also have a closing tag &lt;/  &gt;. Paragraphs are defined with an opening &lt;p&gt; tag, and a closing &lt;/p&gt; tag.
          Notice that the ending tag has an extra forward slash in it. A link is defined with an opening &lt;a&gt; tag, followed by the link text, and the closing &lt;/a&gt; tag.

        </h2>
        <Panel header="How to write an Element" key="1">
          <p className='htmlBox'>
            <pre className='ElementText'>
              <h2>Divider Element</h2>
              &lt;div&gt;
              <h2>Main Element</h2>
              &lt;main&gt;
            </pre>
          </p>
        </Panel>
      </Collapse>

      <Collapse>
        <h2>

          All HTML documents must start with a document type declaration: !DOCTYPE html.  This declaration reprents the document type, and helps browsers to display web pages correctly.
          Inside the document are many different elements.  Two important elements are the <head></head> and <body></body> elements.  The <head></head> element contains meta information about the document. Information
          placed in the &lt;head&gt; is not displayed on the web page. The &lt;body&gr;&lt;/body&gt; element contains the actual content of the document. Inside the &lt;body&gr;&lt;/body&gt;
          element are many tags. These tags are used to contain all the information that the user sees when they open a web page.

        </h2>
        <Panel header="How to write an HTML tag" key="1">
          <p className='htmlBox'>
            <pre className='Tags'>
              <h2>Tags</h2>
              &lt;head&gt; &ktl.head&gt;
              &lt;body&gt; &lt;/body&gt;
              &lt;h1&gt;Large Heading TAg &lt;/h1&gt;
              &lt;h2&gt;Heading Tag&lt;/h2&gt;
              &lt;u&gt;Underline Tag&lt;/u&gt;

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



