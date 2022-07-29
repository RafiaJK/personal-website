const network = document.getElementsByClassName('networkBox')[0];
network.addEventListener('mouseover', function mouseOver() {
  network.style.color = 'orange';
});

network.addEventListener('mouseout', function mouseOut() {
  network.style.color = 'black';
});

network.addEventListener('click', function() {
  alert("Let's be friends!");
});




