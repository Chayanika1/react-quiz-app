import React, { useRef } from 'react';

const Answers = ({answers,selectedAnswers,answerState,onSelect}) => {
    const stuffledAnswers = useRef()

        if(!stuffledAnswers.current){
        stuffledAnswers.current = [...answers]
        stuffledAnswers.current.sort(()=>
          Math.random()-0.5);//here random will give us value between 0 and 1. and if we deduct 0.5 from that, we will end up with negative value
          //sort not returned a new array.it will added array
    
      }
     
    return (
        <ul id='answers'>
        {
         stuffledAnswers.current.map(answer=>{
            const isSelected = selectedAnswers===answer
            let cssClasses = '';
            if(answerState==='answered'&& isSelected){
              cssClasses=' selected'

            }
            
            if((answerState==='correct'|| answerState==='wrong') && isSelected){
              cssClasses=answerState
            }
            return (
            <li key={answer} className='answer'>
                <button onClick={()=>onSelect(answer)} className={cssClasses} disabled={answerState!==''}>{answer}</button>
            </li>
          )
            
          })
        }
    </ul>  
    );
};

export default Answers;