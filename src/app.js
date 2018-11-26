const FormView =  require('./views/form_view.js');
const ResultView =  require('./views/result_view.js');
const PrimeChecker =  require('./models/prime_checker.js');

document.addEventListener('DOMContentLoaded', () => {
  const form = new FormView();
  form.bindEvents();

  const result = new ResultView();
  result.bindEvents();

  const prime = new PrimeChecker();
  prime.bindEvents();

});
