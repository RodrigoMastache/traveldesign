// Slider Hero
const swiper = new Swiper('.swiper-hero', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination-hero',
    clickable: true,
  },
});

// Slider Top 10
var swiperTop10 = new Swiper('.swiper-top-10', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: false,
  pagination: {
    el: '.swiper-pagination-top-10',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});

// Scroll Navbar

  const navbar = document.querySelector(".navbar");

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });



// Seleccionamos el enlace <link> de la hoja de estilo
const link = document.querySelector('link[rel="stylesheet"][href="assets/css/style.css"]');

if (link) {
  // Generamos un timestamp único
  const version = new Date().getTime();
  // Agregamos el timestamp como un parámetro en la URL del archivo CSS
  link.href = `${link.href}?v=${version}`;
}
