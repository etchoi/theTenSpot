import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import SearchResult from '../containers/search_result';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <div className="row">
          <SearchResult />
        </div>
      </div>
    );
  }
}
