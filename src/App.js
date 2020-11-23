import './App.css';
import React, {useState} from 'react'
import  "./styles.css"

function App() {
  const [data,setData] = useState("");
  const calcBtns = [];
  [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0 , ".", "%"].forEach (item=>{
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
    <div className = "wrapper">
      <div className = "show-input">{data}</div>
      <div className = "digits flex">{calcBtns}</div>
      <div className = "modifiers subgrid">
        <button onClick = {()=> setData(data.substr(0,data.length - 1))}>Clear</button>
        <button onClick = {() => setData ("")}>ac</button>
      </div>
      <div className = "operations subgrid">
        <button onClick = {event => setData(data + event.target.value)} value = "+">+</button>
        <button onClick = {event => setData(data + event.target.value)} value = "-">-</button>
        <button onClick = {event => setData(data + event.target.value)} value = "*">*</button>
        <button onClick = {event => setData(data + event.target.value)} value = "/">/</button>
        <button onClick = {e => {
          try {
            setData(
              String(eval(data)).includes(".") ? String(eval(data).toFixed(5)) :  String(eval(data))
            )
          }
          catch (err) {
            console.log(err);
          }
        }}
        value = "=">
          =
        </button>
      </div>
    </div>
  );
}
export default App;
