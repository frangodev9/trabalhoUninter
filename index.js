document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("mensagem1");
    const mensagem = document.getElementById("mensagemTexto");

    botao.addEventListener("click", function () {
        mensagem.textContent = "Bem vindo! Está é a minha autobiografia.";
        mensagem.classList.remove("mensagemoculta");
    });
});