import { useQuery } from '@apollo/client'
import React, { useState, useEffect } from 'react'
import './quiz.css'
import { GET_QUESTIONS } from '../../utils/query'


const Quiz = () => {

  const { loading, data } = useQuery(GET_QUESTIONS);
  const [questions, setQuestions] = useState([]);
  let questionsArray = data?.questions || [];

  if (loading) return <p>Loading...</p>;

  // query with graphQL, front end and back end and have a resolver 
  // useQuery hook

  console.log(data)

  // useEffect(() => {
  //   const getQuestions = async (questionsArray) => {
  //     try {
  //       const res = await fetch(GET_QUESTIONS)
  //       const questionsArray = await res.json()
  //       setQuestions(questionsArray)
  //     } catch (err) {
  //       console.error(err)
  //     }
  //   }
  //   getQuestions()

  // }, []);

  // const nextQuestion = () => (containerIndex) => {
  //   setCurrentQuestionsIndex(() => {
  //     const nextIndex = currentQuestionsIndex + 1;
  //     }
  //   });
  // };

  const renderQuestion = () => {
    const currentQ = questions[currentQuestionsIndex];
    if (currentQ) {
      return (
        <div className="questionCard">
          <p>
            {currentQ.questions}
          </p>
        </div>
      );
    }
  };

  // const renderAnswer = () => {
  //   const currentA = answer[currentQuestionsIndex];
  //   if (currentA) {
  //     return (
  //       <div className="answerPick">
  //         <p>
  //           {currentA.answer}
  //         </p>
  //       </div>
  //     );
  //   }
  // }

  return (


    <main className='form'>

      <section>
        <h2>Sock Camp - Quiz</h2>
      </section>

      <section className="quiz">
        <p className='quizContainer'>
          {questions.map((question, index) => {
            <question className="questionCard">
              <p>
                {/* Question 1: What does HTML stand for? */}
                {/* {`Question 1: ${currentQuestion}`} */}
                {currentQuestion && (
                  <div>
                    <h2>Question:</h2>
                    <p>{currentQuestion}</p>
                  </div>
                )}
                {currentAnswer && (
                  <div>
                    <h2>Answer:</h2>
                    <p>{currentAnswer}</p>
                  </div>
                )}
              </p>

            </question>
          })}

          {answer.map((answer, index) => {
            <div className='answerContainerCard'>
              <answer className="answerPick">
                <p>
                  {/* Answer: Hyper Text Markup Language  */}
                  {`Answer 1: ${answer}`}
                </p>
              </answer>
              <answer className="answerPick">
                <p>
                  {/* Answer: Hyper Text Markup Language  */}
                  {`Answer 2: ${answer}`}
                </p>
              </answer>
              <answer className="answerPick">
                <p>
                  {/* Answer: Hyper Text Markup Language  */}
                  {`Answer 3: ${answer}`}
                </p>
              </answer>
              <answer className="answerPick">
                <p>
                  {/* Answer: Hyper Text Markup Language  */}
                  {`Answer 4: ${answer}`}
                </p>
              </answer>

            </div>
          })};

        </p>

        <p className='quizContainer'>
          {questions.map((question, index) => {
            <question className="questionCard">
              <p>
                {/* Question 1: What does HTML stand for? */}
                {`Question 2: ${question}`}

              </p>

            </question>
          })};

          {answer.map((answer, index) => {
            <div className='answerContainerCard'>
              <answer className="answerPick">
                <p>
                  {/* Answer: Hyper Text Markup Language */}
                  {`Answer 1: ${answer}`}
                </p>
              </answer>
              <answer className="answerPick">
                <p>
                  {/* Answer: Hyper Text Markup Language */}
                  {`Answer 2: ${answer}`}
                </p>
              </answer>
              <answer className="answerPick">
                <p>
                  {/* Answer: Hyper Text Markup Language  */}
                  {`Answer 3: ${answer}`}
                </p>
              </answer>
              <answer className="answerPick">
                <p>
                  {/* Answer: Hyper Text Markup Language  */}
                  {`Answer 4: ${answer}`}
                </p>
              </answer>
            </div>
          })};

        </p>
        <div className='submitbtn'>

          <button className="button1">Submit</button>
        </div>
      </section>

    </main>
  )
}

export default Quiz