import React from 'react'
import './home.css'
import coder from '/coderhome2.jpg'

const Home = () => {

  return (
    <div className="home">
      <div className="home-container1">
        <h2>Welcome.</h2>
        <p>This project is designed to give an inside view of what coding is all about. <br/> Start at the beginning with HTML and learn it all or you may choose any other<br/>topic that interests you.
        <br/>Click any button above to begin.
        </p>
        <p>Happy coding.</p>
      </div>
      <div>
        <img src={coder} alt={"man coding"}/> 
      </div>
    </div>
  )
}


export default Home