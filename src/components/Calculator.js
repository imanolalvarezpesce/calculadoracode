import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleClick = (value) => {
    if (!isNaN(value) || value === '.') {
      // Logica para agregar número o punto decimal
      setInput(input === '0' ? value : input + value);
    } else if (value === 'C') {
      // Lógica para limpiar
      setInput('0');
      setPrevValue(null);
      setOperator(null);
    } else if (value === '=') {
      // Lógica para realizar cálculo
      if (prevValue !== null && operator) {
        const calculate = (a, b, op) => {
          switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return a / b;
            default: return b;
          }
        };
        const result = calculate(parseFloat(prevValue), parseFloat(input), operator);
        setInput(String(result));
        setPrevValue(null);
        setOperator(null);
      }
    } else {
      // Lógica para operaciones
      setOperator(value);
      setPrevValue(input);
      setInput('0');
    }
  };

  return (
    <div className="calculator">
      <div className="display" id="display">{input}</div>
      <div className="buttons">
        <button id="seven" onClick={() => handleClick('7')}>7</button>
        <button id="eight" onClick={() => handleClick('8')}>8</button>
        <button id="nine" onClick={() => handleClick('9')}>9</button>
        <button id="divide" onClick={() => handleClick('/')}>/</button>

        <button id="four" onClick={() => handleClick('4')}>4</button>
        <button id="five" onClick={() => handleClick('5')}>5</button>
        <button id="six" onClick={() => handleClick('6')}>6</button>
        <button id="multiply" onClick={() => handleClick('*')}>*</button>

        <button id="one" onClick={() => handleClick('1')}>1</button>
        <button id="two" onClick={() => handleClick('2')}>2</button>
        <button id="three" onClick={() => handleClick('3')}>3</button>
        <button id="subtract" onClick={() => handleClick('-')}>-</button>

        <button id="zero" onClick={() => handleClick('0')}>0</button>
        <button id="decimal" onClick={() => handleClick('.')}>.</button>
        <button id="equals" onClick={() => handleClick('=')}>=</button>
        <button id="add" onClick={() => handleClick('+')}>+</button>

        <button id="clear" onClick={() => handleClick('C')}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
