import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import './index.scss';
import back from './assets/back.png';

const App = (props)=>{
    const [state, setState] = useState("");
    const handleClick = (e)=>{
        console.log("container clicked");
    }
    return (
        <div className="container" onClick={handleClick}>
            Hello world :D
            < img src={back}/>
        </div>
    );
}

export default App;

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);