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

/* #Expertise
  ======================================================= */
if (document.querySelector('.expertise .swiper')) {
  new Swiper(".expertise .swiper", {
    pagination: {
      el: ".expertise .swiper-pagination",
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
}

/* #Customers Logo Slider
  ======================================================= */
if (document.querySelector('.customers .swiper')) {
  new Swiper(".customers .swiper", {
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

/* #Why Slider
======================================================= */
if (document.querySelector('.why .swiper')) {
  new Swiper('.why .swiper', {
    loop: true,
    navigation: {
      nextEl: '.why .next',
      prevEl: '.why .prev',
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