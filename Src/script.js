let btn = document.getElementById('button');
let nome = document.getElementById('name');
let mail = document.getElementById('mail');
let msg = document.getElementById('msg');
let lista = document.getElementById('lista-ctt');
let titulo = document.getElementById('titulo-ctt');
const config = document.getElementById('config');
const falso = document.getElementById('false');

btn.addEventListener('click', (e) => {
    e.preventDefault(); 
    localStorage.setItem('nome', nome.value);
    localStorage.setItem('email', mail.value);
    localStorage.setItem('mensagem', msg.value);

   
    lista.innerHTML += `
    <li class="novo-contato">
        <div>
            <p>nome: ${nome.value}</p>
            <p>E-Mail: ${mail.value}</p>
        </div>
        <p>Mensagem: ${msg.value}</p>
    </li>`;

   
    if (lista.children.length === 0) {
        titulo.style.display = 'none';
    } else {
        titulo.style.display = 'block';
    }
});


if (lista.children.length === 0) {
    titulo.style.display = 'none';
} else {
    titulo.style.display = 'block';
}




config.onclick = function() {
        falso.style.display = 'flex'; 
};


