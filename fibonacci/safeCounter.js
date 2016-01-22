var getSafeCounter = function() {
  var value=0;
  return {
    getValue: function() {
      return value;
    },
    increment: function() {
      value++;
      return value;
    }
  };
};