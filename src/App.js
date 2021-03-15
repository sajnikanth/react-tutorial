import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='App'>
                <h1>{this.props.name}</h1>
                <p>{this.props.country}</p>
            </div>
        );
        }
}

export default App;