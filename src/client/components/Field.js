import React from 'react';
import PropTypes from 'prop-types';

const Field = (props) => {
  const {
    label,
    type,
    name,
    value,
    onChange,
    fieldClass,
    labelClass,
    required,
  } = props;

  return (
    <label className={labelClass}>
      <span>{label} {required && <span className="required">*</span>}</span>
      <input
        className={fieldClass}
        type={type}
        name={name}
        value={value}
        onChange={({ target: { name, value } }) => onChange(name, value)}
      />
    </label>
  )
};

Field.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  fieldClass: PropTypes.string,
  labelClass: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

Field.defaultProps = {
  label: '',
  type: '',
  name: '',
  value: '',
  fieldClass: '',
  labelClass: '',
  onChange: null,
  required: false,
};

export default Field;
