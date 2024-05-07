const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese altura de piramide: ', (altura) => {
  altura = parseInt(altura);

  for (let fila = 1; fila <= altura; fila++) {
    let espacios = " ".repeat(altura - fila);
    let bloques = "°".repeat(fila * 2 - 1);
    console.log(espacios + bloques);
  }

  rl.close();
});
