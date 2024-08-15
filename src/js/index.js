document.addEventListener('DOMContentLoaded', () => {
  // Tema
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.documentElement.classList.add(currentTheme);
    updateIcon(); // Atualiza o ícone ao carregar a página
  }

  const themeToggleButton = document.getElementById('theme-toggle');
  themeToggleButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    updateIcon(); // Atualiza o ícone ao alternar o tema
  });

  function updateIcon() {
    const icon = document.querySelector('#theme-toggle i');
    if (document.documentElement.classList.contains('dark')) {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  }

  // Formulário
  document.getElementById('contact-form').addEventListener('submit', function(event) {

    const formData = new FormData(this);

    fetch('https://api.staticforms.xyz/submit', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(() => {
      alertSuccess();
    })
    .catch(error => {
      console.error('Erro:', error);
      alert('Houve um problema ao enviar a mensagem.');
    });
  });

  function alertSuccess() {
    alert('Seu e-mail foi enviado com sucesso!');
  }
});

// SWIPER 

const swiper = new Swiper('.swiper-container', {
  loop: true,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
      640: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 30,
      },
  },
});

