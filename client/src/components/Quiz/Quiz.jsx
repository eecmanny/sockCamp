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
  console.log(questionsArray[0].question);
  console.log(questionsArray[0].choices);
  console.log(data);
  // console.logO(answer);
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
    const currentQ = questions[0];
    if (currentQ) {
      return (
        <div className="questionCard">
          <p>
            {currentQ.question}
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
        <h3>

        </h3>
      </section>

      <section className="quiz">
      <p className='quizContainer'>
          {/* {data.questions.map((question, index) => { */}
          <question className="questionCard">
            <p>
              {/* Question 1: What does HTML stand for? */}
              {/* {`Question 1: ${currentQuestion}`} */}
              {(
                <div>
                  <h2>Question:</h2>
                  <h3>{questionsArray[0].question}</h3>
                  <p>

                  </p>
                </div>
              )}
              {/* { (
                  <div>
                    <h2>Answer:</h2>
                    <p></p>
                  </div>
                )} */}
            </p>

          </question>

          {/* {answer.map((answer, index) => { */}
          <div className='answerContainerCard'>
            <answer className="answerPick">
              <p>
                {/* Answer: Hyper Text Markup Language  */}
                {`${questionsArray[0].choices[0]}`}
              </p>
            </answer>
            <answer className="answerPick">
              <p>
                {/* Answer: Hyper Text Markup Language  */}
                {`${questionsArray[0].choices[1]}`}
              </p>
            </answer>
            <answer className="answerPick">
              <p>
                {/* Answer: Hyper Text Markup Language  */}
                {`${questionsArray[0].choices[2]}`}
              </p>
            </answer>
            <answer className="answerPick">
              <p>
                {/* Answer: Hyper Text Markup Language  */}
                {`${questionsArray[0].choices[2]}`}
              </p>
            </answer>

          </div>
          {/* })}; */}

          {/* }
           )} */}



        </p>
        <p className='quizContainer'>
          {/* {data.questions.map((question, index) => { */}
          <question className="questionCard">
            <p>
              {/* Question 1: What does HTML stand for? */}
              {/* {`Question 1: ${currentQuestion}`} */}
              {(
                <div>
                  <h2>Question:</h2>
                  <h3>{questionsArray[2].question}</h3>
                  <p>

                  </p>
                </div>
              )}
              {/* { (
                  <div>
                    <h2>Answer:</h2>
                    <p></p>
                  </div>
                )} */}
            </p>

          </question>

          {/* {answer.map((answer, index) => { */}
          <div className='answerContainerCard'>
            <answer className="answerPick">
              <p>
                {/* Answer: Hyper Text Markup Language  */}
                {`${questionsArray[2].choices[0]}`}
              </p>
            </answer>
            <answer className="answerPick">
              <p>
                {/* Answer: Hyper Text Markup Language  */}
                {`${questionsArray[2].choices[1]}`}
              </p>
            </answer>
            <answer className="answerPick">
              <p>
                {/* Answer: Hyper Text Markup Language  */}
                {`${questionsArray[2].choices[2]}`}
              </p>
            </answer>
            <answer className="answerPick">
              <p>
                {/* Answer: Hyper Text Markup Language  */}
                {`${questionsArray[2].choices[2]}`}
              </p>
            </answer>

          </div>
          {/* })}; */}

          {/* }
           )} */}



        </p>
        <p className='quizContainer'>
          {/* {data.questions.map((question, index) => { */}
          <question className="questionCard">
            <p>
              {/* Question 1: What does HTML stand for? */}
              {/* {`Question 1: ${currentQuestion}`} */}
              {(
                <div>
                  <h2>Question:</h2>
                  <h3>{questionsArray[7].question}</h3>
                  <p>

                  </p>
                </div>
              )}
              {/* { (
                  <div>
                    <h2>Answer:</h2>
                    <p></p>
                  </div>
                )} */}
            </p>

          </question>

          {/* {answer.map((answer, index) => { */}
          <div className='answerContainerCard'>
            <answer className="answerPick">
              <p>
                {/* Answer: Hyper Text Markup Language  */}
                {`${questionsArray[7].choices[0]}`}
              </p>
            </answer>
            <answer className="answerPick">
              <p>
                {/* Answer: Hyper Text Markup Language  */}
                {`${questionsArray[7].choices[1]}`}
              </p>
            </answer>
            <answer className="answerPick">
              <p>
                {/* Answer: Hyper Text Markup Language  */}
                {`${questionsArray[7].choices[2]}`}
              </p>
            </answer>
            <answer className="answerPick">
              <p>
                {/* Answer: Hyper Text Markup Language  */}
                {`${questionsArray[7].choices[2]}`}
              </p>
            </answer>

          </div>
          {/* })}; */}

          {/* }
           )} */}



        </p>
        <p className='quizContainer'>
          {/* {data.questions.map((question, index) => { */}
          <question className="questionCard">
            <p>
              {/* Question 1: What does HTML stand for? */}
              {/* {`Question 1: ${currentQuestion}`} */}
              {(
                <div>
                  <h2>Question:</h2>
                  <h3>{questionsArray[14].question}</h3>
                  <p>

                  </p>
                </div>
              )}
              {/* { (
                  <div>
                    <h2>Answer:</h2>
                    <p></p>
                  </div>
                )} */}
            </p>

          </question>

          {/* {answer.map((answer, index) => { */}
          <div className='answerContainerCard'>
            <answer className="answerPick">
              <p>
                {/* Answer: Hyper Text Markup Language  */}
                {`${questionsArray[14].choices[0]}`}
              </p>
            </answer>
            <answer className="answerPick">
              <p>
                {/* Answer: Hyper Text Markup Language  */}
                {`${questionsArray[14].choices[1]}`}
              </p>
            </answer>
            <answer className="answerPick">
              <p>
                {/* Answer: Hyper Text Markup Language  */}
                {`${questionsArray[14].choices[2]}`}
              </p>
            </answer>
            <answer className="answerPick">
              <p>
                {/* Answer: Hyper Text Markup Language  */}
                {`${questionsArray[14].choices[2]}`}
              </p>
            </answer>

          </div>
          {/* })}; */}

          {/* }
           )} */}



        </p>
        <p className='quizContainer'>
          {/* {data.questions.map((question, index) => { */}
          <question className="questionCard">
            <p>
              {/* Question 1: What does HTML stand for? */}
              {/* {`Question 1: ${currentQuestion}`} */}
              {(
                <div>
                  <h2>Question:</h2>
                  <h3>{questionsArray[11].question}</h3>
                  <p>

                  </p>
                </div>
              )}
              {/* { (
                  <div>
                    <h2>Answer:</h2>
                    <p></p>
                  </div>
                )} */}
            </p>

          </question>

          {/* {answer.map((answer, index) => { */}
          <div className='answerContainerCard'>
            <answer className="answerPick">
              <p>
                {/* Answer: Hyper Text Markup Language  */}
                {`${questionsArray[11].choices[0]}`}
              </p>
            </answer>
            <answer className="answerPick">
              <p>
                {/* Answer: Hyper Text Markup Language  */}
                {`${questionsArray[11].choices[1]}`}
              </p>
            </answer>
            <answer className="answerPick">
              <p>
                {/* Answer: Hyper Text Markup Language  */}
                {`${questionsArray[11].choices[2]}`}
              </p>
            </answer>
            <answer className="answerPick">
              <p>
                {/* Answer: Hyper Text Markup Language  */}
                {`${questionsArray[11].choices[2]}`}
              </p>
            </answer>

          </div>
          {/* })}; */}

          {/* }
           )} */}



        </p>

        <div className='submitbtn'>

          <button className="button1">Submit</button>
        </div>
        
      </section>



    </main>
  )
}

export default Quiz