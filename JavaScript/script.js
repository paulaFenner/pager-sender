const pagerDisplayEl = document.querySelector('.pager-display');
const phoneDisplayEl = document.querySelector('.phone-display');
const resetBtnEl = document.querySelector('.reset-btn');
const sendBtnEl = document.querySelector('.send-btn');
const dialingPadEl = document.querySelector('.dialing-pad');

dialingPadEl.addEventListener('click', numberDialed);
resetBtnEl.addEventListener('click', clearPagerDisplay);
sendBtnEl.addEventListener('click', renderPagerDisplay);

function numberDialed(e) {
  const maxNumber = 10;
  if (e.target.classList.contains('key')) {
    const value = e.target.innerText;
    if (phoneDisplayEl.innerText.length < maxNumber) {
      phoneDisplayEl.innerText += value;
    }
  }
}

function renderPagerDisplay() {
  setTimeout(() => {
    pagerDisplayEl.innerText = phoneDisplayEl.innerText;
    ringTone();
    clearPhoneDisplay();
  }, 1000);
}

function ringTone() {
  const bippingTone = new Audio('/assets/pager.wav');
  bippingTone.play();
}

function clearPagerDisplay() {
  pagerDisplayEl.innerText = '';
}

function clearPhoneDisplay() {
  phoneDisplayEl.innerText = '';
}
