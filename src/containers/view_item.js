import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class ViewItem extends Component {
  render() {
    if (this.props.view_item.payload) {
      console.log(this.props.view_item.payload);
      return (
        <div>
          <h3>Selected Item</h3>
          <p>ASIN: { this.props.view_item.payload.ASIN[0] }</p>
        </div>

      )
    }

    return <div>Select Item</div>
  }
}

function mapStateToProps({ view_item }) {
  return { view_item };
}

export default connect(mapStateToProps)(ViewItem);
