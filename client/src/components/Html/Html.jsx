import React from 'react'
import './Html.css'

const Html = () => {
  return (
    <div className="html">
      <div className="html-container1">
        <h2>HTML</h2>
        {/* <p>HTML is short for Hyper Text Markup Language. HTML is the standard language for creating web pages, it is a markup language and not a coding language.. 
          It consists of a series of elements, and these elements are used to structure the web page.
          HTML elements are represented by tags. HTML tags label pieces of content such as "heading", "paragraph", "table", and so on.
          A tag is written with an opening <  > and most tags also have a closing tag </  >. Paragraphs are defined with an opening  <p> tag, and a closing </p> tag.
          Notice that the ending tag has an extra forward slash in it. A link is defined with an opening <a> tag, followed by the link text, and the closing </a> tag.
          All HTML documents must start with a document type declaration: <!DOCTYPE html>.  This declaration reprents the document type, and helps browsers to display web pages correctly.
          Inside the document are many different elements.  Two important elements are the <head></head> and <body></body> elements.  The <head></head> element contains meta information about the document. Information 
          placed in the <head></head> is not displayed. The <body></body> element contains the actual content of the document. Inside the <body></body> element are many tags and the information that a user
          sees when they open a web page. 
        

        </p> */}
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