

document.getElementById('network-check').addEventListener('click', function() {
    var resultado = window.confirm('El test de red se hará de manera remota por medio de fast.com, propiedad de Netflix, Inc. \n\n¿Desea continuar?');
    if (resultado) {
        if (navigator.onLine) {
            window.open('https://fast.com/');
        } else{
            alert('No hay conexión a Internet. \n\nNo se hará el test de velocidad hasta que te conectes.');
            location.reload();
        }
        
    } else {
      alert('No se hará el test de velocidad.');
      // Aquí puedes agregar la lógica para cancelar
    }
  });


  document.getElementById('nm-applet').addEventListener('click', function() {
    window.api.send('nm-edit');
  });
  
  window.api.on('command-result', (stdout) => {
    console.log(`Resultado: ${stdout}`);
  });

var networkStatus = document.getElementById('network-status');
  if (navigator.onLine) {
    networkStatus.innerHTML = "<p>Conectado a Internet</p>";
  } else {
    networkStatus.innerHTML = "<p style='color: red;'>No hay conexión a Internet</p>";
  }



  // Reload the page every minute
  setTimeout(function() {
    location.reload();
  }, 60000);

