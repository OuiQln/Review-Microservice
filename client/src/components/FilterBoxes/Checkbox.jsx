/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './Checkbox.css';

function Checkbox({ name, checked = false, handleFilterToggle }) {
  const [check, setCheck] = useState(false);
  return (
    <input
      className={style.Checkbox}
      type="checkbox"
      name={name}
      checked={check}
      onChange={() => setCheck(!check)}
    />
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  handleFilterToggle: PropTypes.func.isRequired,
};

export default Checkbox;
