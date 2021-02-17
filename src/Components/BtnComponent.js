import React from 'react'


export default function BtnComponent(props) {

  //в зависимости от статуса который пришел из пропса меняются кнопки
  return (
   <div>
     {(props.status === 0) ?
        <button className = "stopwatch-btn stopwatch-btn-green" 
        onClick = {props.start}>Start</button>
        : ''
         }


    {(props.status === 1) ? 
    <div>

      <button className = "stopwatch-btn stopwatch-btn-red" 
        onClick = {props.stop}>Stop</button>

      <button className = "stopwatch-btn stopwatch-btn-yellow" 
         onClick = {props.wait}>Wait</button>

    </div> : ''
}

{(props.status === 2) ? 
<div>
        <button className = "stopwatch-btn stopwatch-btn-green" 
         onClick = {props.start}>Start</button>
        
        <button className = "stopwatch-btn stopwatch-btn-yellow" 
         onClick = {props.wait}>Wait</button>
        
        <button className = "stopwatch-btn stopwatch-btn-orange" 
         onClick = {props.reset}>Reset</button>
      
</div> : ''
}

</div> 
  );
}
