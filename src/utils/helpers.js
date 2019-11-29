export const formatObj = (obj, props) => {
  if (!obj || !props) return;

  let picked = {};
  props.forEach(prop => {
    picked[prop] = obj[prop];
  });

  return picked;
};
