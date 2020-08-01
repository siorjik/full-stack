import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';

const UserForm = (props) => {
  const { user, disabled, update } = props;

  const [userForm] = Form.useForm();
  
  useEffect(() => {
    userForm.setFieldsValue({ ...user });
  }, [user, userForm]);

  const submit = (values) => {
    update(values);
  }

  return (
    <Form
      form={userForm}
      name="edit"
      layout="vertical"
      onFinish={submit}
      disabled={true}
    >
      <Form.Item
        label="First name"
        name="firstName"
        rules={[{ required: true, message: 'Please input your first name!' }]}
      >
        <Input disabled={disabled} />
      </Form.Item>

      <Form.Item
        label="Last name"
        name="lastName"
        rules={[{ required: true, message: 'Please input your last name!' }]}
      >
        <Input disabled={disabled} />
      </Form.Item>

      <Form.Item
        label="Login"
        name="login"
        rules={[{ required: true, message: 'Please input your login!' }]}
      >
        <Input disabled={disabled} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password disabled={disabled} />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input disabled={disabled} />
      </Form.Item>

      {! disabled && <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>}
    </Form>
  );
};

UserForm.propTypes = {
  disabled: PropTypes.bool.isRequired,
  update: PropTypes.func,
  user: PropTypes.shape().isRequired,
};

UserForm.defaultProps = {
  update: null,
};

export default UserForm;
