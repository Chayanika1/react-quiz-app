//key has an another purpose.it can destroyed the previous component instance and create new one, event if it is not in the same list
import React, { useCallback, useState } from 'react';
import QUESTIONS from '../Questions';
import Question from './Question';
import Summary from './Summary';
const Quiz = () => {

    // const[activeQuestionIndex,setActiveQuestionIndex]=useState(0)//here 0  displayes the index of the quiz
  const[userAnswers,setUserAnswers]=useState([])//to store the answer
  const activeQuestionsIndex = userAnswers.length;

  const quizeComplete = activeQuestionsIndex===QUESTIONS.length;

  const handleSelectAnswers=useCallback((selectedAnswer)=>{
    // setAnswerState('answered')//when user did selected answer
    setUserAnswers((prev)=>{
        return[...prev,selectedAnswer]
    });
    
    
      
  },[])
  const handleSkipAnswer=useCallback(()=>handleSelectAnswers(null),[handleSelectAnswers])//useCallBack hook also needs dependency
  // stuffledAnswers.current = [...QUESTIONS[activeQuestionsIndex].text]
  // stuffledAnswers.current.sort(()=>
  //   Math.random()-0.5);//here random will give us value between 0 and 1. and if we deduct 0.5 from that, we will end up with negative value
  //   //sort not returned a new array.it will added array
  

  if(quizeComplete){
    return <Summary userAnswer={userAnswers}/>

    
  }
  
  
    return (
       <div id='quiz'>
         <div id='question'>
         {/* //we use null. so that we can entry new value . and is also tells no answers is choosen yet*/}
           <Question key={activeQuestionsIndex} index={activeQuestionsIndex}onSelectAnswers={handleSelectAnswers} onSkipAnswer={handleSkipAnswer} />

        </div>
       </div>
);
};

export default Quiz;
