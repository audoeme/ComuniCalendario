document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.getElementById('event-form');
  
    eventForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Evita o comportamento padrão de recarregar a página
  
      // Captura os dados do formulário
      const eventName = document.getElementById('event-name').value.trim();
      const eventDate = document.getElementById('event-date').value.trim();
      const eventTime = document.getElementById('event-time').value.trim();
      const eventLocation = document.getElementById('event-location').value.trim();
      const eventDescription = document.getElementById('event-description').value.trim();
  
      // Verifica se todos os campos obrigatórios estão preenchidos
      if (!eventName || !eventDate || !eventTime || !eventLocation) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
  
      // Simula o armazenamento do evento (opcional)
      console.log('Evento adicionado:', {
        name: eventName,
        date: eventDate,
        time: eventTime,
        location: eventLocation,
        description: eventDescription,
      });
  
      // Redireciona para a página de confirmação
      window.location.href = 'confirmation.html';
    });
  });
  