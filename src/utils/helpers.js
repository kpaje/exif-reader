export const formatObj = (obj, props) => {
  if (!obj || !props) return;
  var picked = {};
  props.forEach(function(prop) {
    picked[prop] = obj[prop];
  });
  return picked;
};
