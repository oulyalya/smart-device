'use strict';

(function () {
  const form = document.querySelector('form');
  const inputName = form.querySelector('#feedback-name');
  const inputTel = form.querySelector('#feedback-tel');
  const textarea = form.querySelector("#feedback-textarea");
  const submitBtn = form.querySelector('#feedback-submit');

  let isStorageName = true;
  let isStorageTel = true;

  let storedName = '';
  let storedTel = '';

  submitBtn.addEventListener('click', function (evt) {
    evt.preventDefault();

    const username = inputName.value;
    const tel = inputTel.value;

    if (username && tel) {

      localStorage.setItem('name', username);
      localStorage.setItem('telephone', tel);
    }
  })

  inputName.addEventListener('focus', () => {
    try {
      storedName = localStorage.getItem('name');
    } catch (err) {
      isStorageName = false;
    }

    if (storedName) {
      inputName.value = localStorage.getItem('name');
      inputTel.focus();
    }
  })

  inputTel.addEventListener('focus', () => {
    try {
      storedTel = localStorage.getItem('telephone');
    } catch (err) {
      isStorageTel = false;
    }

    if (storedTel) {
      inputTel.value = localStorage.getItem('telephone');
      textarea.focus();
    }
  })
})();
