const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function () {

};

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const number = event.detail;
    const payload = this.checkPrime(number);
    PubSub.publish('PrimeChecker:prime-checked', payload);
  });
};

PrimeChecker.prototype.checkPrime = function (number) {
  const halfWay = Math.ceil(Math.sqrt(number));
  let num = 2;

  while (num <= halfWay){
    if (number % num === 0) return true;
    num += 1;
  };

  return false;
};

module.exports = PrimeChecker;
