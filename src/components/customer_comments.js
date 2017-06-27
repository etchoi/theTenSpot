import React from 'react';

const CustomerComments = () => {
  return (
    <section className="customer-comments">
      <div className="row">
        <div className="col s12">
          <h4 className="center-align">Find the top selling, best reviewed items without all the research.</h4>
        </div>
      </div>
      <div className="row">
        <div className="col s4">
          <p>"I used to spend a lot of time researching my next big purchases, but no more!"</p><p className="right-align">- Jane<br/>
          Seattle, WA</p>
        </div>
        <div className="col s4">
          <p>"My weekends and evenings were spent researching my next purchases. Now theTenSpot does it all for me!"</p><p className="right-align">- Steven<br/>
          Iowa City, IA</p>
        </div>
        <div className="col s4">
          <p>"Wish I would have found theTenSpot sooner. The perfect companion for the ecommerce consumer."</p><p className="right-align">- Joy<br/>
          Freemont, CA</p>
        </div>
      </div>
    </section>
  );
}

export default CustomerComments;
