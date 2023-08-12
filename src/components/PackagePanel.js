import React, { useState } from 'react';
import greenTick from './greenradio.svg';
import radioIcon from './blackradio.svg';
import './styles.css';
import signup from './signup.png';
import emptyradio from './emptyradio.svg';
import subscription from './subscription.png';
import clockIcon from './clock.svg';
import razorpay from './razorpay.png';

function PackagePanel() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [coursePrice, setCoursePrice] = useState(126); 
  const gstPercentage = 18; // 18% GST

  // Calculate total price including GST
  const total = Math.round(coursePrice + (coursePrice * gstPercentage) / 100)

  const handlePackageSelect = (packageId, price) => {
    if (packageId === 3) {
      return;
    }

    setSelectedPackage(selectedPackage === packageId ? null : packageId);
    setCoursePrice(price);
  };

  return (
    <div className="package-panel">
      <div className="top-icons">
        <img src={signup} alt="Sign Up" />
        <img src={subscription} alt="Subscription" />
      </div>
      <h3>Select your subscription</h3>
      <div className="package-options">
  <div className={`package-box ${selectedPackage === 3? 'selected' : ''}`} onClick={() => handlePackageSelect(3)}>
      <div className="tag tag-expired">Offer Expired</div>

    <div className="box-header">

      <div className="radio-icon">
        {selectedPackage === 3 ? <img src={greenTick} alt="Green Tick" /> : <img src={radioIcon} alt="Radio" />}
      </div>
      <div className="subscription-time gray-text">12 Month Subscription</div>
    </div>
    <div className="box-price "><small>Total</small>₹99</div>
    <div className="monthly-rate ">
      <span className="bold-text gray-text">₹33</span> /mon
    </div>
  </div>

  <div className={`package-box ${selectedPackage === 1 ? 'selected' : ''}`} onClick={() => handlePackageSelect(1,179)}>
   
    <div className="box-header">
      <div className="tag tag-recommended">Recommended</div>
      <div className="radio-icon">
        {selectedPackage === 1 ? <img src={greenTick} alt="Green Tick" /> : <img src={emptyradio} alt="Radio" />}
      </div>
      <div className="subscription-time">12 Month Subscription</div>
    </div>
    <div className="box-price"><small>Total</small>₹179</div>
    <div className="monthly-rate">
      <span className="bold-text">₹15</span> /mon
    </div>
  </div>

  <div className={`package-box ${selectedPackage === 4 ? 'selected' : ''}`} onClick={() => handlePackageSelect(4,149)}>
    <div className="box-header">
      <div className="radio-icon">
        {selectedPackage === 4 ? <img src={greenTick} alt="Green Tick" /> : <img src={emptyradio} alt="Radio" />}
      </div>
      <div className="subscription-time">6 Month Subscription</div>
    </div>
    <div className="box-price"><small>Total</small>₹149</div>
    <div className="monthly-rate">
      <span className="bold-text">₹25</span> /mon
    </div>
  </div>

  <div className={`package-box ${selectedPackage === 2 ? 'selected' : ''}`} onClick={() => handlePackageSelect(2,99)}>
    <div className="box-header">
      <div className="radio-icon">
        {selectedPackage === 2 ? <img src={greenTick} alt="Green Tick" /> : <img src={emptyradio} alt="Radio" />}
      </div>
      <div className="subscription-time">3 Months Subscription</div>
    </div>
    <div className="box-price"><small>Total</small>₹99</div>
    <div className="monthly-rate">
      <span className="bold-text">₹33</span> /mon
    </div>
  </div>
</div>
      <div className="additional-container">
        <div className="subscription-fee">
          Subscription Fee <span>₹18,500</span>
        </div>
        <div className="limited-offer-box">
          <div className="offer-text">Limited time offer <span className="offer-code">-18401</span>   </div>
          <div className="offer-details">
            <img src={clockIcon} alt="Clock" />
            <span>Offer valid till 25th March 2023</span>
          </div>
        </div>
        <div className="total-price">
  <span className="total-text">
    <strong>Total</strong> (incl of 18% of GST)
  </span>
  <span className="total-price-amount">₹<span className="bold-text">{total.toFixed(2)}</span></span>
</div>

        <div className="buttons-container">
          <button className="cancel-button">Cancel</button>
          <button className="proceed-button">PROCEED TO PAY</button>
        </div>
        <img src={razorpay} alt="" />
      </div>
    </div>
  );
}

export default PackagePanel;
