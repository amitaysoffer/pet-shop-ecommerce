const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const span = document.getElementsByClassName('close')[0];

// Close modal on click
btn.onclick = function () {
  modal.style.display = 'block';
};

// Close modal on X
span.onclick = function () {
  modal.style.display = 'none';
};

// Close modal on outside
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
