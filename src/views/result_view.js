const PubSub =  require('../helpers/pub_sub.js');

const ResultView = function(){

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:prime-checked', (event) => {
    this.displayResult(event.detail);
  });
};

ResultView.prototype.displayResult = function (result) {
  const resultDisplay = document.querySelector('#result');
  resultDisplay.textContent = `The number ${result ? 'is not' : 'is'} a prime.`;
};


module.exports = ResultView;
