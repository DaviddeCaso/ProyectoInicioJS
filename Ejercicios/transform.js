

const datos = [
  {
    id: 1,
    nombre: 'Juan',
    habilidades: ['JavaScript', 'HTML', 'CSS'],
    proyectos: [
      { id: 1, nombre: 'Proyecto 1' },
      { id: 2, nombre: 'Proyecto 2' }
    ]
  },
  {
    id: 2,
    nombre: 'María',
    habilidades: ['Python', 'SQL', 'Django'],
    proyectos: [
      { id: 3, nombre: 'Proyecto 3' },
      { id: 4, nombre: 'Proyecto 4' }
    ]
  },
  {
    id: 3,
    nombre: 'Pedro',
    habilidades: ['Java', 'Spring', 'Hibernate'],
    proyectos: [
      { id: 5, nombre: 'Proyecto 5' },
      { id: 6, nombre: 'Proyecto 6' }
    ]
  }
];

// Funcion para saber cuales usan JavaScript y la guardo en un array vacío
// para poder mostrarla en la consola
const desarrolladoresJavascript = [];
for (let i = 0; i < datos.length; i++) {
  const desarrollador = datos[i];
  if (desarrollador.habilidades.includes('JavaScript')) {
    desarrolladoresJavascript.push(desarrollador);
  }
}

// Funcion que recoge todos los proyectos y los guarda en un array para mostrarla
const todosLosProyectos = [];
for (let i = 0; i < datos.length; i++) {
  const proyectos = datos[i].proyectos;
  for (let j = 0; j < proyectos.length; j++) {
    todosLosProyectos.push(proyectos[j].nombre);
  }
}

console.log("Desarrolladores con habilidad JavaScript:");
console.log(desarrolladoresJavascript);
console.log("Nombres de los proyectos en los que se trabaja");
console.log(todosLosProyectos);