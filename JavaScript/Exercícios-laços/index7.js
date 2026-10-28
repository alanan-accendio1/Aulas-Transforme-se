for (let i = 1; i <= 20; i++) {
  // Verifica se é múltiplo de 4 OU se termina com 4
  if (i % 4 === 0 || i % 10 === 4) {
    console.log("PIM");
  } else {
    console.log(i);
  }
}
