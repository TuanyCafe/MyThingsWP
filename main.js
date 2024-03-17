document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o usuário está logado
    var isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        // Se o usuário não estiver logado, redireciona para a página de login
        window.location.href = 'login.html';
    }
});
