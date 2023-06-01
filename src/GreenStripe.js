import React from 'react'
import './GreenStripe.scss'

const PERSON_KEY = 'PersonKey';

export const GreenStripe = () => {
    const onHandleWrite = ()=>{
        const person = {
            firstName: "Alice",
            age: 11
        }
        // This serializes our JS object using the JSON.stringify() method
        // localStorage.setItem(PERSON_KEY, JSON.stringify(person))
        sessionStorage.setItem(PERSON_KEY, JSON.stringify(person))
    }

    const onHandleRead = ()=>{
        // This deserializes our JSON string and converts out string to a JS object using JSON.parse()
        // const p = JSON.parse(localStorage.getItem(PERSON_KEY));
        const p = JSON.parse(sessionStorage.getItem(PERSON_KEY));
        console.log(p);
    }
  return (
    <div className='GreenStripe'>
        <button onClick={()=> onHandleWrite()}>Write</button>
        <button onClick={()=> onHandleRead()}>Read</button>
    </div>
  )
}


// Know how and when to use these methods below (take a look at the docs):

// localStorage.setItem
// localStorage.getItem
// localStorage.removeItem (know how to use it in the browser)

// JSON.stringify()
// JSON.parse()
// .json()  --will not be tested