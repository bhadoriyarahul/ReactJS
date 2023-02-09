import './Service.css';
import { useState } from 'react';
import Test from '../TestComponent/Test';

function Service() {

  const [ a , setA ] = useState(100);
  const [ b , setB ] = useState(200);

  const [ user , setUser ] =useState([{"uid":1,"unm":"admin@gmail.com","upass":"admin123"},{"uid":2,"unm":"admin1@gmail.com","upass":"admin123"},{"uid":3,"unm":"admin3@gmail.com","upass":"admin123"},{"uid":4,"unm":"admin2@gmail.com","upass":"admin123"},{"uid":5,"unm":"admin4@gmail.com","upass":"admin123"}]);

  return (
    <div id="content" >
        <center>
        <h1>Service Section</h1>
        <br/><hr/>
        <Test a={a} b={b} />
        <hr/><br/>
        <h2>View & Manage User Details</h2>
        <br/>
        <table border='2' cellspacing='5' cellpadding='10'>
        <tr>
        <th>UserID</th>
        <th>Username</th>
        <th>Password</th>
        </tr>  
        {
          user.map((row)=>(
            <tr>
            <td>{row.uid}</td>
            <td>{row.unm}</td>
            <td>{row.upass}</td>
            </tr>  
          ))
        }
        </table>
        </center>
    </div>
  );
}

export default Service;