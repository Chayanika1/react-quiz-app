import React, { useEffect, useState } from 'react';

const QuestionTimer = ({timeOut,onTimeOut,mode}) => {
    const[remainingTime,setRemainingTime]=useState(timeOut)
    //here if we will not use useEffect ,this setTimeOut will be recreated again
    //this function keeps on executed if we dont' use useCallBack() hook
       useEffect(()=>{
      const timer =   setTimeout(onTimeOut,timeOut);
      //clear time out(clean up function)
      return()=>{
        clearTimeout(timer) 
      }


       },[onTimeOut,timeOut])
    //in useeffect it will update,when dependency will change
    useEffect(()=>{
       const interval= setInterval(()=>{
            setRemainingTime(prevRemainingTime=>prevRemainingTime-100)
        },100)//here 100 is milli seconds

        //clean up function)(it always clean the previous executed value and reset new value)
        return()=>{
            clearInterval(interval)
        }

    },[])
    
    return (
        <progress id='question-time' max={timeOut} min={remainingTime}className={mode}>
           
        </progress>
    );
};

export default QuestionTimer;