/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import style from './AgeFilterBox.css';

function AgeFilterBox() {
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
        <a href="#">
          <span className={style.FilterTitle}>
            Age
            <img src="https://s3.us-east-2.amazonaws.com/ouiqln-review-img/assets/downarrowbold.png" alt="down arrow" />
          </span>
        </a>
      </div>
      <div
        id={style.DropDown}
        className={style.blackBox}
        style={dropdownOpen ? { display: 'block' } : {}}
      >
      A filter
        <ul>
          <li><button type="button">I am filter</button></li>
        </ul>
      </div>
    </div>
  );
}

export default AgeFilterBox;
