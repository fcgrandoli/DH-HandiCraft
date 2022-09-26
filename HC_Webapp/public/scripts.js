'use strict'
let loadFile = function (event) {
    var output = document.querySelector('.preview');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src);
    };
  };