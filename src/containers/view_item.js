import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class ViewItem extends Component {
  componentWillMount(){
    if($('.carousel.carousel-slider').carousel()){

      console.log('carousel');
    };
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
      // console.log(this.props.view_item.payload[0]);
      const item_data = this.props.view_item.payload[0];
      const image_set = this.props.view_item.payload[0].ImageSets[0].ImageSet;
      const images = this.parseImgs(image_set);
      return (
        <div className='carousel carousel-slider'>
            { images.map(function(x){return <img key={x} src={x} />}) }
          <h3>Selected Item</h3>
          <p>ASIN: { item_data.ASIN[0] }</p>
          <p>{ item_data.ItemAttributes[0].Title[0] }</p>
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
