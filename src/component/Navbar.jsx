import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Chat Mania</span>

      <div className="user">
        <img
          src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
          alt=""
        />
        <span>Kavindu</span>
        <button>logout </button>
      </div>
    </div>
  );
}

export default Navbar;
