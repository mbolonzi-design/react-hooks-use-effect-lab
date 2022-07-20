import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code

  useEffect(() => {
    const newTimer = setTimeout(() => {
      decreaseTimer()
    }, 1000)

    return function cleanup(){
      clearTimeout(newTimer)
    }
  })

  function decreaseTimer(){
    if(timeRemaining >= 1){
      setTimeRemaining((timeRemaining) => timeRemaining - 1)
      console.log(timeRemaining)
    }else if(timeRemaining === 0){
      setTimeRemaining(10)
      onAnswered(false)
    }
  }

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
