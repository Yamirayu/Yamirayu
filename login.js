function validate() {
    var username = document.querySelector(".username").value;
    var password = document.querySelector(".password").value;
    var errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";
    errorMessage.style.color = "red";

    // Obter lista de usuários cadastrados
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Verificar se o usuário está cadastrado
    var userFound = users.find(user => user.username === username);

    if (!userFound) {
        errorMessage.textContent = "Usuário não encontrado!";
        return;
    }

    // Verificar se a senha está correta
    if (userFound.password === password) {
        alert("Login realizado com sucesso!");
        window.location.href = "index.html";
    } else {
        errorMessage.textContent = "Senha incorreta!";
    }
}
