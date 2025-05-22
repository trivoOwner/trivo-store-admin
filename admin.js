function verificarClave() {
  const clave = document.getElementById("accesoKey").value;
  if (clave === "trivo123") {
    document.getElementById("auth").style.display = "none";
    document.getElementById("formulario").style.display = "block";
  } else {
    alert("Clave incorrecta");
  }
}

function subirProducto() {
  const nombre = document.getElementById("nombre").value;
  const precio = document.getElementById("precio").value;
  const descripcion = document.getElementById("descripcion").value;
  const imagen = document.getElementById("imagen").value;
  const estado = document.getElementById("estado").value;

  console.log("Nuevo producto:");
  console.log("Nombre:", nombre);
  console.log("Precio:", precio);
  console.log("Descripción:", descripcion);
  console.log("Imagen:", imagen);
  console.log("Estado:", estado);

  alert("Producto subido (solo consola por ahora)");
}