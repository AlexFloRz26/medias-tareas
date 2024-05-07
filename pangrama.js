const Pangrama = (cadena) => new Set(cadena.toLowerCase().replace(/[^a-z]/g, '')).size === 26;
//console.log(Pangrama("Hola muchachossss que hacennnnnnnn como estan")); 

console.log(Pangrama("Hola mundo")); 
