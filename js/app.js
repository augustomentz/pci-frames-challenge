const questions = [
  {
    text: "Montanha",
    name: "https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA",
  },
  {
    text: "1) Espelhar o quadro do avião na vertical:",
    name: "./images/airplane.jpg",
  },
  {
    text: "2) O quadro que ela mais gosta é o que colocará na cabeceira da cama, mas ele é pequeno. Ela gostaria de duplicar seu tamanho.",
    name: "./images/she-is-my-girl.jpg",
  },
  {
    text: "3) O quadro de caveira está virado para a esquerda... adivinhe, Ivone quer ele virado para a direita.",
    name: "./images/skull.jpg",
  },
  {
    text: "4) Ivone pediu que José deslocasse para a direita em 10 colunas o quadro do ciclista apresentado abaixo.",
    name: "./images/ciclista.jpg",
  },
  {
    text: "5) Na cozinha decidiram colocar o quadro abaixo. Porém, rotacionar ele em 90º.",
    name: "./images/quadro-cozinha.jpg",
  },
  {
    text: "6) José cansou! Brigou e os quadros dele decidiu colocar no quiosque. O que ele mais gosta é este mostrado abaixo. O problema é que o quadro não cabe acima da churrasqueira. Terá que diminuir pela metade o tamanho da imagem.",
    name: "./images/quadro-quiosque.jpg",
  },
];

const loadImageAtCanvas = (imageName, idCanvas) => {
  const canvas = document.getElementById(idCanvas);
  const ctx = canvas.getContext("2d");

  const image = new Image();

  image.src = imageName;
  image.onload = () => {
    canvas.width = image.width;
    canvas.height = image.height;

    ctx.drawImage(image, 0, 0);
  };
};

questions.forEach((question) => {
  $("#canvas-wrapper").append(
    `<div>
      <p>${question.text}</p>
      <canvas id="canvas-${question.name}"></canvas>
      <canvas id="canvas-result-${question.name}"></canvas>
    </div>`
  );

  loadImageAtCanvas(question.name, `canvas-${question.name}`);
});

function loadImageAlt(imgData, canvasId) {
  console.log('loadImageAlt', imgData, canvasId)
  let c = document.getElementById(canvasId);
  c.width = imgData.width;
  c.height = imgData.height;
  let ctx = c.getContext('2d');
  ctx.putImageData(imgData, 0, 0);
}

function mirror(src, canvasId) {
  let image = new Image();
  image.src = src;
  image.crossOrigin = "Anonymous";

  image.onload = function() {
    // Largura x Altura do canvas
    let width = image.width;
    let height = image.height;
    // Matriz para espelhar
    let matrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    matrix[4] = -1;
    matrix[7] = height;
    // Transforma a imagem do canvas - Espelhar
    return transform(canvasId, image, width, height, matrix);
  }
}

function transform(canvasId, image, width, height, matrix) {
  //
  // Fonte: http://www.nibcode.com/en/blog/15/linear-algebra-and-digital-image-processing-part-IV-image-editor
  //
  // Carrega as dimensões do canvas e desenha a imagem original nele
  let canvas = document.getElementById(canvasId);
  canvas.width = width;
  canvas.height = height;
  let ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0);
  // Carrega os pixels da imagem original
  let pixelData = ctx.getImageData(0, 0, width, height).data;
  // Cria os pixels da imagem transformada
  let newImgData = ctx.createImageData(width, height);
  let newPixelData = newImgData.data;
  // Carrega os pixels da imagem transformada a partir dos pixels da imagem original
  for (let x = 0; x < width; x++) {
     for (let y = 0; y < height; y++) {
        let nx = Math.floor(matrix[0] * x + matrix[3] * y + matrix[6]);
        let ny = Math.floor(matrix[1] * x + matrix[4] * y + matrix[7]);
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
           newPixelData[(y * width + x) * 4] = pixelData[(ny * width + nx) * 4];
           newPixelData[(y * width + x) * 4 + 1] = pixelData[(ny * width + nx) * 4 + 1];
           newPixelData[(y * width + x) * 4 + 2] = pixelData[(ny * width + nx) * 4 + 2];
           newPixelData[(y * width + x) * 4 + 3] = pixelData[(ny * width + nx) * 4 + 3];
        }
     }
  }

  console.log('newImgData', newImgData, canvasId)
  return {newImgData, canvasId};
}

loadImageAlt(mirror(questions[0].name, `canvas-result-${questions[0].name}`));