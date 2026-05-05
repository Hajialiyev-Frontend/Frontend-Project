import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import './header.css'
const Header =()  =>{
  
 return (
   <div>
   <div className="headercontainer">
    <div className="headerlogo">
     <img src="https://img.freepik.com/premium-vector/clothing-store-logo-design-inspiration-vector-illustration_500223-481.jpg" alt="" />
     <div className="clothes">
        <p>CLOTHING</p>
        <p>STORE</p>
     </div>
    </div>
    <div className="headernav">
              <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="./about">About</Link></li>
        <li><Link to="./Shop">Shop</Link></li>
        <li><SlBasket /></li>
      </ul>

    
    </nav>
    </div>
   </div>
   </div>
   );
}


export default Header;