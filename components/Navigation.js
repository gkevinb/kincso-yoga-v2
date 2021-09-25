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
    <div className="flex fixed w-full h-14 bg-white shadow-xl justify-end items-center md:justify-center">
      <div className="hidden md:flex md:justify-between md:w-2/4">
        <a href="#kezdolap">Kezdőlap</a>
        <a href="#rolam">Rólam</a>
        <a href="#kezdolap">Kapcsolat</a>
      </div>
      <div
        className={
          "bg-blue-300 fixed flex flex-col justify-center items-center h-screen w-screen inset-0 ease-in-out transition-all duration-300 " +
          (toggle ? "transform translate-x-0" : "transform -translate-x-full")
        }>
        <div className="h-2/6 text-xl flex flex-col items-center justify-around">
          <a href="#kezdolap" onClick={openMenu}>Kezdőlap</a>
          <a href="#rolam" onClick={openMenu}>Rólam</a>
          <a href="#kontakt" onClick={openMenu}>Kontakt</a>
        </div>
      </div>
      <div onClick={openMenu} className="md:hidden z-50 justify-self-end">
        <MenuIcon className="m-4" fontSize="large" />
      </div>
    </div>
  );
}

export default Navigation;
