function registerUser() {
    var newUsername = document.querySelector(".new-username").value;
    var newPassword = document.querySelector(".new-password").value;
    var message = document.getElementById("register-message");

    // Verificar se os campos estão preenchidos
    if (newUsername === "" || newPassword === "") {
        message.textContent = "Preencha todos os campos!";
        message.style.color = "red";
        return;
    }

    // Obter usuários já cadastrados no localStorage
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Verificar se o usuário já existe
    var userExists = users.some(user => user.username === newUsername);
    if (userExists) {
        message.textContent = "Usuário já existe! Escolha outro nome.";
        message.style.color = "red";
        return;
    }

    // Adicionar novo usuário
    users.push({ username: newUsername, password: newPassword });
    localStorage.setItem("users", JSON.stringify(users));

    message.textContent = "Cadastro realizado com sucesso!";
    message.style.color = "green";

    // Redirecionar para login após o cadastro
    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);
}
