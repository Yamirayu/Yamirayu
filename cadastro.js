function registerUser() {
    var userType = document.querySelector(".new-usertype").value;
    var newPassword = document.querySelector(".new-password").value;
    var newEmail = document.querySelector(".new-email").value;
    var message = document.getElementById("register-message");

    // Definição do identificador (RA, RG ou CPF)
    var userId = "";
    if (userType === "Aluno") userId = document.querySelector(".new-ra").value;
    else if (userType === "Professor") userId = document.querySelector(".new-rg").value;
    else if (userType === "Responsável") userId = document.querySelector(".new-cpf").value;

    // Validação de preenchimento dos campos
    if (userId === "" || newPassword === "" || newEmail === "" || userType === "") {
        message.textContent = "Preencha todos os campos!";
        message.style.color = "red";
        return;
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Verificar se a identificação já existe
    var userExists = users.some(user => user.userId === userId);
    if (userExists) {
        message.textContent = "Identificação já cadastrada!";
        message.style.color = "red";
        return;
    }

    // Salvar usuário
    users.push({
        userType: userType,
        userId: userId,
        email: newEmail,
        password: newPassword
    });

    localStorage.setItem("users", JSON.stringify(users));

    message.textContent = "Cadastro realizado com sucesso!";
    message.style.color = "green";

    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);
}

// Função para exibir RA, RG ou CPF de acordo com o tipo de usuário
function mostrarCampoEspecifico() {
    let tipoUsuario = document.querySelector(".new-usertype").value;

    document.getElementById("campo-ra").style.display = "none";
    document.getElementById("campo-rg").style.display = "none";
    document.getElementById("campo-cpf").style.display = "none";

    if (tipoUsuario === "Aluno") {
        document.getElementById("campo-ra").style.display = "block";
    } else if (tipoUsuario === "Professor") {
        document.getElementById("campo-rg").style.display = "block";
    } else if (tipoUsuario === "Responsável") {
        document.getElementById("campo-cpf").style.display = "block";
    }
}

// Código para alternar o tema escuro/claro
document.addEventListener("DOMContentLoaded", () => {
    const div = document.body;
    const toggleSwitch = document.getElementById("themeToggle");

    // Aplicar automaticamente o tema salvo no localStorage
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
