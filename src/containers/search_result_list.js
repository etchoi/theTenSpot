import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';


import { showItem } from '../actions';

class SearchResultList extends Component {
  formatPrice(str) {
    let price = parseInt(str);
    return (price/100).toFixed(2);
  }
  renderResult(resultData) {
    return _.map(resultData, data => {
      const id = data.ASIN[0];
      return (
        <li key={data.ASIN[0]} onClick={this.showItem.bind(this, id)} className="search-list-item">
          <div className="row">
            <img className="col s3"  src={data.SmallImage[0].URL[0]} />
            <h6 className="col s9">{data.ItemAttributes[0].Title[0]}</h6>
            <p>{'$'+this.formatPrice(data.ItemAttributes[0].ListPrice[0].Amount[0])}</p>
            <p>{data.SalesRank}</p>
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

  showItem(id) {
    this.props.dispatch(showItem(id))
  }
  renderImage() {
    // HERE HERE HERE
  }
}



function mapStateToProps({ search_result }) {
  return { search_result };
}

export default connect(mapStateToProps)(SearchResultList);
