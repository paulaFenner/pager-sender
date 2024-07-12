const pagerDisplayEl = document.querySelector('.pager-display');
const phoneDisplayEl = document.querySelector('.phone-display');
const resetBtnEl = document.querySelector('.reset-btn');
const sendBtnEl = document.querySelector('.send-btn');
const dialingPadEl = document.querySelector('.dialing-pad');

dialingPadEl.addEventListener('click', numberDialed);
resetBtnEl.addEventListener('click', resetAll);
sendBtnEl.addEventListener('click', renderPagerDisplay);

function numberDialed(e) {
  const maxNumber = 10;
  if (e.target.classList.contains('key')) {
    const value = e.target.innerText;
    if (phoneDisplayEl.innerText.length < maxNumber) {
      phoneDisplayEl.innerText += value;
    }
  } else {
    alert('Please, click a button!');
  }
}

function renderPagerDisplay() {
  setTimeout(() => {
    pagerDisplayEl.innerText = phoneDisplayEl.innerText;
    let bippingTone = new Audio('/assets/pager.wav');
    bippingTone.play();
    phoneDisplayEl.innerText = '';
  }, 1000);
}

function resetAll() {
  pagerDisplayEl.innerText = '';
}
