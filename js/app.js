/* #Header
    ======================================================= */

// Hamburger
const header = document.querySelector('.header');
const hamburgerBtn = document.querySelector('.header-hamburger');

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', (e) => {
    header.classList.toggle('show');
    body.classList.toggle('no-scroll');
  });
}

// Dropdown
const headerDropdownCollapse = document.querySelector('.header-dropdown-collapse');
const headerDropdownMenu = document.querySelector('.header-dropdown-menu');

headerDropdownCollapse.addEventListener('click', (e) => {
  e.preventDefault();
  headerDropdownMenu.classList.toggle('show');
  headerDropdownCollapse.classList.toggle('active')
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.header-dropdown-collapse') && !e.target.closest('.header-dropdown-menu') && headerDropdownMenu.classList.contains('show')) {
    headerDropdownMenu.classList.remove('show');
    headerDropdownCollapse.classList.remove('active')
  }
});

/* #Banner Slider
  ======================================================= */
if (document.querySelector('.banner .swiper')) {
  new Swiper('.banner .swiper', {
    loop: true,
    pagination: {
      el: '.banner .swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.banner .next',
      prevEl: '.banner .prev',
    },
  });
}

/* #Post Slider
  ======================================================= */
if (document.querySelector('.post-slider .swiper')) {
  const postSliderEl = document.querySelector('.post-slider');

  if (!postSliderEl.classList.contains('alt')) {
    new Swiper(".post-slider .swiper", {
      pagination: {
        el: ".post-slider .swiper-pagination",
        type: "progressbar",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.13
        },
        1024: {
          slidesPerView: 3.33
        }
      }
    });
  } else {
    new Swiper(".post-slider .swiper", {
      pagination: {
        el: ".post-slider .swiper-pagination",
        type: "progressbar",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.05
        },
        1024: {
          slidesPerView: 2.8
        }
      }
    });
  }
}

/* #Product Slider
  ======================================================= */
if (document.querySelector('.product-slider .swiper')) {
  new Swiper(".product-slider .swiper", {
    pagination: {
      el: ".product-slider .swiper-pagination",
      type: "progressbar",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.33
      },
      1024: {
        slidesPerView: 3.4
      }
    }
  });
}

/* #Reviews Slider
  ======================================================= */
if (document.querySelector('.reviews-slider .swiper')) {
  new Swiper(".reviews-slider .swiper", {
    pagination: {
      el: ".reviews-slider .swiper-pagination",
      type: "progressbar",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.13
      },
      1024: {
        slidesPerView: 3.8
      }
    }
  });
}

/* #Customers Logo Slider
  ======================================================= */
if (document.querySelector('.running-logos .swiper')) {
  new Swiper(".running-logos .swiper", {
    loop: true,
    freeMode: true,
    spaceBetween: 0,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 1
    },
    allowTouchMove: false,
    freeMode: true,
    speed: 4000,
    freeModeMomentum: false,
    breakpoints: {
      0: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 6,
      }
    }
  });
}

/* #Media 2 Slider
======================================================= */
if (document.querySelector('.media-2 .swiper')) {
  new Swiper('.media-2 .swiper', {
    loop: true,
    navigation: {
      nextEl: '.media-2 .next',
      prevEl: '.media-2 .prev',
    },
  });
}

/* #Text Collapse
======================================================= */
if (document.querySelectorAll('.text-collapse')) {
  const textCollapses = document.querySelectorAll('.text-collapse'); 

  textCollapses.forEach((textCollapse) => {
    textCollapse.addEventListener('click', (e) => {
      if (e.target.closest('.text-collapse-toggler')) {
        e.preventDefault();
        textCollapse.classList.toggle('show');
      }
    });
  })
}