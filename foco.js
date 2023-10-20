window.addEventListener('load', function (){
    //Llamada a la funcion foco
    foco();
});

function foco(){
    //Le agrega una clase al body
    document.querySelector('body').classList.add('oscuridad');

    //agrega el título
    const titulo = document.createElement("h1");
    titulo.classList.add("titulo");
    const anio = new Date().getFullYear();
    titulo.innerText = `Desarrollo de sistemas Web ${anio}`;
    document.body.appendChild(titulo);

    //Agregamos la imagen
    const img = document.createElement("img");
    img.classList.add('foco'); //Le agrega una clase
    img.setAttribute('src', 'images/foco-apagado.jpg');

    //Agregamos funcion en el evento click
    img.addEventListener('click', () => {
        //Buscar si la cadena 'apagado' esta en el atributo src
        if (img.src.indexOf("apagado") > 0 ){
            //Cambiamos la imagen y el fondo
            img.setAttribute('src', 'images/foco-prendido.jpg');
            document.body.classList.remove('oscuridad');
            document.body.classList.add('luz');
        } else {
            //cambiamos la imagen y el fondo
            img.setAttribute('src', 'images/foco-apagado.jpg');
            document.body.classList.remove('luz');
            document.body.classList.add('oscuridad');
        }

        //Agrega la imagen al DOM
        document.body.appendChild(img);
    });
}