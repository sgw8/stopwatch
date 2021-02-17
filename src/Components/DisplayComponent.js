import React from 'react'


export default function DisplayComponent(props) {

  
  //open h
  // const h = () => {
  //   // изначальное значение h = 0, но как будет 60 мин то будет возвращен span с часами
  //   if(props.time.h === 0) {
  //     return '';
  //   }
  //   else {
  //     return <span> {props.time.h >=10 ? props.time.h : "0" + props.time.h}</span>
  //   }
  // }
  
  return (
    
      //отображаем propsы 
      //в выражении (9-12 string) пишем если час меньше 10 то добавляем 0 перед цифрой 
   <div>
        {/* {h()}&nbsp;&nbsp; */}
        <span> {props.time.h >=10 ? props.time.h : "0" + props.time.h}</span>&nbsp;:&nbsp;
       <span>{(props.time.m >= 10) ? props.time.m : "0" + props.time.m}</span>&nbsp;:&nbsp;
       <span>{(props.time.s >= 10) ? props.time.s : "0" + props.time.s}</span>&nbsp;:&nbsp;
       <span>{(props.time.ms >= 10) ? props.time.ms : "0" + props.time.ms}</span>
   </div>
  );
}

