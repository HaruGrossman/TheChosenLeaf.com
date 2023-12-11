import React from "react";
import "./favoriteSwitch.css";

const Switch = ({ isToggled, onToggle }) => {

    return(
        <button>
        <label className="switch">
            <input type="checkbox" onChange={onToggle} defaultChecked={isToggled}/>
            <span className="slider" />
        </label>
        </button>
    )
};

export default Switch;