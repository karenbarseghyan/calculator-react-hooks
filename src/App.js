import './App.css';
import React, {useState} from 'react'


function App() {
  const [data,setData] = useState("");
  const calcBtns = [];
  [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0 , "."].forEach (item=>{
    calcBtns.push(
      <button onClick = {event => {
        setData(data+event.target.value)
      }}
      value = {item}
      key = {item}>
        {item}
      </button>
    )
  })

  return (
    <div>
      <div>{calcBtns}</div>
      <div>{data}</div>
      <button onClick = {()=> setData(data.substr(0,data.length - 1))}>Clear</button>
      <button onClick = {() => setData ("")}>ac</button>
      <button onClick = {event => setData(data + event.target.value)} value = "+">+</button>
      <button onClick = {event => setData(data + event.target.value)} value = "-">-</button>
      <button onClick = {event => setData(data + event.target.value)} value = "*">*</button>
      <button onClick = {event => setData(data + event.target.value)} value = "/">/</button>
    </div>
  );
}

export default App;
