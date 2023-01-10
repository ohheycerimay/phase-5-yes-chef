import './App.css';
import React, {useEffect, useState} from 'react';
import ListContainer from './components/ListContainer';
import UserLogin from './components/UserLogin';
import {Route, Routes} from 'react-router-dom';
import NotFound from './components/NotFound';
import LogoutPage from './components/LogoutPage';
import SignUp from './components/SignUp';
import OrderForm from './components/OrderForm';
import NavBar from './components/NavBar';


function App() {

  const [ingredients, setIngredients] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const response1 = await fetch('/me');
      const user = await response1.json();
      setUser(user);

      const response2 = await fetch('/ingredients');
      const ingredients = await response2.json();
      setIngredients(ingredients);
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   fetch('/ingredients')
  //   .then(r => r.json())
  //   .then(data => setIngredients(data))
  // }, [])

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route exact path="/" element={<UserLogin onLogin={setUser}/>}/>
        <Route exact path="/signup" element={<SignUp onSignUp={setUser}/>}/>
        <Route path="/ingredients" element={<ListContainer ingredients={ingredients}/>}/>
        <Route path="/orderform" element={<OrderForm />}/>
        <Route path="/logout" element={<LogoutPage user={user} setUser = {setUser}/>}/>
        <Route path="*" element={<NotFound/>} />
    </Routes>
    </div>
  );
}

export default App;
