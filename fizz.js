function Numeros() {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("caera la republica");
      } else if (i % 3 === 0) {
        console.log("fizz");
      } else if (i % 5 === 0) {
        console.log("fuzz");
      } else {
        console.log(i);
      }
    }
  }
  
  Numeros();
  