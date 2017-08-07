import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import $ from 'jquery';
import { carousel } from 'materialize-css';


class ViewItem extends Component {
  constructor(props){
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
  }

  handleLoad() {
    $('.carousel.carousel-slider').carousel({fullWidth: true, indicators: true});
  }
  parseImgs(obj){
    let img_arr = [];
    for(var key in obj){
      img_arr.push(obj[key].LargeImage[0].URL[0]);
    }
    return img_arr;
  }

  render() {
    if (this.props.view_item.payload) {
      const item_data = this.props.view_item.payload[0];
      const image_set = this.props.view_item.payload[0].ImageSets[0].ImageSet;
      const images = this.parseImgs(image_set);
      const carousel_idx = ['#one!', '#two!', '#three!', '#four!', '#five!', '#six!', '#seven!', '#eight!', '#nine!', '#ten!'];
      let count = -1;
      return (
        <div className='item_details col s8'>
          <div className='carousel carousel-slider' onLoad={this.handleLoad}>
            { images.map(function(x){
              count++;
              return <a className='carousel-item' key={carousel_idx[count]} href={carousel_idx[count]}><img key={x} src={x} /></a>}) }
          </div>
          <h3>Selected Item</h3>
          <p>ASIN: { item_data.ASIN[0] }</p>
          <p>{ item_data.ItemAttributes[0].Title[0] }</p>
        </div>
      )
    }
    return (
      <div>
        <div className='carousel carousel-slider'></div>
        <div>Select Item</div>
      </div>
    );

  }
}

function mapStateToProps({ view_item }) {
  return { view_item };
}

export default connect(mapStateToProps)(ViewItem);
