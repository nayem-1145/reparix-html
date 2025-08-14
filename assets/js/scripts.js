document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('[data-background]').forEach(function(el) {
    el.style.backgroundImage = 'url("' + el.getAttribute('data-background') + '")';
  });




});