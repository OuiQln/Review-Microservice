/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './Checkbox.css';

function Checkbox({ name, checked = false, handleFilterToggle, disabled }) {
  const [check, setCheck] = useState(checked); // remember to deliver from parents
  return (
    <>
      <input
        className={style.Checkbox}
        style={check ? { outline: 'none !important;' } : {}}
        type="checkbox"
        disabled={disabled}
        name={name}
        checked={check}
        onChange={() => setCheck(!check)}
      />
    </>
  );
}

Checkbox.propTypes = {
  disabled: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  handleFilterToggle: PropTypes.func.isRequired,
};

export default Checkbox;

// checked needs to come from parent
