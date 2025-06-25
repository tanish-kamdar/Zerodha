import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  
  let initialRoute=useLocation().pathname;
  let idx;
  switch(initialRoute){
    case '/' : idx=0; break;
    case '/orders' : idx=1; break;
    case '/holdings' : idx=2; break;
    case '/positions' : idx=3; break;
    case '/funds' : idx=4; break;
    case '/apps' : idx=5; break;
  }

  const [profileClicked,setProfileClick]=useState(false);
  const [menuSelected,setMenuSelected]=useState(idx);

  function handleMenuSelection(index){
    setMenuSelected(index);
  }

  function handleProfileClick(){
    setProfileClick(!profileClicked);
  }
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ height:"1.5rem"}} className="img-fluid" />
      <div className="menus">
        <ul className="mb-0">
          <li>
            <Link to="/" onClick={()=>handleMenuSelection(0)}  className="" style={{textDecorationLine:"none"}}>
            <p className={menuSelected===0 ? "menu selected" : "menu"}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/orders" onClick={()=>handleMenuSelection(1)}  className="" style={{textDecorationLine:"none"}}>
            <p className={menuSelected===1 ? "menu selected" : "menu"}>Orders</p>
            </Link>
          </li>
          <li>
            <Link to="/holdings" onClick={()=>handleMenuSelection(2)}  className="" style={{textDecorationLine:"none"}}>
            <p className={menuSelected===2 ? "menu selected" : "menu"}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link to="/positions" onClick={()=>handleMenuSelection(3)} className="" style={{textDecorationLine:"none"}} >
            <p className={menuSelected===3 ? "menu selected" : "menu"}>Positions</p>
            </Link>
          </li>
          <li>
            <Link to="/funds" onClick={()=>handleMenuSelection(4)} className="" style={{textDecorationLine:"none"}} >
            <p className={menuSelected===4 ? "menu selected" : "menu"}>Funds</p>
            </Link>
          </li>
          <li>
            <Link to="/apps" onClick={()=>handleMenuSelection(5)}  className="" style={{textDecorationLine:"none"}}>
            <p className={menuSelected===5 ? "menu selected" : "menu"}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        
      </div>

      <div className="profile d-flex align-items-center" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username mb-0">USERID</p>
        </div>

    </div>
  );
};

export default Menu;
