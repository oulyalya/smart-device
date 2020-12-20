'use strict';

(function () {
  const blocks = document.querySelectorAll('.accordion-block');

  blocks.forEach(function (block) {
    block.classList.add('accordion-block--closed');

    block.addEventListener('click', function () {
      block.classList.toggle('accordion-block--closed');
      block.classList.toggle('accordion-block--open');
    })
  })
})();

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

'use strict';

(function () {
  const callBackButton = document.querySelector('#callback-button');
  const overlay = document.querySelector('#overlay');
  const popup = document.querySelector('#popup');
  const inputName = popup.querySelector('#callback-name');
  const closePopupBtn = popup.querySelector('#popup__close');

  const showPopup = function () {
    popup.classList.add('appear');

    overlay.style.display = 'block';
    popup.style.display = 'block';
  };

  const hidePopup = function () {
    overlay.style.display = 'none';
    popup.style.display = 'none';
    callBackButton.addEventListener('click', openPopupHandler);
  };

  const openPopupHandler = function () {
    showPopup();
    inputName.focus();
    overlay.addEventListener('click', overlayPressHandler);
    document.addEventListener('keydown', escPressHandler);
    closePopupBtn.addEventListener('click', closePopupBtnHandler);
    callBackButton.removeEventListener('click', openPopupHandler);
  };

  const closePopupBtnHandler = function () {
    hidePopup();
  };

  const overlayPressHandler = function (evt) {
    if (!evt.target.closest('#popup')) {
      hidePopup();
    }
  }

  const escPressHandler = function (evt) {
    if (evt.key === 'Escape') {
      hidePopup();
    }
  };

  callBackButton.addEventListener('click', openPopupHandler);
})();
