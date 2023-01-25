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
            <div className="profile-container">
            
            <img className="display-pic" src={user.profile_pic} alt={user.username}/>
            
            <div className="profile">
            <div className="profile-bio">
            <h3>{user.name}</h3>
            <h2>Ceri is a highly accomplished chef who has spent many years working in the vibrant culinary scene of Little Italy in New York City. With a passion for authentic Italian cuisine and a wealth of experience in traditional cooking techniques, Ceri has become a respected figure in the local culinary community. She has worked in some of the most renowned restaurants in Little Italy, honing his skills and developing a unique style that combines classic flavors with contemporary twists. Ceri is known for her use of fresh, seasonal ingredients, and her commitment to using only the highest-quality products. In addition to her work in the kitchen, Ceri is also an accomplished teacher, leading classes and workshops on Italian cooking for both professional chefs and home cooks. With her passion, expertise, and dedication to his craft, Ceri is a true culinary artist and an inspiration to those who know and love her cooking.</h2>
        </div>
        </div>
        </div>
        </div>
    
    );
}

export default Profile;