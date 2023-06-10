function marcarRespuesta(element) {
    const input = element.querySelector('input[type="radio"]');
    const respuestas = element.parentElement.querySelectorAll('.res');

    respuestas.forEach((res) => {
        res.classList.remove('selected');
        const input = res.querySelector('input[type="radio"]');
        input.checked = false;
    });

    element.classList.add('selected');
    input.checked = true;
}



function verificarForm() {
    // Obtener todas las respuestas
    const respuestas = document.querySelectorAll('.respuesta');

    // Contadores para aciertos y fallos
    let aciertos = 0;
    let fallos = 0;

    // Recorrer las respuestas y verificar si son aciertos o fallos
    for (let i = 0; i < respuestas.length; i++) {
        const respuesta = respuestas[i];
        const pregunta = respuesta.name; // Obtener el nombre de la pregunta

        // Verificar si la respuesta es correcta o incorrecta
        if (respuesta.checked) {
            if (respuesta.value === '1') {
                aciertos++;
                respuesta.parentElement.classList.add('acierto'); // Agregar clase 'acierto' al contenedor de la respuesta
            } else {
                fallos++;
                respuesta.parentElement.classList.add('fallo'); // Agregar clase 'fallo' al contenedor de la respuesta
            }
        }
    }

    // Mostrar el resultado
    const resultadoSpan = document.getElementById('resultado');
    resultadoSpan.textContent = `Aciertos: ${aciertos}, Fallos: ${fallos}`;
}