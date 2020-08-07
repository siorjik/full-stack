export default {
  login: [
    {
      type: 'required',
      message: 'Please enter the login.',
    }
  ],
  password: [
    {
      type: 'required',
      message: 'Please enter the password.',
    },
    {
      type: 'password',
      message: 'The password length needs to be more than three symbols.',
    }
  ],
};