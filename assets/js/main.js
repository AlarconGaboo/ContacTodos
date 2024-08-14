document.getElementById('guardar-btn').addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
    const nota = document.getElementById('nota').value;

    // Crear un objeto de contacto usando las entradas del formulario
    const contacto = { nombre, apellido, telefono, correo, nota };

    // Mostrar la información en la caja de contacto guardado
    document.getElementById('saved-info').innerHTML = `
        <strong>${contacto.nombre} ${contacto.apellido}</strong><br>
        ${contacto.correo}<br>
        ${contacto.telefono}
    `;

    // Mostrar la ventana de contacto guardado
    document.getElementById('contact-saved').style.display = 'block';

    // Reiniciar el formulario para permitir agregar otro contacto
    document.getElementById('contact-form').reset();
});

document.getElementById('llamar-btn').addEventListener('click', () => {
    alert("Llamando al contacto...");
    // Ocultar la ventana de contacto guardado y volver al formulario principal
    document.getElementById('contact-saved').style.display = 'none';
});

document.getElementById('correo-btn').addEventListener('click', () => {
    alert("Enviando correo al contacto...");
    // Ocultar la ventana de contacto guardado y volver al formulario principal
    document.getElementById('contact-saved').style.display = 'none';
});
