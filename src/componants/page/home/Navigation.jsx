import { useState } from "react";

function Navbar() {
  const [navActive] = useState(false);
  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
       
        <img src="./vite.svg" alt="Logo" />
      </div>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li> Projects</li>
          <li>About Me</li>
          <li> FAQ </li>
          <li>Contact Me</li>
        </ul>
      </div>
      
    </nav>
    
  );
  
}


export default Navbar;
