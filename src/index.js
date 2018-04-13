import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBND_nr8gqFs5zMaCOtL-KiaPwOsmHD6LA';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            videos: []
        };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
            // same thing as this.setState({ videos: videos });
        });
    }
    
    render() {
        return (
            <div>
                <SearchBar />
            </div>
    );
}
}

ReactDOM.render(<App />, document.querySelector('.container'));