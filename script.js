
const toggleButton = document.getElementById('toggleButton');
const titulo = document.getElementById('titulo');


toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Desativar Dark Mode';
        titulo.textContent = 'Você está no Modo Escuro';
    } else {
        toggleButton.textContent = 'Ativar Dark Mode';
        titulo.textContent = 'Você está no Modo Claro';
    }
});
