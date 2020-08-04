import React from 'react';

const Button = (props) => {
  const { type, value, btnClass } = props;

  return (
    <button className={btnClass} type={type}>{value}</button>
  );
};

export default Button;
