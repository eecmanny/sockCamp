// import React, { Component } from 'react'
 import {Component} from 'react'
import { Collapse } from 'antd';
import './react.css'
const { Panel } = Collapse;

const React = () => {
  return (
    <div className="react">
      <div className="react-container1">
        <h2>React</h2>

        <Collapse className='reactHeader'>
          <h2>
            React is a javaScript library that work with both the frontend and the backend. It is used to build user interfaces and also the backend of a web site.</h2>
          <Panel header="What is the code to download React?" key="1">
            <p className='reactBox'>
              <pre className='reactText'>
                npm install react --save
                npm install react-dom --save
              </pre>
            </p>
          </Panel>
        </Collapse>
        <Collapse className='reactHeader'>
          <h2>
            The react library is actually a combination of two main packages.  The react package and the react-dom package, which also needs to be imported for this to work. Then it 
            needs to be put in the file that is using it.</h2>
          <Panel header="How do I add the code to my page" key="1">
            <p className='reactBox'>
              <pre className='reactText'>
                var React = require('react');

              </pre>
            </p>
          </Panel>
        </Collapse>
        <Collapse className='reactHeader'>
          <h2>

            React is a component based library.  Components are independent and reusable bits of code.  They serve the same purpose as JavaScript
            functions, but work in isolation and return HTML via a render() function.  </h2>
          <Panel header="What does s compenent written in React?" key="1">
            <p className='reactBox'>
              <pre className='reactText'>
                import React, {Component} from 'react';

                class App extends Component &#123;
                constructor() &#123;
                super();
                this.setState = (&#123;Name:'|'&#125;);
                &#123;render() &#123;
                return(Name)&#125; 
                &#125;

              </pre>
            </p>
          </Panel>
        </Collapse>
 

      </div>
    </div>
  )
}

export default React
