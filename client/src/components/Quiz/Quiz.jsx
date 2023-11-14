import React from 'react'
import './quiz.css'

const Quiz = () => {
  return (


    <main className='form'>

<section>
      <h2>Sock Camp - Quiz</h2>
</section>

<section className="quiz">
<p className='quizContainer'>
        <question className="questionCard">
          <p>
                      Question 1: What does HTML stand for?
          {/* Question 1: ${question} */}

          </p>

        </question>

        <div className='answerContainerCard'>
          <answer className="answerPick">
            <p>
            Answer: Hyper Text Markup Language {/* {`answer 1: ${}`} */}
            </p>
          </answer>
          <answer className="answerPick">
            <p>
              Answer: Hyper Text Markup Language {/* {`answer 1: ${}`} */}
            </p>
          </answer>
          <answer className="answerPick">
            <p>
            Answer: Hyper Text Markup Language {/* {`answer 2: ${}`} */}
            </p>
          </answer>
          <answer className="answerPick">
            <p>
              Answer: Hyper Text Markup Language {/* {`answer 1: ${}`} */}
            </p>
          </answer>
          
        </div>

      </p>

      <p className='quizContainer'>
        <question className="questionCard">
          <p>
                      Question 1: What does HTML stand for?
          {/* Question 1: ${question} */}

          </p>

        </question>

        <div className='answerContainerCard'>
          <answer className="answerPick">
            <p>
            Answer: Hyper Text Markup Language {/* {`answer 1: ${}`} */}
            </p>
          </answer>
          <answer className="answerPick">
            <p>
              Answer: Hyper Text Markup Language {/* {`answer 1: ${}`} */}
            </p>
          </answer>
          <answer className="answerPick">
            <p>
            Answer: Hyper Text Markup Language {/* {`answer 2: ${}`} */}
            </p>
          </answer>
          <answer className="answerPick">
            <p>
              Answer: Hyper Text Markup Language {/* {`answer 1: ${}`} */}
            </p>
          </answer>
          
        </div>

      </p>
      <div className='submitbtn'>

      <button className="button1">Submit</button>
      </div>
</section>

    </main>
  )
}

export default Quiz