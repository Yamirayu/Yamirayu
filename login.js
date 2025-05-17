// Função para validar login de usuários cadastrados
function validate() {
    var username = document.querySelector(".username").value;
    var password = document.querySelector(".password").value;
    var errorMessage = document.getElementById("error-message");

    // Limpa mensagens de erro anteriores
    errorMessage.textContent = "";
    errorMessage.style.color = "red";

    // Obter lista de usuários cadastrados no localStorage
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Verificar se o usuário existe
    var userFound = users.find(user => user.username === username);

    if (!userFound) {
        errorMessage.textContent = "Usuário não encontrado!";
        return;
    }

    // Verificar se a senha está correta
    if (userFound.password === password) {
        alert("Login realizado com sucesso!");
        window.location.href = "projejuju.html"; // Redirecionar para página principal
    } else {
        errorMessage.textContent = "Senha incorreta!";
    }
}

// Função para login como visitante
function loginAsGuest() {
    alert("Você entrou como visitante! Algumas funcionalidades estarão limitadas.");
    localStorage.setItem("userType", "visitante");
    window.location.href = "projejuju.html"; // Redirecionar para página principal
}

// Código para alternar o tema escuro/claro
document.addEventListener("DOMContentLoaded", () => {
    const div = document.body;
    const toggleSwitch = document.getElementById("themeToggle");

    // Aplica automaticamente o tema salvo no localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        div.classList.add(savedTheme);
        if (toggleSwitch) toggleSwitch.checked = (savedTheme === "dark-mode");
    } else {
        div.classList.add("light-mode"); // Define o tema claro por padrão
    }

    // Alternar tema ao clicar no botão
    if (toggleSwitch) {
        toggleSwitch.addEventListener("change", () => {
            if (toggleSwitch.checked) {
                div.classList.remove("light-mode");
                div.classList.add("dark-mode");
                localStorage.setItem("theme", "dark-mode");
            } else {
                div.classList.remove("dark-mode");
                div.classList.add("light-mode");
                localStorage.setItem("theme", "light-mode");
            }
        });
    }
});
