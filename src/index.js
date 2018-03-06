import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDZJ3JwZGJwZhJ6NUI6ogi0Mo4V2Y4qRt8';

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
};

ReactDOM.render(<App />, document.querySelector('.container'));
