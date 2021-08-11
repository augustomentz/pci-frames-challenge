const questions = [
  {
    text: "1) Espelhar o quadro do avião na vertical:",
    name: "airplane",
  },
  {
    text: "2) O quadro que ela mais gosta é o que colocará na cabeceira da cama, mas ele é pequeno. Ela gostaria de duplicar seu tamanho.",
    name: "she-is-my-girl",
  },
  {
    text: "3) O quadro de caveira está virado para a esquerda... adivinhe, Ivone quer ele virado para a direita.",
    name: "skull",
  },
  {
    text: "4) Ivone pediu que José deslocasse para a direita em 10 colunas o quadro do ciclista apresentado abaixo.",
    name: "ciclista",
  },
  {
    text: "5) Na cozinha decidiram colocar o quadro abaixo. Porém, rotacionar ele em 90º.",
    name: "quadro-cozinha",
  },
  {
    text: "6) José cansou! Brigou e os quadros dele decidiu colocar no quiosque. O que ele mais gosta é este mostrado abaixo. O problema é que o quadro não cabe acima da churrasqueira. Terá que diminuir pela metade o tamanho da imagem.",
    name: "quadro-quiosque",
  },
];

const loadImageAtCanvas = (imageName, idCanvas) => {
  const canvas = document.getElementById(idCanvas);
  const ctx = canvas.getContext("2d");

  const image = new Image();

  image.src = `./images/${imageName}.jpg`;
  image.onload = () => {
    canvas.width = image.width;
    canvas.height = image.height;

    ctx.drawImage(image, 0, 0);
  };
};

questions.forEach((question) => {
  $("#canvas-wrapper").append(
    `<div><p>${question.text}</p><canvas id="canvas-${question.name}"></canvas></div>`
  );

  loadImageAtCanvas(question.name, `canvas-${question.name}`);
});
