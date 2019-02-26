import React from 'react';
import style from './Attributes.css';

function Attributes({ name, location, age, size }) {
// go through all the possible attributes with ternaries
  return (
    <div className={style.AttributesContainer}>
      <div className={style.PersonName}>{name}</div>
      <div className={style.AttrText}>Location: {location}</div>
      <div className={style.AttrText}>Age: {age}</div>
      <div className={style.AttrText}>Size Purchased: {size}</div>
    </div>
  );
}

export default Attributes;
