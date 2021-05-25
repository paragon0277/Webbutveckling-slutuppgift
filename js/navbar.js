function navFunction() {
  document.getElementById("navmyDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.navdropbtn')) {
  var navmyDropdown = document.getElementById("navmyDropdown");
    if (navmyDropdown.classList.contains('show')) {
      navmyDropdown.classList.remove('show');
    }
  }
}
