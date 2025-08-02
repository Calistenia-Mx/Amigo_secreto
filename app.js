// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;

    if (nombre === "") {
        alert('por favor ingrese un Nombre valido!');
        return;
    } 
    if (listaAmigos.includes(nombre)) {
        alert('El amigo ya está en la lista');
        return;
    } else {
        listaAmigos.push(nombre); // Agrega el nombre al arreglo
    }

    console.log(listaAmigos);

    document.getElementById('listaAmigos').innerHTML += `<li> ${nombre} </li>`;
    limpiarCaja();
}

function sortearAmigo() {
    // Verifica si la lista de amigos está vacía o tiene solo un amigo
    if (listaAmigos.length === 0) {
        alert('No se puede sortear, la lista de amigos está vacía');
        return;
    } else if (listaAmigos.length === 1) {
        alert('No se puede sortear, solo hay un amigo en la lista');
        return;
    }

    // Genera un número aleatorio para seleccionar un amigo de la lista 
    let indice = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indice];

    
    document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: ${amigoSorteado} `;

}

function limpiarCaja(){
   document.getElementById('amigo').value = '';  
   
}