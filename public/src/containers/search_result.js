import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDetail } from '../actions/index';

class SearchResult extends Component {


  renderResult(resultData) {
    const asin = resultData.ASIN[0];
    const preview_image = resultData.SmallImage[0].URL[0];
    const title = resultData.ItemAttributes[0].Title;
    const price = resultData.ItemAttributes[0].ListPrice ? resultData.ItemAttributes[0].ListPrice[0].Amount[0] : 'Visit Amazon to see price';
    const sales_rank = resultData.SalesRank ? resultData.SalesRank[0] : '';

    return (
      <li key={asin} className="search-list-item">
        <div className="row">
          <img className="col s3"  src={preview_image} />
          <h6 className="col s9" >{title}</h6>
        </div>
        <p>${price}</p>
        <p>{sales_rank}</p>
      </li>
    )
  }

  render() {
    return (
      <ul className="search-list col s4">
        {this.props.search_result.map(this.renderResult)}
      </ul>
    )
  }
}

function mapStateToProps({ search_result }) {
  return { search_result };
}

export default connect(mapStateToProps)(SearchResult);
