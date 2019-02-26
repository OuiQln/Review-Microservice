/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import style from './StarFilterBox.css';
import LineItemFilter from './LineItemFilter';

//  this component needs as a prop, handler for checkbox click
//  and the number of reviews per each star rating;
function StarFilterBox() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  let callState = (event) => {
    if (!document.getElementById(style.RatingContainer).contains(event.target)) {
      setDropdownOpen(!dropdownOpen);
      document.removeEventListener('mousedown', callState);
    } else if (document.getElementById(style.LabelContainer).contains(event.target)) {
      document.removeEventListener('mousedown', callState);
    }
  };
  callState = callState.bind(this);


  (function eventer() {
    if (dropdownOpen) {
      document.addEventListener('mousedown', callState);
    }
  }());

  return (
    <div id={style.RatingContainer} className={style.mycontainer}>
      <div
        id={style.LabelContainer}
        className={style.FilterBoxDiv}
        onClick={() => { setDropdownOpen(!dropdownOpen); }}
      >
        <a href="#" style={dropdownOpen ? { color: '#ff0000' } : {}}>
          <span className={style.FilterTitle}>
            Star Rating
            <img src="https://s3.us-east-2.amazonaws.com/ouiqln-review-img/assets/downarrowbold.png" alt="down arrow" />
          </span>
        </a>
      </div>
      <div
        className={style.blackBox}
        style={dropdownOpen ? { display: 'flex' } : {}}
      >
        <div className={style.list}>
          <LineItemFilter name="1 Star" numOf={5} handleFilterToggle={() => {}} />
          <LineItemFilter name="2 Stars" numOf={0} handleFilterToggle={() => {}} />
          <LineItemFilter name="3 Stars" numOf={5} handleFilterToggle={() => {}} />
          <LineItemFilter name="4 Stars" numOf={5} handleFilterToggle={() => {}} />
          <LineItemFilter name="5 Stars" numOf={5} handleFilterToggle={() => {}} />
        </div>
      </div>
    </div>
  );
}

export default StarFilterBox;
