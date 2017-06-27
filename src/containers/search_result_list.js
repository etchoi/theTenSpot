import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { showItem } from '../actions';

class SearchResultList extends Component {
  renderResult(resultData) {
    return _.map(resultData, data => {
      const id = data.ASIN[0];
      return (
        <li key={data.ASIN[0]} onClick={() => showItem(id)} className="search-list-item">
          <div className="row">
            <img className="col s3"  src={data.SmallImage[0].URL[0]} />
            <h6 className="col s9">{data.ItemAttributes[0].Title[0]}</h6>
          </div>
        </li>
      );
    })
  }

  render() {
   return (
     <ul className="search-list col s4">
       {this.renderResult(this.props.search_result)}
     </ul>
   )
  }
}

function mapStateToProps({ search_result }) {
  return { search_result };
}

export default connect(mapStateToProps)(SearchResultList);
