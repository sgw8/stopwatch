// импортируем React
import React, {useState} from 'react'
//импортируем rx
import {Observable, fromEvent}  from 'rxjs'
// импортируем компоненты
import DisplayComponent from './Components/DisplayComponent'
import BtnComponent from './Components/BtnComponent'
// иcпортируем стили
import './App.css'

export default function App() {

  // юзаем хуки состояния
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0})

  const [interv, setInterv] = useState()
  const [status, setStatus] = useState(0)
  
  //стейты массивов
  let [chunkTime, setChunkTime] = useState([])
  let [arrayTime] = useState([])

  // обьявление переменных ключей стейта
  let updatedMS = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  // обновление значений 
  const run =() => {
    if(updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60) {
     updatedM++; 
     updatedS = 0;
    }
    if(updatedMS === 100){
      updatedS++;
      updatedMS = 0;
    }
    // get origin state
    if(updatedH === 24) {
     getOrigin()
    }
    updatedMS++;
    return setTime({ms: updatedMS, s:updatedS, m:updatedM, h:updatedH});
  }
  
  // Функции секундомера

  // Функция запуска
  const start = () => {
    clearInterval(interv)
    setInterv(setInterval(run,10))
    run()
    setStatus(1)
  }

  // Stop Функция сброса - setTime меняет стейт на изначальные значения 
  const stop = () => {
    setTime({ms:0, s:0, m:0, h:0});
    clearInterval(interv)
    setStatus(0)
  }

  // Wait функция пркращение отсчета
  const wait = () => {
    // Observer
    let observer = {
      next: function() {
        chunkTime.unshift(updatedH,updatedM,updatedS,updatedMS)
        let joinedValue = chunkTime.join('')
        arrayTime.push(joinedValue)
        setChunkTime([])
    },
    error: function(error) {
        console.log(error)
    },
    complete:  function() {
      let differenceOfValues =  arrayTime[arrayTime.length-1] -  arrayTime[arrayTime.length-2]
      if(differenceOfValues <=30 && differenceOfValues >= 0  ) {
        clearInterval(interv)
      } 
    }
   }
   const observable$ = new Observable((obs)=>{
     obs.next(updatedMS)
     obs.complete()
     obs.error('Smthing went wrong')
   }).subscribe(observer)

    setStatus(2)
  }
  
 // Origin значения
  const getOrigin = () =>{
    updatedMS = 0;
    updatedS = 0;
    updatedM = 0;
    updatedH = 0;
  }
    
 
// Обнуляет стейт и стартует счетчик
  const reset = () => {
    getOrigin()
    start()
   }


   const blockedBtn = `#fcffc2;`

// Возвращаем jsx с компонентами и переданными в них пропсами
  return (

   <div className = "main-section">
     <div className = "clock-holder">
       <div className = "stopwatch">
              <DisplayComponent time = {time}/>

              <BtnComponent 
              status = {status} 
              stop =   {stop} 
              start =  {start}
              wait =   {wait} 
              reset =  {reset}
         />
       </div>
     </div>
   </div>

  );
}


