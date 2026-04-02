export const UtilObject = {
  EMPTY_OBJECT: {},
  isEmpty: (obj) => {
    return !obj || Object.keys(obj).length === 0;
  },
  isObject: (item) => {
    return item && typeof item === 'object' && !Array.isArray(item);
  },
  deepClone: (obj) => {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map((item) => UtilObject.deepClone(item));
    }

    const cloned = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = UtilObject.deepClone(obj[key]);
      }
    }
    return cloned;
  },
  deepMerge: (target, source) => {
    const output = { ...target };
    if (UtilObject.isObject(target) && UtilObject.isObject(source)) {
      Object.keys(source).forEach((key) => {
        if (UtilObject.isObject(source[key])) {
          if (!(key in target)) {
            output[key] = source[key];
          } else {
            output[key] = UtilObject.deepMerge(target[key], source[key]);
          }
        } else {
          output[key] = source[key];
        }
      });
    }
    return output;
  },
};
