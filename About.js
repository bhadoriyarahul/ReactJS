import './About.css';
import { useState } from 'react';

function About() {

  const [ user , setUser ] =useState({"uid":1,"unm":"admin@gmail.com","upass":"admin123"});

  return (
    <div id="content" >
        <center>
        <h1>About Section</h1>

        <h2>User Details Loop Access</h2>
        {
          Object.values(user).map((x) => (
          <p>{x}</p>
          ))
        }
        
        {
          Object.keys(user).map((x) => (
          <p>{x}{user[x]}</p>
          ))
        }          

        <h2>User Details Manual Access</h2>
        <p>UserID : {user.uid}</p>
        <p>Username : {user.unm}</p>
        <p>Password : {user.upass}</p>

        </center>
    </div>
  );
}

export default About;