import CloseIcon from "@mui/icons-material/Close";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import Style from "./Mobile.module.css";

const Mobile = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = (event) => {
        setIsChecked(event.target.checked);
    };
    const goToSeciton = () => {
        setIsChecked(false);
    };
    return (
        <>
            <div className={Style.mobile_menu}>
                <NavLink href="/" onClick={goToSeciton}>
                    <p style={{ fontSize: '24px', fontWeight: '600', color:'#ffffff'}}>Geekyness</p>
                </NavLink>

{/* Menu is clicked or not if clicked so, cross icon if not the menu icon logic */}
                <div className={Style.right}>
                    {!isChecked && (
                        <label
                            className={Style.button}
                            style={{ width: "40px", marginLeft: "10px" }}
                        >
                            <MenuRoundedIcon style={{ color:'3b3b3b'}} />
                            <input
                                type="checkbox"
                                onChange={handleChange}
                                checked={isChecked}
                                hidden
                            />
                        </label>
                    )}
                    {isChecked && (
                        <label
                            className={Style.button}
                            style={{ width: "40px", marginLeft: "10px" }}
                        >
                            <CloseIcon />
                            <input
                                type="checkbox"
                                onChange={handleChange}
                                checked={isChecked}
                                hidden
                            />
                        </label>
                    )}
                </div>
            </div>

            {/* Class change for menu door according to that the icon is crossed or menu  */}
            <div className={`${Style.main} ${isChecked ? Style.active_Nav : Style.deactive_Nav  } `} >
                <div className={Style.container}>
                    <NavLink className={Style.Navlink} href={`/`} onClick={goToSeciton}>
                        HOME
                    </NavLink>
                    <NavLink
                        className={Style.Navlink}
                        href={`/aboutus`}
                        onClick={goToSeciton}
                    >
                        ABOUT US
                    </NavLink>
                    <NavLink
                        className={Style.Navlink}
                        href={`/contactus`}
                        onClick={goToSeciton}
                    >
                        CONTACT US
                    </NavLink>
                    <input type="text" placeholder='product search' />
                </div>
            </div>
        </>
    );
};

export default Mobile;
