// import
import './App.css'
import {useState, useEffect} from 'react';

const App = () =>  {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      // Timeout interval
      const timeout = setTimeout(function () {
        console.log('Hi Kp');
      }, 1000);
  
// With cleap up side effects are cleared with a fuction
      return () =>{
        clearTimeout(timeout)
      }
    }, [count]);
  
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>
          Increase count: {count}
        </button>
      </div>
    );
  }

export default App