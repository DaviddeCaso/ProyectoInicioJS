//Ejercicio Asincronía

function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        const usuario = { id: 1, nombre: 'John Doe' };
        resolve(usuario);
      } else {
        reject('Usuario no encontrado');
      }
    }, 2000);
  });
}

obtenerUsuario(1)
  .then(usuario => {
    console.log(usuario);
  })
  .catch(error => {
    console.error(error);
  });
