var makeAdder = function(value) {
  return function add(wert) {
    return value + wert;
  };
};
