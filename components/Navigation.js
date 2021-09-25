import React, { useEffect, useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";

function Navigation() {
  const [toggle, setToggle] = useState(false);
  // const [width, setWidth] = useState("0%");

  console.log(toggle);

  const openMenu = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
      // setWidth("100%");
    } else {
      document.body.style.overflow = "unset";
      // setWidth("0%");
    }
  }, [toggle]);

  return (
    <div className="flex fixed w-full h-12 bg-red-500 justify-end items-center md:justify-center">
      <div className="bg-gray-500 hidden md:flex justify-center">
        <h1>Kezdolap</h1>
        <h1>Rolam</h1>
        <h1>Kontakt</h1>
      </div>
      <div
        className={
          "bg-blue-400 fixed flex flex-col justify-center items-center h-screen w-screen inset-0 ease-in-out transition-all duration-300 " +
          (toggle ? "transform translate-x-0" : "transform -translate-x-full")
        }>
        {/* <div> */}
          <a href="#kezdolap" onClick={openMenu}>Kezdolap</a>
          <a href="#rolam" onClick={openMenu}>Rolam</a>
          <a href="#kontakt" onClick={openMenu}>Kontakt</a>
        {/* </div> */}
      </div>
      <div onClick={openMenu} className="md:hidden z-50 justify-self-end">
        <MenuIcon fontSize="large" />
      </div>
    </div>
  );
}

export default Navigation;
