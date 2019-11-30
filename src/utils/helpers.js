export const formatObj = (obj, props) => {
  if (!obj || !props) return;

  let picked = {};
  props.forEach(prop => {
    picked[prop] = obj[prop];
  });

  return picked;
};

export const cleanData = f => {
  for (let key in f) {
    if (f[key] === null || f[key] === undefined || f[key] instanceof Error) {
      delete f[key];
    }
    if (Array.isArray(f[key])) {
      f[key] = f[key].join(", ");
    }
    if (
      (typeof f[key] === "string" || f[key] instanceof String) &&
      f[key].length === 0
    ) {
      delete f[key];
    }
    if (typeof f[key] === "boolean") {
      f[key] = `${f[key]}`;
    }
  }

  return f;
};
