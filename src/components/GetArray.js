const GetArray = (val) => {
  const isArray = val.indexOf("[") === 0 && val.indexOf("]") === val.length - 1;

  return isArray ? val.slice(1, val.length - 1).split(",") : [];
};

export default GetArray;
