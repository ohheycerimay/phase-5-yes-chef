import './App.css';
import React, {useEffect, useState} from 'react';
import ListContainer from './components/ListContainer';
import UserLogin from './components/UserLogin';
import {Route, Routes} from 'react-router-dom';
import NotFound from './components/NotFound';
import Recipe from './components/Recipe';
import LogoutPage from './components/LogoutPage';
import SignUp from './components/SignUp';
import OrderForm from './components/OrderForm';
import NavBar from './components/NavBar';
import Profile from './components/Profile';

function App() {

  const [ingredients, setIngredients] = useState([])
  const [user, setUser] = useState(null)
  const [search, setSearch] = useState('')
  const [recipes, setRecipes] = useState([])
  const [searchRecipes, setSearchRecipes] = useState('')

  useEffect(() => {
      fetch(`/recipes`)
      .then(response => response.json())
      .then(data => setRecipes(data))
  }, [])

  useEffect(() => {
    (async () => {
      const response1 = await fetch('/me');
      const user = await response1.json();
      setUser(user);

      const response2 = await fetch('/ingredients');
      const ingredients = await response2.json();
      setIngredients(ingredients);
    })()
    
  }, []);

  const handleDeleteIngredient = id => {
    const updatedIngredientArray = ingredients.filter(ingredient => ingredient.id !== id)
    setIngredients(updatedIngredientArray)
  }

  const searchIngredients = ingredients.filter((ingredient) => ingredient.name.toLowerCase().includes(search.toLowerCase()))

  const lookUpRecipe = recipes.filter((recipe) => recipe.name.toLowerCase().includes(searchRecipes.toLowerCase()))

  return (
    <div className="App">
      <NavBar className="navbar" user={user} setUser={setUser} />
      <Routes>
        <Route exact path="/" element={<UserLogin onLogin={setUser}/>}/>
        <Route exact path="/signup" element={<SignUp onSignUp={setUser}/>}/>
        <Route path="/ingredients" element={<ListContainer ingredients={searchIngredients} handleDeleteIngredient={handleDeleteIngredient} search={search} setSearch={setSearch} searchRecipes={searchRecipes} setSearchRecipes={setSearchRecipes} recipes={lookUpRecipe}/>}/>
        <Route path="/recipes" element={<Recipe/>}/>
        <Route path="/profile" element={<Profile user={user}/>}/>
        <Route path="/orderform" element={<OrderForm user={user} setIngredients={setIngredients} ingredients={ingredients}/>}/>
        <Route path="/logout" element={<LogoutPage user={user} setUser = {setUser}/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
