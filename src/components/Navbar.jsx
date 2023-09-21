import React, { useContext } from "react";
import { auth } from "../firebase/config";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
     const { currentUser } = useContext(AuthContext);
     return (
          <div className="navbar">
               <span className="logo">Lama Chat</span>
               <div className="user">
                    <img src={currentUser.photoURL} alt="" />
                    <span>{currentUser.displayName}</span>
               </div>
               <button onClick={() => auth.signOut()}>logout</button>
          </div>
     );
};

export default Navbar;
