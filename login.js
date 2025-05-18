function mostrarCampoLogin() {
    let tipoUsuario = document.querySelector(".login-usertype").value;

    // Oculta todos os campos inicialmente
    document.getElementById("campo-login-ra").style.display = "none";
    document.getElementById("campo-login-rg").style.display = "none";
    document.getElementById("campo-login-cpf").style.display = "none";

    // Exibe apenas o campo correspondente ao tipo de usuário
    if (tipoUsuario === "Aluno") {
        document.getElementById("campo-login-ra").style.display = "block";
    } else if (tipoUsuario === "Professor") {
        document.getElementById("campo-login-rg").style.display = "block";
    } else if (tipoUsuario === "Responsável") {
        document.getElementById("campo-login-cpf").style.display = "block";
    }
}

function validate() {
    var tipoUsuario = document.querySelector(".login-usertype").value;
    var password = document.querySelector(".password").value;
    var errorMessage = document.getElementById("error-message");

    var userInput = "";
    if (tipoUsuario === "Aluno") userInput = document.querySelector(".login-ra").value;
    else if (tipoUsuario === "Professor") userInput = document.querySelector(".login-rg").value;
    else if (tipoUsuario === "Responsável") userInput = document.querySelector(".login-cpf").value;

    errorMessage.textContent = "";
    errorMessage.style.color = "red";

    var users = JSON.parse(localStorage.getItem("users")) || [];

    var userFound = users.find(user => user.userType === tipoUsuario && user.userId === userInput);

    if (!userFound) {
        errorMessage.textContent = "Usuário não encontrado!";
        return;
    }

    if (userFound.password === password) {
        alert("Login realizado com sucesso!");
        window.location.href = "projejuju.html"; 
    } else {
        errorMessage.textContent = "Senha incorreta!";
    }
}

// Função para login como visitante
function loginAsGuest() {
    alert("Você entrou como visitante! Algumas funcionalidades estarão limitadas.");
    localStorage.setItem("userType", "visitante");
    window.location.href = "projejuju.html"; 
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
