export default (search, param) => {
  const params = new URLSearchParams(search);
  return params.get(param);
};
