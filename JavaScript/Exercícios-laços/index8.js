for (let velocidade = 60; velocidade <= 100; velocidade += 10) {
  if (velocidade <= 80) {
    console.log("Velocidade " + velocidade + " km/h: Velocidade OK");
  } else if (velocidade > 80 && velocidade <= 90) {
    console.log("Velocidade " + velocidade + " km/h: Multa leve!");
  } else if (velocidade > 90 || velocidade == 100) {
    console.log("Velocidade " + velocidade + " km/h: Multa grave!");
  }
}
