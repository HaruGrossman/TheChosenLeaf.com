import React from "react";
import "./popup.css";

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup-overlay">
            <div className="popup-inner">
                {props.children}
                <button className="close-btn" onClick={() => props.setTrigger(false)}> &times; </button>
            </div>
        </div>
    ) : "";
}

export default Popup