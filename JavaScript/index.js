// DOM elements
const pagerDisplayEl = document.getElementById('pager-display');
const phoneDisplayEl = document.getElementById('phone-display');
const resetButtonEl = document.getElementById('reset-btn');
const sendButtonEl = document.getElementById('send-btn');

const maxDisplayLimit = 10; // Set desired display limit

const notificationSound = new Audio('/assets/pager.wav');

// Function that renders the keys pressed on the phone display
function dialing(button) {
  const currentNumbers = phoneDisplayEl.innerText;

  // Check if the current numbers length exceeds the limit
  if (currentNumbers.length < maxDisplayLimit) {
    phoneDisplayEl.innerText += button;
  } else {
    alert('Button limit reached!');
  }
}

// Function that clears the phone display
function clearphoneDisplayEl() {
  phoneDisplayEl.innerText = '';
}

// Function that that clears the pager display
function clearpagerDisplayEl() {
  pagerDisplayEl.innerText = '';
}

// Event listener to render the phone display on the pager display
sendButtonEl.addEventListener('click', function () {
  const displayText = phoneDisplayEl.innerText; // Get the text content from phoneDisplayEl

  // Render pagerDisplayEl after a delay of 5 seconds (5000 milliseconds)
  setTimeout(function () {
    pagerDisplayEl.innerText = displayText;
    clearphoneDisplayEl();
    notificationSound.play(); // Play the notification sound
  }, 5000);
});

// Event listener to clear both displays when asked to reset
resetButtonEl.addEventListener('click', function () {
  clearphoneDisplayEl();
  clearpagerDisplayEl();
});
