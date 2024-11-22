document.addEventListener('DOMContentLoaded', () => {
  // Referências aos elementos
  const loginForm = document.getElementById('login-form');

  // Credenciais válidas para login
  const validCredentials = {
    username: 'admin',
    password: '12345',
  };

  // Função para validar credenciais
  const validateLogin = (username, password) => {
    return username === validCredentials.username && password === validCredentials.password;
  };

  // Função para redirecionar após login bem-sucedido
  const redirectToCreateEventPage = () => {
    window.location.href = 'create-event.html'; // Certifique-se de que este arquivo exista no mesmo diretório
  };

  // Gerenciamento do evento de envio do formulário
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Evita o recarregamento da página

      // Obtém os valores dos campos de entrada
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();

      // Verifica as credenciais
      if (validateLogin(username, password)) {
        alert('Login bem-sucedido!');
        redirectToCreateEventPage();
      } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
      }
    });
  } else {
    console.error('Erro: O formulário de login não foi encontrado.');
  }
});
