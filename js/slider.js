var splide = new Splide('#Our-products', {
    perPage: 4,
    focus: 0,
    arrows: false,
    wheel: true,
    breakpoints: {
      1199: {
        perPage: 2.5,
      },
      767: {
        perPage: 1,
      },
    },
  });
  
  splide.mount();
  
  var splide = new Splide('#slider2', {
    perPage: 3,
    focus: 0,
    arrows: false,
    wheel: true,
    breakpoints: {
      1199: {
        perPage: 2,
      },
      767: {
        perPage: 1,
      },
    },
  });
  
  splide.mount();