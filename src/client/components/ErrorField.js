import React from 'react';
import PropTypes from 'prop-types';

const ErrorField = ({ errors }) => {
  const errorsContent = errors.map((item, index) => {
    return (
      <div key={+index}>{item.message}</div>
    );
  });

  return (
    <div className="error-wrap">
      {errorsContent}  
    </div>
  )
};

ErrorField.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.shape()),
};

ErrorField.defaultProps = {
  errors: [],
};

export default ErrorField;
