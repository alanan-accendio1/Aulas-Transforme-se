let carga = 0;

while (true) {
  carga += 30;
  if (carga > 100) {
    console.log("Limite atingido!");
    break;
  } else {
    console.log("Carga atual: " + carga + " kg");
  }
}
