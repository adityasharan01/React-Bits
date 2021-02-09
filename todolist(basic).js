import React, { useState } from 'react'

const App = () => { 
  const bioData = [{ id:1,name: 'aditya', age: 23 }, { id:2,name: 'harsh', age: 22 }, { id:3,name: 'Amit', age: 21 }, { id:4,name: 'saket', age: 20 }];
  const [myArray, setMyArray] = useState(bioData);
  const clearArray = () => {
    setMyArray([]);
  }
  const clearElem = (id) => {
    const mynewArray = myArray.filter((curElem) => {
      return curElem.id !== id;
    })
    setMyArray(mynewArray);
  }
  return (
    <>
      {
        myArray.map((curr) => {
          return (
            <h1 key={curr.id}>Name:{curr.name} Age: {curr.age} <button onClick={()=> clearElem(curr.id)}> clear me up </button></h1>
          );
        } )
      }
      <button onClick={clearArray}> Clear</button>
    </>
  )
}

export default App
