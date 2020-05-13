import React, { Component } from 'react';
import MoviesContainer from './movies/components/MoviesContainer';
import MoviesForm from './movies/components/MoviesForm';

class App2 extends Component {
    render() {
        return (
            <div>
                <MoviesContainer />
                <MoviesForm />
            </div>
        )
    }
}

export default App2;