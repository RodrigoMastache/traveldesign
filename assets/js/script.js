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

   // ** Validaciones formulario de contacto. **
   
(() => {
  'use strict';

  // Comprobar si existe al menos un formulario con la clase 'needs-validation'
  const forms = document.querySelectorAll('.needs-validation');
  if (forms.length === 0) {
    return; // Si no hay formularios, salir de la función
  }

  // Código de validación de formulario
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });

  // Manejo de etiquetas para destinos
  const destinosSelect = document.getElementById('destinos');
  const tagsContainer = document.getElementById('tagsContainer');
  const destinosHidden = document.getElementById('destinosHidden');
  const clearAllTags = document.querySelector('.clear-all-tags');
  let selectedDestinos = [];

  // Verificar si los elementos necesarios existen antes de continuar
  if (destinosSelect && tagsContainer && destinosHidden && clearAllTags) {
    destinosSelect.addEventListener('change', function () {
      const selectedValue = this.value;
      if (selectedValue && !selectedDestinos.includes(selectedValue)) {
        selectedDestinos.push(selectedValue);
        updateTags();
      }
      this.value = ' '; // Resetear el select
    });

    function updateTags() {
      tagsContainer.innerHTML = '';
      selectedDestinos.forEach(destino => {
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.innerHTML = `${destino} <span class="remove-tag" data-destino="${destino}">✕</span>`;
        tagsContainer.appendChild(tag);
      });

      // Actualizar el campo oculto para validación
      destinosHidden.value = selectedDestinos.length > 0 ? selectedDestinos.join(',') : '';

      // Mostrar/Ocultar botón de borrar todo
      clearAllTags.style.display = selectedDestinos.length > 0 ? 'block' : 'none';

      // Agregar evento para eliminar etiquetas individuales
      document.querySelectorAll('.remove-tag').forEach(button => {
        button.addEventListener('click', function () {
          const destinoToRemove = this.getAttribute('data-destino');
          selectedDestinos = selectedDestinos.filter(destino => destino !== destinoToRemove);
          updateTags();
        });
      });
    }

    // Borrar todas las etiquetas
    clearAllTags.addEventListener('click', function () {
      selectedDestinos = [];
      updateTags();
    });

    // Validar que al menos un destino esté seleccionado
    document.querySelector('form').addEventListener('submit', function (event) {
      if (selectedDestinos.length === 0) {
        destinosHidden.setCustomValidity('Selecciona al menos un destino');
      } else {
        destinosHidden.setCustomValidity('');
      }
    });
  }

  // Mostrar/Ocultar calendario y manejar fechas
  const fechasSi = document.getElementById('fechasSi');
  const fechasNo = document.getElementById('fechasNo');
  const calendarContainer = document.getElementById('calendarContainer');
  const fechaSalida = document.getElementById('fechaSalida');
  const fechaRegreso = document.getElementById('fechaRegreso');

  // Verificar si los elementos del calendario existen
  if (fechasSi && fechasNo && calendarContainer && fechaSalida && fechaRegreso) {
    // Establecer fecha mínima como hoy para fecha de salida
    const today = new Date().toISOString().split('T')[0];
    fechaSalida.setAttribute('min', today);

    // Actualizar fecha mínima de regreso según la fecha de salida
    fechaSalida.addEventListener('change', function () {
      const selectedDate = new Date(this.value);
      const nextDay = new Date(selectedDate);
      nextDay.setDate(selectedDate.getDate() + 1);
      const minDate = nextDay.toISOString().split('T')[0];
      fechaRegreso.setAttribute('min', minDate);

      // Si la fecha de regreso es anterior a la nueva fecha mínima, limpiarla
      if (fechaRegreso.value && new Date(fechaRegreso.value) < nextDay) {
        fechaRegreso.value = '';
      }
    });

    fechasSi.addEventListener('change', function () {
      if (this.checked) {
        calendarContainer.style.display = 'block';
        fechaSalida.required = true;
        fechaRegreso.required = true;
      }
    });

    fechasNo.addEventListener('change', function () {
      if (this.checked) {
        calendarContainer.style.display = 'none';
        fechaSalida.required = false;
        fechaRegreso.required = false;
        fechaSalida.value = '';
        fechaRegreso.value = '';
      }
    });
  }

  // Validar que al menos un checkbox esté seleccionado en tipo de viaje
  const tipoViajeCheckboxes = document.querySelectorAll('input[name="tipoViaje"]');
  if (tipoViajeCheckboxes.length > 0) {
    function validateCheckboxes(checkboxes) {
      return Array.from(checkboxes).some(checkbox => checkbox.checked);
    }

    document.querySelector('form').addEventListener('submit', function (event) {
      if (!validateCheckboxes(tipoViajeCheckboxes)) {
        tipoViajeCheckboxes[0].setCustomValidity('Selecciona al menos un tipo de viaje');
      } else {
        tipoViajeCheckboxes[0].setCustomValidity('');
      }
    });
  }
})();
