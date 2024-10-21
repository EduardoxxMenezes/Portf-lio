let btn = document.getElementById('button');
let nome = document.getElementById('name');
let mail = document.getElementById('mail');
let msg = document.getElementById('msg');
let lista = document.getElementById('lista-ctt');
let titulo = document.getElementById('titulo-ctt');

btn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission to avoid page refresh
    localStorage.setItem('nome', nome.value);
    localStorage.setItem('email', mail.value);
    localStorage.setItem('mensagem', msg.value);

    // Append the new contact information to the list
    lista.innerHTML += `
    <li class="novo-contato">
        <div>
            <p>${nome.value}</p>
            <p>${mail.value}</p>
        </div>
        <p>${msg.value}</p>
    </li>`;

    // Check if the list is empty and update the title visibility
    if (lista.children.length === 0) {
        titulo.style.display = 'none';
    } else {
        titulo.style.display = 'block';
    }
});

// Initial check to hide/show the title based on the list content
if (lista.children.length === 0) {
    titulo.style.display = 'none';
} else {
    titulo.style.display = 'block';
}
