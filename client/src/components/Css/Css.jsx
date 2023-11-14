import React from 'react'
import './css.css'
import { Collapse } from 'antd';
const { Panel } = Collapse;

const CSS = () => {
  return (
    <div className="html">
      <div className="html-container1">
        <h2>HTML</h2>


        <Collapse className='htmlHeader'>
          <h2>
           While HTML is the standard language for creating web pages, CSS, short for Cascading Style Sheets, works to style them.
          By putting all the styling on one page, it creates a clean efficient way to use and update the styling for a web site.
           </h2>
          <Panel header="How do I write CSS" key="1">
            <p className='cssBox'>
              <pre className='cssText'>
            
            .body  &brace;
                "background-color: green;"
                height: 10px;
            
            &brace;
            
          
        </pre> 
            
            </p>
          </Panel>
        </Collapse>

        <Collapse>
          <h2>

            HTML code is written on one page, CSS code is written on another page.  The way they are joined so they work together is with a link tag.
            The CSS or style sheet is referenced in the Head of the HTML page.

          </h2>
          <Panel header="What does the CSS style sheet link look like?" key="1">
            <p className='cssBox'>
              <pre className='cssText'>
                <h2>CSS link to HTML</h2>
                &lt;link rel="stylesheet" href="style.css"/link&gt;
              </pre>
            </p>
          </Panel>
        </Collapse>

        <Collapse>
          <h2>

            CSS styling can be external or internal. The external will show changes that pertain to an entire web site. 
             In some cases just a single HTML page needs to have special styling,when CSS and styling code is written directly in the HTML file,
             it is Internal style sheet.

          </h2>
          <Panel header="Example of internal CSS styling" key="1">
            <p className='CSSlBox'>
              <pre className='Styling'>
            
                &lt;h1 style="color:blue; text-align: center;"&gt;
                &lt;This isThis is a paragraph. &lt;/p&gt;




              </pre>
            </p>
          </Panel>
        </Collapse>

      </div>
    </div>
  )
}

export default CSS







