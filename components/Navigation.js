import React, { useEffect, useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";


function Navigation() {
    const [toggle, setToggle] = useState(false);
    const [width, setWidth] = useState("0%");

    console.log(toggle);

    const openMenu = () => {
        setToggle(!toggle);
    };
    useEffect(() => {
        if (toggle) {
            document.body.style.overflow = "hidden";
            setWidth("100%");
        } else {
            document.body.style.overflow = "unset";
            setWidth("0%");
        }
    }, [toggle]);

    return (
        <div className="navigation">
            <div className="navigation__modal bg-gray-500" style={{ width: width }}>
                <h1>Kezdolap</h1>
                <h1>Rolam</h1>
                <h1>Kontakt</h1>
            </div>
            <div className="navbar">
                <h1>Kezdolap</h1>
                <h1>Rolam</h1>
                <h1>Kontakt</h1>
            </div>

            <div onClick={openMenu} className="navigation__menu">
                <MenuIcon fontSize="large" />
            </div>
        </div>
    );
}

export default Navigation;
