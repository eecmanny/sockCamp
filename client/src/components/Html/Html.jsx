import React from 'react'
import './Html.css'
import { Collapse } from 'antd';
const { Panel } = Collapse;





const Html = () => {
  return (
    <div className="html">
      <div className="html-container1">
        <h2>HTML</h2>


        <Collapse className='htmlHeader'>
          <h2>
            HTML is short for Hyper Text Markup Language. HTML is the standard language for creating web pages, it is a markup language and not a coding language.  It consists
            of a series of elements, and these elements are used to structure the web page. HTML elements are represented by tags. HTML tags label pieces of content such as
            "heading", "paragraph", "table", and so on. A tag is written with an opening &lt;  &gt; and most tags also have a closing tag &lt;/  &gt;.
            Paragraphs are defined with an opening &lt;p&gt; tag, and a closing &lt;/p&gt; tag.</h2>
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

      </div>
      )
}

      export default Html
