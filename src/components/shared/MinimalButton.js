import React from 'react';
import PropTypes from 'prop-types';

const MinimalButton = ({ children, bgColor, color, action }) => {
  const style = {
    border: 'solid .5px',
    borderColor: bgColor || 'rgba(64, 64, 64, 0.55)',
    backgroundColor: bgColor || 'transparent',
    color: color || 'inherit',
    borderRadius: 20,
    padding: '5px 10px',
    fontSize: 12,
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  }
  return (
    <button onClick={ action } style={style}>
      { children }
    </button>
  )
}

MinimalButton.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  action: PropTypes.func
}

export default MinimalButton
