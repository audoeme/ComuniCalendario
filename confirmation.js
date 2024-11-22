document.addEventListener('DOMContentLoaded', () => {
    const backToHomeButton = document.getElementById('back-to-home');
  
    if (backToHomeButton) {
      backToHomeButton.addEventListener('click', () => {
        window.location.href = 'index.html'; // Certifique-se de que 'index.html' está no mesmo diretório
      });
    } else {
      console.error('Botão de redirecionamento não encontrado.');
    }
  });
  