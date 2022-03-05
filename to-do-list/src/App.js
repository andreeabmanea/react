import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState();

  return (
    <div className="App">
      <input type="text" />
    </div>
  );
}

export default App;
