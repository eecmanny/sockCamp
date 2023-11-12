import React from 'react'
import './Html.css'
import { Collapse } from 'antd';
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;




const Html = () => {
  return (
    <div className="html">
      <div className="html-container1">
        <h2>HTML</h2>
         {/* <p>HTML is short for Hyper Text Markup Language. HTML is the standard language for creating web pages, it is a markup language and not a coding language.. 

          All HTML documents must start with a document type declaration: !DOCTYPE html.  This declaration reprents the document type, and helps browsers to display web pages correctly.
          Inside the document are many different elements.  Two important elements are the <head></head> and <body></body> elements.  The <head></head> element contains meta information about the document. Information 
          placed in the <head></head> is not displayed. The <body></body> element contains the actual content of the document. Inside the <body></body> element are many tags and the information that a user
          sees when they open a web page. 
        

        </p>  */}

<Collapse  className='htmlHeader'>
<h2>
  HTML is short for Hyper Text Markup Language. HTML is the standard language for creating web pages, it is a markup language and not a coding language.
</h2>
      <Panel header="How do you start an HTML page" key="1">
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

    <Collapse>
    <h2>
      
    It consists of a series of elements, and these elements are used to structure the web page.
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
      </div>
    </div>
  )
}

export default Html

// <div className="html-container2">
// <div className="question">
//   <p>
//     {/* {`Question 1: ${}`} */}
//   </p>
// </div>
// <div className="answer">
//   <p>
//     Answer: Hyper Text Markup Language
//   </p>
// </div>
// <div className="question">
//   <p>
//   {/* {`Question 2: ${}`} */}
//   </p>
// </div>
// <div className="answer">
//   <p>
//     Answer: Hyper Text Markup Language
//   </p>
// </div>
// <div className="question">
//   <p>
//   {/* {`Question 3: ${}`} */}
//   </p>
// </div>
// <div className="answer">
//   <p>
//     Answer: Hyper Text Markup Language
//   </p>
// </div>
// </div>