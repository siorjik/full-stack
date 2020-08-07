import React from 'react';
import PropTypes from 'prop-types';

import ErrorField from './ErrorField';

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
    errors,
  } = props;

  const change = ({ target: { name, value } }) => onChange(name, value);

  return (
    <>
      <label className={labelClass}>
        <span>{label} {required && <span className="required">*</span>}</span>
        <input
          className={fieldClass}
          type={type}
          name={name}
          value={value}
          onChange={({ target: { name, value } }) => onChange(name, value)}
          //onCange={change}
        />
      </label>

      {!!errors.length && <ErrorField errors={errors} />}
    </>
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
  errors: PropTypes.arrayOf(PropTypes.shape())
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
  errors: [],
};

export default Field;
