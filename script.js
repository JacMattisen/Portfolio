


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    let nome = document.querySelector('#nome').value;
    let email = document.querySelector('#email').value;

    if (nome === '' || email === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    //  adicionar mais validações ou enviar o formulário
});
