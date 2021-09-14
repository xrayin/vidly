import './App.css';
import React, {Component} from 'react';
import Movies from "./components/movies";

class App extends Component {

    render() {
        return (
            <main className="container">
                <div className="row">
                    <Movies/>
                </div>
            </main>
        )
    }
}

export default App;
