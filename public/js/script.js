document.getElementById('menu-icon').addEventListener('click', function () {
    document.getElementById('menu').style.left = (document.getElementById('menu').style.left === '0px') ? '-250px' : '0px';
  });


  document.getElementById("descargarCV").addEventListener("click", function() {
    // Reemplaza la ruta con la ubicación real de tu archivo PDF en tu servidor o sistema local
    var rutaArchivo = "/assets/img/Bruno Requel Merla - CV.pdf";

    // Crea un elemento de enlace temporal
    var enlace = document.createElement("a");
    enlace.href = rutaArchivo;

    // Establece el atributo "download" para que el navegador lo interprete como una descarga
    enlace.download = "Bruno Requel Merla CV.pdf";

    // Simula un clic en el enlace para iniciar la descarga
    enlace.click();
  });

  document.getElementById("descargarCERTIFICADO").addEventListener("click", function() {
    // Reemplaza la ruta con la ubicación real de tu archivo PDF en tu servidor o sistema local
    var rutaArchivo = "/assets/img/Certificado CODER.png";

    // Crea un elemento de enlace temporal
    var enlace = document.createElement("a");
    enlace.href = rutaArchivo;

    // Establece el atributo "download" para que el navegador lo interprete como una descarga
    enlace.download = "Certificados.png";

    // Simula un clic en el enlace para iniciar la descarga
    enlace.click();
  });

