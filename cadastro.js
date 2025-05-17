function registerUser() {
    // Pegando valores dos campos do formulário
    var newUsername = document.querySelector(".new-username").value;
    var newPassword = document.querySelector(".new-password").value;
    var newGender = document.querySelector(".new-gender").value;
    var newBirthDate = document.querySelector(".new-birthdate").value;
    var newUserType = document.querySelector(".new-usertype").value;
    var message = document.getElementById("register-message");

    // Verificar se todos os campos foram preenchidos
    if (newUsername === "" || newPassword === "" || newGender === "" || newBirthDate === "" || newUserType === "") {
        message.textContent = "Preencha todos os campos!";
        message.style.color = "red";
        return;
    }

    // Obter usuários cadastrados no localStorage
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Verificar se o usuário já existe
    var userExists = users.some(user => user.username === newUsername);
    if (userExists) {
        message.textContent = "Usuário já existe! Escolha outro nome.";
        message.style.color = "red";
        return;
    }

    // Adicionar novo usuário ao localStorage
    users.push({
        username: newUsername,
        password: newPassword,
        gender: newGender,
        birthDate: newBirthDate,
        userType: newUserType
    });

    localStorage.setItem("users", JSON.stringify(users));

    // Mostrar mensagem de sucesso
    message.textContent = "Cadastro realizado com sucesso!";
    message.style.color = "green";

    // Redirecionar para página de login após cadastro
    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);
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
