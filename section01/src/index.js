import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB0ZMOqT4D2H2YQJQtO4wGOtqga-9b5i_Y';

/**
 * Create a new component
 * This component should produce some HTML
 */
const App = () => {
    return (
        <div>
            <SearchBar />    
        </div>
    );
}

/**
 * Take this component;s generated HTML and put it on the page (in the DOM)
 */
ReactDOM.render(<App />, document.querySelector('.container')); 