import React, {useEffect, useState} from 'react';

function Profile() {

const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('/me')
      .then((res) => res.json())
      .then((user) => setUser(user))
      .catch((error) => console.log(error));
  }, []);

    return (
        <div>
            <header>Complimenti alla cuoca! 🤌🏼</header>
            <h3>{user.name}</h3>
            <img className="display-pic" src={user.profile_pic} alt={user.username}/>
        </div>
    );
}

export default Profile;