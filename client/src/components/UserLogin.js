import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'




function UserLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user),
        navigate("/ingredients"));
      } else {
        r.json().then((err) =>{
          console.log(err);
          setErrors(err.errors)}
          );
      }
    });
  }

return (
    <nav>
    <Link className="navlink" to="/signup">Not already a user? Sign up!</Link>
    <form  className="login-form" onSubmit={handleSubmit}>
    
        <label htmlFor="username">Username</label>
        <input
          class="username"
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          class="password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </button>

        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}

    </form>
    </nav>
  );
}

export default UserLogin;