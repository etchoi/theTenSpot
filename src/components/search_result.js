import _ from 'lodash';
import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { getDetail } from '../actions/index';
import NavBar from './navbar';
import SearchBar from '../containers/search_bar';
import SearchResultList from '../containers/search_result_list';
import ViewItem from '../containers/view_item';


export default class SearchResult extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className = "container">
          <SearchBar />
          <div className = "row">
            <SearchResultList />
            <ViewItem />
          </div>
        </div>
      </div>
    )
  }
}

// function mapStateToProps({ search_result }) {
//   return { search_result };
// }
//
// export default connect(mapStateToProps)(SearchResult);
