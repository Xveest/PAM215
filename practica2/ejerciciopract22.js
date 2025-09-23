const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "Maria", edad: 28 }
];

const personaLuis = personas.find(persona => persona.nombre === "Luis");
console.log("Persona encontrada:", personaLuis);

console.log("Lista de personas:");
personas.forEach(persona => {
    console.log("nombre: " + persona.nombre + ", edad: " + persona.edad);
});


const totaledades = personas.reduce((total, persona) => total + persona.edad, 0);
console.log("Total de edades:", totaledades);
