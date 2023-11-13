import React from 'react'
import './Css.css'
import { Collapse } from 'antd';
const { Panel } = Collapse;

const CSS = () => {
  return (
    <div className="html">
      <div className="html-container1">
        <h2>HTML</h2>


        <Collapse className='htmlHeader'>
          <h2>
            CSS is short for Cascading Style Sheets. While html is the standard language for creating web pages, and it is used to
            describe the structure of the web page -- CSS was created to remove the styling format from the html page.  CSS function is
            to create the styles used in the web site and to make it look good. </h2>
          <Panel header="How do I write CSS" key="1">
            <p className='cssBox'>
              {/* <pre className='cssText'>
            
            .body  {
                "background-color: green;"
                height: 10px;
            }
            
            h1 {
                color purple;
            }

            p {
                border 2px solid red;
                margin: 50px;
            }
        </pre> */}
            
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

            When using an external style sheet as shown above changes can pertain to an entire web site.  In some cases just a single HTML page needs to have special styling, thus
            CSS and styling code is written directly in the HTML file, this is known as an Internal style sheet.

          </h2>
          <Panel header="Example of internal CSS styling" key="1">
            <p className='CSSlBox'>
              <pre className='Styling'>
                <h2>Internal styling</h2>
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







