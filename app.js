document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.getElementById('event-form');
    const eventList = document.getElementById('event-list');
    const highlightEventsContainer = document.getElementById('highlight-events-container');
  
    // Eventos fornecidos
    let highlightEvents = [
      {
        id: '1',
        title: 'Brincadeiras Antigas para a Nova Geração',
        date: '2024-11-20',
        location: 'UBS IV Centenário',
        description: 'Resgatando brincadeiras antigas para entreter e ensinar as novas gerações.',
        image: './src/images/brincadeiras_300x200.jpg',
      },
      {
        id: '2',
        title: 'Atividades de Apoio aos Idosos',
        date: '2024-09-24',
        location: 'Centro Villa dei Fiori',
        description: 'Atividades especialmente planejadas para promover o bem-estar e interação entre idosos.',
        image: './src/images/apoio_300x200.jpg',
      },
      {
        id: '3',
        title: 'Caminhada da Paz',
        date: '2024-10-21',
        location: 'Praça Cataguarino',
        description: 'Uma caminhada pela paz e união da comunidade.',
        image: './src/images/caminhada_paz_300x200.jpg',
      },
      {
        id: '4',
        title: 'Orientação de Nutrição',
        date: '2024-11-08',
        location: 'UBS IV Centenário',
        description: 'Sessão de orientação com dicas nutricionais para um estilo de vida saudável.',
        image: './src/images/nutricao_300x200.jpg',
      },
      {
        id: '5',
        title: 'Oficina de Fuxico',
        date: '2024-10-30',
        location: 'UBS IV Centenário',
        description: 'Uma oficina criativa para aprender a arte de fuxico.',
        image: './src/images/fuxico_300x200.jpg',
      },
      {
        id: '6',
        title: 'Prevenção do câncer de boca e serviço de prótese dentária',
        date: '2024-10-23',
        location: 'UBS IV Centenário',
        description: 'Sessão informativa sobre prevenção do câncer de boca e acesso a próteses dentárias.',
        image: './src/images/cancer_boca_300x200.jpg',
      },
    ];
  
    // Ordenar eventos por data crescente
    highlightEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
  
    // Renderizar eventos destacados
    function renderHighlightEvents(events) {
      events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
          <img src="${event.image}" alt="${event.title}">
          <h3>${event.title}</h3>
          <p>📅 ${new Date(event.date).toLocaleDateString('pt-BR')}</p>
          <p>📍 ${event.location}</p>
          <p class="event-description" style="display: none;">${event.description}</p>
          <button class="btn-dropdown">Ver mais</button>
        `;
        const btnDropdown = eventCard.querySelector('.btn-dropdown');
        const description = eventCard.querySelector('.event-description');
  
        // Alternar visibilidade da descrição
        btnDropdown.addEventListener('click', () => {
          const isHidden = description.style.display === 'none';
          description.style.display = isHidden ? 'block' : 'none';
          btnDropdown.textContent = isHidden ? 'Ver menos' : 'Ver mais';
        });
  
        highlightEventsContainer.appendChild(eventCard);
      });
    }
  
    renderHighlightEvents(highlightEvents);
  
    // Configuração do carrossel
    let currentIndex = 0;
    const slides = document.querySelector('.carousel-container');
    const totalSlides = slides.children.length;
  
    function showNextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  
    setInterval(showNextSlide, 3000); // Troca de slide a cada 3 segundos
  });
  