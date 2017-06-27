import React from 'react';
import SearchBar from '../containers/search_bar';
import CustomerComments from '../components/customer_comments'

const MainBanner = () => {
  return (
    <section className="main-banner">
      <div className="container">
        <div className="section">
          <h3>Take the Guess Work Out of Shopping</h3>
          <SearchBar />
        </div>
        <div className="section">
          <CustomerComments />
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
