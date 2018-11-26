const PubSub =  require('../helpers/pub_sub.js');

const FormView = function(){

};

FormView.prototype.bindEvents = function () {
  const form = document.querySelector('#prime-checker-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const number = event.target.number.value;
    PubSub.publish('FormView:number-submitted', number);
  });
};

module.exports = FormView;
