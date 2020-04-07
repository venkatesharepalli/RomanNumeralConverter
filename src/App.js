import React, { useState } from 'react';
import {convertToRoman} from './helper';
import './App.css';

function App() {
  const [romanNumber, setRomanNumber] = useState('');


  const handleChange = event => {
    if (event.target.value !== "") {
      setRomanNumber(convertToRoman(event.target.value))
    } else {
      setRomanNumber('')
    }
   
  }
    return (
      <div className="App">
       <h2> Roman Numeral Converter </h2>
        <input className="inputTxt" onChange={handleChange} />
        {romanNumber && <h2> <span>{romanNumber}</span>  </h2>}
      </div>
    );
  }

export default App;
