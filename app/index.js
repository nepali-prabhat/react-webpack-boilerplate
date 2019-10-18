import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
const App = (props)=>{
    const [state, setState] = useState("");
    
    return (
        <div>
            Hello world :D
        </div>
    );
}

export default App;

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);