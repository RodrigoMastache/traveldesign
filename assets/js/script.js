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

// Slider experiencias

const thumbsSwiper = new Swiper('.thumbs-swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  slidesPerGroup: 3,
  watchSlidesProgress: true,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.thumbs-pagination',
      clickable: true,
      renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
      },
  },
  breakpoints: {
      320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
      },
      480: {
          slidesPerView: 3,
          slidesPerGroup: 3,
      }
  }
});

const mainSwiper = new Swiper('.main-swiper', {
  spaceBetween: 10,
  autoplay: {
      delay: 5000,
      disableOnInteraction: false,
  },
  thumbs: {
      swiper: thumbsSwiper,
  },
});

// Cards Slider
const swiperCards = new Swiper('.swiper-cards-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});


// Scroll Navbar

  const navbar = document.querySelector(".navbar");
  const logo_header = document.querySelector('#logo-header');

  function handleNavbarScroll(){
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
      logo_header.classList.add('order-first');
    } else {
      navbar.classList.remove('navbar-scrolled');
      logo_header.classList.remove('order-first');
    }

  }

// Verificar el estado del scroll cuando la página carga
document.addEventListener('DOMContentLoaded', handleNavbarScroll);

// Verificar el estado durante el scroll
window.addEventListener('scroll', handleNavbarScroll);



// Seleccionamos el enlace <link> de la hoja de estilo
const link = document.querySelector('link[rel="stylesheet"][href="assets/css/style.css"]');

if (link) {
  // Generamos un timestamp único
  const version = new Date().getTime();
  // Agregamos el timestamp como un parámetro en la URL del archivo CSS
  link.href = `${link.href}?v=${version}`;
}

// Carousel de logos
const logosCarousel = document.querySelector('.logos-carousel');
const logosSlide = document.querySelector('.logos-slide');
if (logosCarousel && logosSlide) {
  [1, 2, 3].forEach(() => {
    const copy = logosSlide.cloneNode(true);
    logosCarousel.appendChild(copy);
  });
}

