function toggleBurgerMenu() {
    const burgerMenuBtn = document.querySelector('.burger-menu-btn');
    const burgerMenu = document.querySelector('.burger-menu');
  
    burgerMenuBtn.classList.toggle('open');
    burgerMenu.style.display = burgerMenu.style.display === 'flex' ? 'none' : 'flex';
  }