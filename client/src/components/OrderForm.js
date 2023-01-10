import React from 'react';
import {Link} from 'react-router-dom';

function OrderForm(props) {
    return (
        <div>
           Hi I am an Order Form! 
           <br></br>
           <Link className="ingredients-link" to="/ingredients">Go Back</Link>
        </div>
    );
}

export default OrderForm;