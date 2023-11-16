import React from 'react'
import './html.css'
import { Collapse } from 'antd';
const { Panel } = Collapse;

const Html = () => {
  return (
    <div className="html">
      <div className="html-container1">
        <h2>HTML</h2>


        <Collapse className='htmlHeader'>
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

        <Collapse className='htmlHeader'>
          <h2>
            HTML elements are represented by tags such as: "heading", "paragraph", "table", and so on.
            A tag is written with an opening &lt; &gt; and most tags also have a closing tag &lt;/&gt;.
            Paragraphs are defined with an opening &lt;p&gt; tag, and a closing &lt;/p&gt; tag.</h2>

          <Panel header="What does a paragraph tag look like?" key="1">
            <p className='htmlBox'>
              <pre className='htmlText'>
                &lt;p&gt;
                &lt;/p&gt;
              </pre>
            </p>
          </Panel>
        </Collapse>


       

        <Collapse  className='htmlHeader'>
          <h2>
          HTML is a markup language and not a coding language. IT uses elements to structure the web page.
          Two important and necessary elements are the <head></head> and <body></body> elements.  The <head></head> element contains meta information about the document. Information
            placed in the &lt;head&gt; is not displayed on the web page. The &lt;body&gr;&lt;/body&gt; element contains the actual content of the document. 

          </h2>
          <Panel className='Panel' header="Take a look at a head and body tag" key="1">
            <p className='htmlBox'>
              <pre className='Tags'>
                <h2>Tags</h2>
                &lt;head&gt; &ktl.head&gt;
                &lt;body&gt; &lt;/body&gt;
        

              </pre>
            </p>
          </Panel>
        </Collapse>
        
      </div>

    </div>
  )
}

export default Html
