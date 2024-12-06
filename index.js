import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');

  // Handle button click
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Handle the calculation
  const handleCalculate = () => {
    try {
      // Evaluate the expression using math.js to handle more advanced operations
      const result = eval(input);
      setInput(result.toString());
    } catch (e) {
      setInput('Error');
    }
  };

  // Handle clear button
  const handleClear = () => {
    setInput('');
  };

  // Handle backspace button
  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  // Handle square root
  const handleSquareRoot = () => {
    try {
      const result = Math.sqrt(eval(input));
      setInput(result.toString());
    } catch (e) {
      setInput('Error');
    }
  };

  // Handle power function (exponentiation)
  const handleExponentiation = () => {
    try {
      const result = eval(input + '**' + 2); // Hardcoded as power of 2 for simplicity
      setInput(result.toString());
    } catch (e) {
      setInput('Error');
    }
  };

  // Handle trigonometric functions (sin, cos, tan)
  const handleTrigFunction = (func) => {
    try {
      const angle = eval(input); // Ensure angle is in radians
      const result = Math[func](angle).toString();
      setInput(result);
    } catch (e) {
      setInput('Error');
    }
  };

  // Handle log function
  const handleLog = () => {
    try {
      const result = Math.log10(eval(input));
      setInput(result.toString());
    } catch (e) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleBackspace}>←</button>
        
        {/* Advanced Buttons */}
        <button onClick={handleSquareRoot}>√</button>
        <button onClick={() => handleTrigFunction('sin')}>sin</button>
        <button onClick={() => handleTrigFunction('cos')}>cos</button>
        <button onClick={() => handleTrigFunction('tan')}>tan</button>
        <button onClick={handleLog}>log</button>
        <button onClick={handleExponentiation}>x²</button>
      </div>
      <style jsx>{`
        .calculator {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 50px;
          padding: 20px;
          background-color: #fafafa;
          border-radius: 10px;
        }

        .display input {
          width: 350px;
          padding: 15px;
          font-size: 2rem;
          text-align: right;
          margin-bottom: 20px;
          border-radius: 8px;
          border: 2px solid #ccc;
        }

        .buttons {
          display: grid;
          grid-template-columns: repeat(4, 80px);
          gap: 10px;
        }

        button {
          padding: 20px;
          font-size: 1.5rem;
          cursor: pointer;
          border: none;
          border-radius: 8px;
          background-color: #f0f0f0;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #ddd;
        }

        button:active {
          background-color: #ccc;
        }

        .display input {
          background-color: #f9f9f9;
        }
      `}</style>
    </div>
  );
}
