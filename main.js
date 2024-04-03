/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show');
  });
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show');
});
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll');
  } else {
    // menor que a altura do header
    header.classList.remove('scroll');
  }
}

/* muda imagem a cada X segundos*/
const secondsToChange = 6;
var rotateToNextImage = function() {
    let images = document.querySelectorAll(".image.rotating img");
    let current = null;
    for (let index = 0; index < images.length; index++) {
        images[index].classList.remove("inactive");
        if (images[index].classList.contains("active")) {
            current = index;
        }
    }
    
    let next = current+1 >= images.length ? 0 : current+1;
    
    images[current].classList.remove("active");
    images[current].classList.add("inactive");
    images[next].classList.add("active");
};
setInterval(rotateToNextImage, secondsToChange * 1000);

/* Evento carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: false
});

scrollReveal.reveal(
  `#inicio .image, #inicio .text,
  #sobre .image, #sobre .text,
  #bio .image, #bio .text,
  #exposicao header, #exposicao .card,
  #galeria .title, #galeria .subtitle,
  #evento header, #evento .evento,
  #evento .eventos, #evento .note,
  #contato .text, #contato .links,
  footer .brand, footer .support,
  footer .devs
  `,
  { interval: 100 }
);

/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top');

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]');
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSection();
});

/* redimensionar iframe */
var resizeIframe = function() {
    const frame = document.querySelector("#frame iframe");
    frame.height = frame.offsetWidth * 0.5625;
};
resizeIframe();
window.addEventListener("resize", resizeIframe);
