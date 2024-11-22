document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('register-form');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm-password').value;
  
      if (password !== confirmPassword) {
        alert('As senhas não coincidem. Tente novamente.');
        return;
      }
  
      // Simula um registro bem-sucedido
      alert(`Usuário ${username} registrado com sucesso!`);
  
      // Redirecionar para a página de login
      window.location.href = 'login.html';
    });
  });
  