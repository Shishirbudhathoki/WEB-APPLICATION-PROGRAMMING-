import { useState } from "react";
import './Q1.css'
export const BulbToggle = () =>{
    const [isOn, setIsOn] = useState(false);
    const toggleBulb = () => {
        setIsOn(!isOn);
    };
    return (
    <div className="container">
        <h1 className="title">Light Bulb Toggle</h1>
        <img className="bulb-img" src={isOn? "/light2.gif": "/light1.png"} alt="bulb"/>
        <button className="toggle-btn" onClick={toggleBulb}>{isOn ? "Turn OFF" : "Turn ON"}</button>
        <p className="status">The bulb is {isOn ? "ON" : "OFF"}</p>
    </div>
    )
}