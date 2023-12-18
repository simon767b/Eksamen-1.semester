function changeImages() {
    var images = document.getElementsByClassName('responsive-image');

    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      var largeSrc = image.getAttribute('data-large');

      if (window.innerWidth >= 800) {
        image.src = largeSrc;
      } else {
        image.src = largeSrc;
      }
    }
  }

  // Initial check on page load
  changeImages();

  // Add event listener to check whenever the window is resized
  window.addEventListener('resize', changeImages);