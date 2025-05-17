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

