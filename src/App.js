import React, { useState } from 'react';
import Data from "./data.json"
import './App.css';

function App() {

    const [searchTearm, setSearchTerm] =useState ("")

  return (
    <>
        <div className="container">

        <input type="text" placeholder='Search...' onChange={(e)=>setSearchTerm(e.target.value)} />
      
        {
          Data.filter((value)=>{
            if(searchTearm == value){
              return value
            }else if (value.first_name.toLowerCase().includes(searchTearm.toLowerCase())){
              return( value)
            }
          }).map((value, key)=>{

            return (
              <div className='data' key={key}>
                
                 <p>  Name : {value.first_name}</p>
                 <p> Email : {value.email}</p>
                 <hr />
              </div>
            )
          })
        }

        </div>


    </>
  )
}

export default App;
