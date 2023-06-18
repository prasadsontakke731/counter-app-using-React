import { useState } from 'react';
import './App.css';

function App() {
  let [change, setChange] = useState(0);
  const handleChangeMinus = () => {
    setChange(change - 1);
  };
  const handleChangePlus = () => {
    setChange(change + 1);
  };
  const handleChangeReset = () => {
    setChange(0);
  };
  return (
    <div className='App'>
      <h1>{change}</h1>
      <div className='button'>
        <button className='btn btn-minus' onClick={handleChangeMinus}>
          -
        </button>

        <button className='btn btn-plus' onClick={handleChangePlus}>
          +
        </button>
      </div>
      <button className='btn btn-reset' onClick={handleChangeReset}>
        RESET
      </button>
    </div>
  );
}

export default App;
