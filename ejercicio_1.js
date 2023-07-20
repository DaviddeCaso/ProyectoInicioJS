// Ejercicio 1

/*
Crea un archivo ejercicio1.js que tenga un objeto con los siguientes campos: Nombre,
apellidos, un array con los temas del bootcamp que ya conoces, si estás en busqueda
activa con un boolean y un array de objetos el cual tenga un link a alguna red social con el
nombre y link de la red social. (Con uno vale, Github por ejemplo, pero dentro de un array). 
*/

const PersonalInfo = {
  nombre: "David",
  apellidos: "De Caso García",
  temasBootcamp: ["Git","HTML", "CSS", "JavaScript"],
  enBusquedaActiva: true,
  redesSociales: [
    {
      nombre: "GitHub",
      link: "https://github.com/DaviddeCaso",
      nombre2: "LinkedIn",
      link2: "https://linkedin.com/in/david-de-caso-garcía-b860aa276",
    }
  ]
};

console.log(PersonalInfo);