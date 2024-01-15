// menu

let list1 = Array.from(document.querySelectorAll('.list1 > a'));
let list2 = Array.from(document.querySelectorAll('.list2 > ul'));
let arrows = Array.from(document.querySelectorAll('.list1 img[alt="arrow"]'));
let mobileMenu = document.querySelector('.mobileMenu');
let dropdownBtn = document.getElementById('dropdownBtn');
let hamIcon = document.getElementById('hamIcon');
let serviceLink = document.getElementById('service-link');
let dropdown = document.querySelector('.dropdown');

list1.forEach((item) => {
  item.addEventListener('mouseover', function () {
    arrows.forEach((item)=>{item.classList.add('opacity-0')})
    item.querySelector('img[alt="arrow"]').classList.remove('opacity-0');
    let tabId = item.dataset.id;
    list2.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.classList.add('grid');
        content.classList.remove('hidden');
      } else {
        content.classList.remove('grid');
        content.classList.add('hidden');
      }
    })
  })
});

dropdownBtn.addEventListener('click', function () {
  this.querySelector('svg').classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
})

hamIcon.addEventListener('click', function () {
  mobileMenu.classList.add('active');
})
document.getElementById('closemenu').addEventListener('click', function () {
  mobileMenu.classList.remove('active');
})
document.querySelector('.language-link').addEventListener('mouseenter', function () {
  dropdown.classList.remove('active');
  document.querySelector('.servicesArrow').classList.remove('opacity-100');
  document.querySelector('.servicesArrow').classList.add('opacity-0');
})
serviceLink.addEventListener('mouseenter', function () {
  dropdown.classList.add('active');
  document.querySelector('.servicesArrow').classList.add('opacity-100');
  document.querySelector('.servicesArrow').classList.remove('opacity-0');
  langDropdown.forEach((item) => {
    item.classList.remove('active');
  })
})

document.addEventListener('mousemove', (event) => {
  if (!event.target.closest('.dropdown') && !event.target.closest('.dropdownArea')) {
    dropdown.classList.remove('active');
    document.querySelector('.servicesArrow').classList.remove('opacity-100');
    document.querySelector('.servicesArrow').classList.add('opacity-0');
  }
})

// swiper

var banner = new Swiper(".banner", {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var banner2 = new Swiper(".banner2", {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var banner3 = new Swiper(".banner3", {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  }
});
var category = new Swiper(".category", {
  slidesPerView: 1.3,
  spaceBetween: 20,
  // autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    1200: {
      slidesPerView: 3,
    }
  },
});
var services = new Swiper(".services", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 1.3,
  breakpoints: {
    576: {
      slidesPerView: 2.3,
    },
    768: {
      spaceBetween: 37
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    }
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// change language

let langItems = Array.from(document.querySelectorAll('.langDropdown > div'));
let languageLink = Array.from(document.querySelectorAll('.language-link'));
let langDropdown = Array.from(document.querySelectorAll('.langDropdown'));
let langIcons = Array.from(document.querySelectorAll('.langIcon'));
let swiper = Array.from(document.querySelectorAll('.swiper'));

languageLink.forEach((item) => {
  item.addEventListener('click', function () {
    langDropdown.forEach((item) => {
      item.classList.toggle('active');
    })
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.langDropdown') && !event.target.closest('.language-link')) {
        langDropdown.forEach((item) => {
          item.classList.remove('active');
        })
      }
    })
  })
})

langItems.forEach((item) => {
  item.addEventListener('click', function () {
    let langIcon = item.querySelector('img').src;
    langIcons.forEach((item) => [
      item.src = langIcon
    ])
    langDropdown.forEach((item) => {
      item.classList.remove('active');
    })
    let tabId = item.dataset.id;
    if (tabId == 1) {
      document.getElementById('langText').textContent = 'ENG';
      document.documentElement.dir = 'ltr';
      swiper.forEach((item)=>{
        item.dir='ltr';
      })
    }
    if (tabId == 2) {
      document.getElementById('langText').textContent = 'FA';
      document.documentElement.dir = 'rtl';
    }
  })
});

// radio input

let addressItem=Array.from(document.getElementsByClassName('addressItem'));

addressItem.forEach((item)=>{
  item.addEventListener('click',function () {
    addressItem.forEach((items)=>{items.classList.remove('active')});
    item.classList.add('active');
  })
})