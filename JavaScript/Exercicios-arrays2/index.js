const atividade1 = () => {
  let alunos = ["Matheus", "Alice", "Giovanni", "Isabelli"];

  alunos.forEach((nome) => {
    console.log(`Presença confirmada: ${nome}`);
  });
};

const atividade2 = function () {
  let valores = [1, 5, 4, 6, 8, 10];

  const valoresDobrados = valores.map((numero) => {
    return numero * 2;
  });

  console.log(valoresDobrados);
};

const atividade3 = () => {
  let notas = [10, 8, 6, 4, 2, 3];

  const notasAprovadas = notas.filter((nota) => {
    return nota >= 7;
  });

  console.log(notasAprovadas);
};

const atividade4 = () => {
  let velocidades = [60, 75, 82, 90, 65];

  const primeiroMultado = velocidades.find((velocidade) => {
    return velocidade > 80;
  });

  console.log(`Multa gerada para a velocidade: ${primeiroMultado}`);
};

const atividade5 = () => {
  let salarios = [1500, 2500, 3000, 1800];

  const salariosBaixos = salarios.filter((salario) => {
    return salario < 2000;
  });

  const salariosComBonus = salariosBaixos.map((salario) => {
    return salario + 500;
  });

  console.log(salariosComBonus);
};
