import React from 'react';
import style from './Attributes.css';

function Attributes() {
// go through all the possible attributes with ternaries
  return (
    <div className={style.AttributesContainer}>
      <div className={style.PersonName}>Mina Sorsok</div>
      <div className={style.AttrText}>Location: Anaheim, CA</div>
    </div>
  );
}

export default Attributes;
