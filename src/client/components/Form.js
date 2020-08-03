import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Field from './Field';
import Button from './Button';

const Form = (props) => {
  const { data, onChange, submit, formClass } = props;

  return (
    <form className={formClass} onSubmit={submit}>
      {
        data.map((item, index) => {
          const { label, type, name, value, fieldClass, labelClass, required } = item;

          return (
            <Fragment key={+index}>
              <Field
                label={label}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                fieldClass={fieldClass}
                labelClass={labelClass}
                required={required}
              />
            </Fragment>
          );
        })
      }

      <Button type="submit" value="Submit" btnClass="btn primary" />
    </form>
  );
};

Form.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()),
  formClass: PropTypes.string,
  onChange: PropTypes.func,
  submit: PropTypes.func,
};

Form.defaultProps = {
  data: [],
  formClass: '',
  onChange: null,
  submit: null,
};

export default Form;
