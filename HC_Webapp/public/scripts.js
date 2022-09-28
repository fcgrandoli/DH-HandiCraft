'use strict';
const loadFile = function (event) {
  var output = document.querySelector('.preview');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src);
  };
};

const msghandler = function (feed, msgBackend, value) {
  if (window.getComputedStyle(feed).display === 'none') {
    feed.style.display = 'flex';
  }
  setTimeout(() => {
    feed.style.display = 'none';
  }, 3000);
  if (msgBackend && value.length == 0) {
    msgBackend.style.display = 'flex';
    feed.style.display = 'none';
    setTimeout(() => {
      msgBackend.style.display = 'none';
    }, 2000);
  } else if (msgBackend) {
    msgBackend.style.display = 'none';
  }
};

const setRedBorder = function (input) {
  return input.style.borderBottom = '3px solid hsla(4, 72%, 50%, 1)';
};
const setGreenBorder = function (input) {
  return input.style.borderBottom = '3px solid #7cc6b0';
};
const setRedBackground = function (input) {
  return input.style.backgroundColor = 'hsla(4, 72%, 50%, 1)';
};
const setGreenBackground = function (input) {
  return input.style.backgroundColor = '#7cc6b0';
};
