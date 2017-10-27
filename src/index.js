import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchbar';

const API_KEY = 'AIzaSyADquz_f3Ov8D_j3ujCFOu8kj9B-rvaZ70';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'dog'}, (videos) => {
      this.setState({videos});
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));
