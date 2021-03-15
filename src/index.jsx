import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

function Person(props) {
    return (
        <div className="person">
            <h1>{props.name}</h1>
            <p>{props.country}</p>
        </div>
    );
}

var app = (
    <div>
        <Person name="Sajnikanth" country="India"/>
        <Person name="Xiaojie" country="China"/>
    </div>


);

ReactDOM.render(app, document.querySelector('#root'));