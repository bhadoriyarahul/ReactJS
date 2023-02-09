import './Content.css';
import { useState } from 'react';

function Content() {
  const [ a , setA ] = useState(100);
  const [ b , setB ] = useState(200);
  const [ count , setCount ] = useState(0);
  const [ cDate , setCurrentDate ] = useState(Date());

  const [ mks , setMks ] = useState([10,20,30,40,50]);

  setTimeout(()=>{
   setCurrentDate(Date()); 
  },1000);

  const Increment=()=>{
    setCount(count+1);    
  }

  const Decrement=()=>{
    setCount(count-1);    
  }

  return (
    <div id="content" >
        <center>
        <h1>Content Section</h1>
        
        <h2>Marks list loop access</h2>
        {/* {
          mks.map((x) => (
          <p>{x}</p>
          ))
        } */}

        {
          mks.map((x,i) => (
          <p>{x}{i}</p>
          ))
        }

        <h2>Marks list manual access</h2>
        <p>marks 1 : {mks[0]}</p>
        <p>marks 2 : {mks[1]}</p>
        <p>marks 3 : {mks[2]}</p>
        <p>marks 4 : {mks[3]}</p>
        <p>marks 5 : {mks[4]}</p>

        <br/><br/><hr/><br/>

        <h2>Its Counter Working</h2>
        <h3>Count : {count} </h3>
        <button onClick={Increment} >+</button>
        <button onClick={Decrement} >-</button>
        <br/><br/><hr/><br/>

        <h2>Its Clock Working</h2>
        <h3>Clock : {cDate}</h3>
        <br/><hr/><br/>
        
        <h2>Add Result</h2>
        <p>a = {a}</p>
        <p>b = {b}</p>
        <p>add = {a+b}</p>
        </center>
    </div>
  );
}

export default Content;