import React, {Component} from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';


class App extends Component {

  
  async onSearchSubmit(term) {
    const response = await axios
      .get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
          Authorization: 'Client-ID f9e71158753f2160243979a54e97a908eb073f29c6200c9ffaf896dbea4ca793'
        }
      });
      
    console.log(response.data.results);
      
    }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <div>Application</div>
      </div>
    )
  }

}

export default App;