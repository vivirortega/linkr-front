const isObject = (obj) => {
  return obj != null && typeof obj === 'object';
};

const isEqual = (obj1, obj2) => {
  if (!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2;
  }

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let key in obj1) {
    const value1 = obj1[key];
    const value2 = obj2[key];
    const areObjects = isObject(value1) && isObject(value2);

    if (
      (areObjects && !isEqual(value1, value2)) ||
      (!areObjects && value1 !== value2)
    ) {
      return false;
    }
  }

  return true;
};

const includesObject = (arr, objToFind) => {
  return arr.some((obj) => isEqual(obj, objToFind));
};

export { isEqual, includesObject };
