import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

function Person() {
    return (
        <div className="person">
            <h1>Sajnikanth</h1>
            <p>India</p>
        </div>
    );
}

ReactDOM.render(<Person />, document.querySelector('#p1'));