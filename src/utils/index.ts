export const isObject = <T>(a: T) => {
  return typeof a === "object" && a !== null;
};

export const shallowEqual = (a: any, b: any) => {
  if (!isObject(a) || !isObject(b)) {
    return a === b;
  }
  const keysA = Object.keys(a).length;
  const keysB = Object.keys(b).length;
  if (keysA !== keysB) {
    return false;
  }
  for (let key in a) {
    if (a.hasOwnProperty(key)) {
      if (a[key] !== b[key]) {
        return false;
      }
    }
  }
  return true;
};
