import React, { useState } from 'react';
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';
import QUESTIONS from'../Questions';


const Question = ({onSelectAnswers,onSkipAnswer,index}) => {
   const[answer,setAnswer]= useState({
        selectedAnswers:'',
        isCorrect:null
    });
    //if we already press the correct answer
    let timer = 10000;
    if(answer.selectedAnswers){
        timer=1000;
    }
    if(answer.isCorrect !==null){
        timer=2000;

    }
    function handleSelectAnswer(answer){
        setAnswer({
            selectedAnswers:answer,
            isCorrect:null//we use null. cause we don't know yet the value
        })
        setTimeout(()=>{
            setAnswer({
                selectedAnswers:answer,
                isCorrect:QUESTIONS[index].answers[0]===answer//to know the index 
            })
            setTimeout(()=>{
                onSelectAnswers(answer)
            },2000)
        },1000)

    }
    let answerSate = '';
    if(answer.selectedAnswers && answer.isCorrect !==null){
        answerSate=answer.isCorrect?'correct':'wrong';
    }else if(answer.selectedAnswers){
        answerSate='answered'

    }
    
    return ( 
        <div id='question'>
            {/* //here mode props use for style */}
            <h2>{QUESTIONS[index].text}</h2>  
             <QuestionTimer key={timer} timeOut={timer} onTimeOut={ answer.selectedAnswers===''?onSkipAnswer:null} mode={answerSate}/>
            <Answers answers={QUESTIONS[index].answers} selectedAnswer = {answer.selectedAnswers} answerState={answerSate}onSelect={handleSelectAnswer}/>

            
        </div>
    );
};

export default Question;