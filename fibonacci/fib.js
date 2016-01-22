var fib = {

  calculateFast: function(position) {

    if (position === 0) {
      return 0;
    }
    if (position === 1) {
      return 1;
    }

    var last = 0;
    var secondToLast = 1;
    var fibo = 0;
    for (var i=1; i<position;i++) {
      fibo = last + secondToLast;

      last = secondToLast;
      secondToLast = fibo;
    }
    
    return fibo;
  },

  calculate: function fibonacci(position) {
    if (position === 0) {
      return 0;
    }
    if (position === 1) {
      return 1;
    }

    return fibonacci(position - 1) + fibonacci(position - 2);
  }
};