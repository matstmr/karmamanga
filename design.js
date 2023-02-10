const titreSpans = document.querySelectorAll('h2 span');
const logo = document.querySelector('.logo');
const cards = document.querySelectorAll('section .card');

window.addEventListener('load', () => {

  const TL = gsap.timeline({ paused: true })

  TL
    .staggerFrom(titreSpans, 0.4, { top: -50, opacity: 0, ease: "power2.out" }, 0.1)
    .staggerFrom(logo, 0.4, { top: -60, opacity: 0, ease: "power2.out" }, 0.1)
    .staggerFrom(cards, 0.4, { top: -450, opcaity: 0, ease: "power2.out" }, 0.1)

  TL.play();
});

/* ANIMATION DE NARUTO */
const animNaruto = document.querySelector('section .card .card-content .Naruto');

animNaruto.addEventListener('click', function () {
  document.querySelector('body').classList.add('couleur-Naruto');
  document.querySelector('section').classList.add('fade');
  setTimeout(function () {
    document.location.href = 'narutod.html';
  }, 1000);

  setTimeout(function () {
    document.querySelector('body').classList.remove('couleur-Naruto');
    document.querySelector('section').classList.remove('fade');
  }, 4000)
});


/* ANIMATION DE ONE PIECE */
const animOnePiece = document.querySelector('section .card .card-content .OnePiece');

animOnePiece.addEventListener('click', function () {
  document.querySelector('body').classList.add('couleur-OnePiece');
  document.querySelector('section').classList.add('fade');
  setTimeout(function () {
    document.location.href = 'opd.html';
  }, 1000);

  setTimeout(function () {
    document.querySelector('body').classList.remove('couleur-OnePiece');
    document.querySelector('section').classList.remove('fade');
  }, 4000)
});

/* ANIMATION DE SNK */
const animSNK = document.querySelector('section .card .card-content .Snk');

animSNK.addEventListener('click', function () {
  document.querySelector('body').classList.add('couleur-Snk');
  document.querySelector('section').classList.add('fade');
  setTimeout(function () {
    document.location.href = 'snkd.html';
  }, 1000);

  setTimeout(function () {
    document.querySelector('body').classList.remove('couleur-Snk');
    document.querySelector('section').classList.remove('fade');
  }, 4000)
});

/* ANIMATION DE MHA */
const animMHA = document.querySelector('section .card .card-content .MHA');

animMHA.addEventListener('click', function () {
  document.querySelector('body').classList.add('couleur-MHA');
  document.querySelector('section').classList.add('fade');
  setTimeout(function () {
    document.location.href = 'mhad.html';
  }, 1000);

  setTimeout(function () {
    document.querySelector('body').classList.remove('couleur-MHA');
    document.querySelector('section').classList.remove('fade');
  }, 4000)
});

/* ANIMATION DE DEMON SLAYER*/
const animDemon = document.querySelector('section .card .card-content .DemonSlayer');

animDemon.addEventListener('click', function () {
  document.querySelector('body').classList.add('couleur-DemonSlayer');
  document.querySelector('section').classList.add('fade');
  setTimeout(function () {
    document.location.href = 'demond.html';
  }, 1000);

  setTimeout(function () {
    document.querySelector('body').classList.remove('couleur-DemonSlayer');
    document.querySelector('section').classList.remove('fade');
  }, 4000)
});


/* ANIMATION DE HUNTER X HUNTER*/
const animHXH = document.querySelector('section .card .card-content .HXH');

animHXH.addEventListener('click', function () {
  document.querySelector('body').classList.add('couleur-HXH');
  document.querySelector('section').classList.add('fade');
  setTimeout(function () {
    document.location.href = 'hunterd.html';
  }, 1000);

  setTimeout(function () {
    document.querySelector('body').classList.remove('couleur-HXH');
    document.querySelector('section').classList.remove('fade');
  }, 4000)
});

/* ANIMATION DE DRAGON BALL*/
const animDragonBall = document.querySelector('section .card .card-content .DragonBall');

animDragonBall.addEventListener('click', function () {
  document.querySelector('body').classList.add('couleur-DragonBall');
  document.querySelector('section').classList.add('fade');
  setTimeout(function () {
    document.location.href = 'dbzd.html';
  }, 1000);

  setTimeout(function () {
    document.querySelector('body').classList.remove('couleur-DragonBall');
    document.querySelector('section').classList.remove('fade');
  }, 4000)
});


/* ANIMATION DE DR.STONE*/
const animDrStone = document.querySelector('section .card .card-content .DrStone');

animDrStone.addEventListener('click', function () {
  document.querySelector('body').classList.add('couleur-DrStone');
  document.querySelector('section').classList.add('fade');
  setTimeout(function () {
    document.location.href = 'stoned.html';
  }, 1000);

  setTimeout(function () {
    document.querySelector('body').classList.remove('couleur-DrStone');
    document.querySelector('section').classList.remove('fade');
  }, 4000)
});


/* ANIMATION DE BLACK CLOVER*/
const animBlackClover = document.querySelector('section .card .card-content .BlackClover');

animBlackClover.addEventListener('click', function () {
  document.querySelector('body').classList.add('couleur-BlackClover');
  document.querySelector('section').classList.add('fade');
  setTimeout(function () {
    document.location.href = 'clover.html';
  }, 1000);

  setTimeout(function () {
    document.querySelector('body').classList.remove('couleur-BlackClover');
    document.querySelector('section').classList.remove('fade');
  }, 4000)
});