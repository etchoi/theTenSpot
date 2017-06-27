import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class ViewItem extends Component {
  render() {
    return (
      <div>
        <h3>Selected Item</h3>
      </div>

    )
  }
}

function mapStateToProps({ view_item }) {
  return { view_item };
}

export default connect(mapStateToProps)(ViewItem);
