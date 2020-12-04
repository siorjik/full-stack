const getValidationData = (pattern, data) => {
  const arr = [];

  Object.keys(pattern).forEach((key) => {
    for(let [, value] of Object.entries(pattern[key])) {
      Object.keys(data).map((dataKey) => {
        if (dataKey === key) {
          return arr.push({ ...value, value: data[dataKey], name: dataKey });
        } else return false;
      });
    }
  });

  return arr;
};

export default (validations, state) => {
  const data = getValidationData(validations, state);
  const obj = {};

  data.map((item) => {
    obj[item.name] = Array.isArray(obj[item.name]) ? [...obj[item.name]] : [];
    
    switch (item.type) {
      case 'required':
        if (!item.value.length) obj[item.name] = [...obj[item.name], { type: item.type, message: item.message }];
        break;
      case 'password':
        if (item.value.length <= 3) obj[item.name] = [...obj[item.name], { type: item.type, message: item.message }];
        break;

      default: return obj;
    }

    Object.keys(obj).forEach(key => !obj[key].length && delete obj[key]);

    return null;
  });

  return obj;
};
