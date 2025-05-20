function abrirMenu() {
    document.getElementById("menu").style.left = "0";
}
function fecharMenu() {
    document.getElementById("menu").style.left = "-250px";
}
function mostrarTexto(elemento) {
    // Remover a classe 'active' de todos os itens antes de ativar o novo
    document.querySelectorAll(".menu-item").forEach(item => {
        item.classList.remove("active");
        item.querySelector(".menu-icon").style.opacity = "1"; // Traz de volta a logo
        item.querySelector(".menu-text").style.opacity = "0"; // Esconde o texto
    });

    // Adiciona a classe 'active' ao item clicado
    elemento.classList.add("active");

    // Faz a logo desaparecer e o texto aparecer
    elemento.querySelector(".menu-icon").style.opacity = "0";
    elemento.querySelector(".menu-text").style.opacity = "1";
}


/*tema escuro */
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
document.addEventListener("DOMContentLoaded", () => {
    const userType = localStorage.getItem("userType");

    // Se o usuário estiver logado, interrompemos qualquer contagem do modo visitante
    if (userType === "usuario") {
        localStorage.removeItem("userType"); // Remove status de visitante
        return; // Sai antes de iniciar o temporizador!
    }

    // Se ainda estiver como visitante, inicia o temporizador para exibir o aviso
    if (userType === "visitante") {
        visitanteTimeout = setTimeout(function () {
            mostrarAvisoLogin();
        }, 30000);
    }
});

function mostrarAvisoLogin() {
    let aviso = document.createElement("div");
    aviso.style.position = "fixed";
    aviso.style.top = "0";
    aviso.style.left = "0";
    aviso.style.width = "100vw";
    aviso.style.height = "100vh";
    aviso.style.background = "rgba(0, 0, 0, 0.9)";
    aviso.style.zIndex = "9999";
    aviso.style.display = "flex";
    aviso.style.alignItems = "center";
    aviso.style.justifyContent = "center";
    aviso.style.color = "white";
    aviso.style.fontSize = "24px";
    aviso.innerHTML = "<div style='padding: 20px; background: black; border-radius: 10px;'>Você está navegando como visitante. Redirecionando para login em 10 segundos...</div>";

    document.body.appendChild(aviso);

    // Redireciona para login após 10 segundos
    setTimeout(function () {
        window.location.href = "login.html";
    }, 10000);
}
