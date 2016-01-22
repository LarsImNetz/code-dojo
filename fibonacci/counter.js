var getCounter = function() {


  return {
    value: 0,
    getValue: function() {
      return this.value;
    },
    increment: function() {
      this.value++;
      return this.value;
    }
  };
};