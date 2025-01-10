import React from'react';
import ComponentOne from './component 1/maincomp';
import ComponentTwo from './component 2/maincomp';
import ComponentThree from './component 3/maincomp';
import ComponentFour from './component 4/maincomp';
import ComponentFive from './component 5/maincomp';
import ComponentSix from './component 6/maincomp';
import './App.css';

function App() {
  return(
    <div className="App">
      <ComponentOne />
      <ComponentTwo />
      <ComponentThree />
      <ComponentFour />
      <ComponentFive />
      <ComponentSix />
    </div>
  )
}

export default App;
