import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { getSearch } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '', redirect: false};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  componentDidMount(){
    this.searchInput.focus();
  }
  onInputChange(event) {
    this.setState({ term: event.target.value});
  }
  onFormSubmit(event) {
    event.preventDefault();
    this.props.getSearch(this.state.term);
    // const reply = this.props.getSearch();
    this.setState({ term: '', redirect: true });
    // reply.then(function(res){
    //   console.log(res.payload.data);
    // });
    // this.props.history.push('/showresult');
  }

  render() {
    const { redirect } = this.state;

     if (redirect) {
       return <Redirect to="/showresult"/>;
     }
    return (
      <form onSubmit={this.onFormSubmit} className="input-group search-input">
        <div className="row">
          <input value={this.state.term} onChange={this.onInputChange} className="input-field col s5 offset-s3" ref={ (input) => {this.searchInput = input;} } />
          <button type="submit" className="waves-effect waves-light btn col s1"><i className="material-icons">search</i></button>
        </div>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getSearch }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)
