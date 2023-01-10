import './App.css';
import React, {useEffect, useState} from 'react';
import ListContainer from './components/ListContainer';


function App() {

  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    fetch('/ingredients')
    .then(r => r.json())
    .then(data => setIngredients(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
       <ListContainer ingredients={ingredients}/>
      </header>
    </div>
  );
}

export default App;
