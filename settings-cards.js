 // Función para cargar datos desde un archivo CSV
 function cargarDatosCSV(ruta, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
              callback(xhr.responseText);
          } else {
              console.error('Error al cargar el archivo CSV');
          }
      }
  };
  xhr.open('GET', ruta, true);
  xhr.send();
}

// Función para generar las cartas
function generarCartas(datos) {
  const contenedor = document.getElementById('cartas-container');
  contenedor.innerHTML = ''; // Limpiar el contenedor antes de generar las cartas

  // Convertir los datos CSV en un array de objetos
  const lineas = datos.trim().split('\n');
  const titulos = lineas[0].split(',');
  const cartas = lineas.slice(1).map(linea => {
      const campos = linea.split(',');
      const carta = {};
      titulos.forEach((titulo, index) => carta[titulo.trim()] = campos[index].trim());
      return carta;
  });

  // Generar las cartas
  cartas.forEach(carta => {
      const cartaHTML = `
      <div class="card" onclick="document.getElementById('screen-iframe-settings').src='${carta.ubicacion}'">
              <img src=${carta.icono} onerror="this.onerror=null; this.src='contents/none.png';" alt="ICON" class="mini-icon" >

              <div class="vertical">
              <p class="card-title">${carta.titulo}<p>
              <p class="card-desc" >${carta.descripcion}</p>
              </div>
              
          </div>
      `;

      contenedor.innerHTML += cartaHTML;
  });
}



// Llamar a la función para cargar los datos CSV y luego generar las cartas
window.onload = function() {
  cargarDatosCSV('contents/settings-data.csv', generarCartas);
};



