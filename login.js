function login() {
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    // Aqui você colocaria a lógica para validar as credenciais.
    // Por exemplo, você pode verificar se o usuário e senha são válidos.

    // Vamos apenas fazer uma validação básica para demonstração.
    if (user === "admin" && password === "1234") {
        // Redirecionar para a página de sucesso ou fazer outra coisa aqui.
        alert("Login bem-sucedido!");
    } else {
        // Exibir o alerta de credenciais inválidas.
        document.getElementById("alert").style.display = "block";
    }
}