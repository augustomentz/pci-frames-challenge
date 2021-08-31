const questions = [
  {
    text: "1) Espelhar o quadro do avião na vertical:",
    name: "https://lh3.googleusercontent.com/fife/AAWUweWzX-i3V6T2mIZo9P0SUfzZz2EAjT7_rJdY1j3Wk9eqZ1b2jIXHdG9fZ0_pezNBjdPfRd3p_gpnBf8hG9tHEXfqMff6HV1Wtpvd8S-Gd4nsxwKB_gVG06884YfrtVeUg-1a_f1LAMQA7qS4rsGlrtv6VytBH70Zx8dZBXJTKGulbHNpUkKtyFbtZHKcv6NxaHVCETFToXOU1Jsw9OIippYjbRJy9yIO7K1RqSKI62EM6TNgP5OkJDSG9vav0lJiPPuNAHGtw-hiwWpOeIfCiU9Am_PSCZ1mHD0Xom7O5znMdEAEhocmoTGqt0Xk-Uuva9-Zh5gyieDSaKBGIgakXe2uFpTZ7ouhRwMY5ck51oDOozTfPD2qApjknKkHilv0bKOHaT9Hcz-BSC3wPlrAdsojot2O17rkpyxkFPa9F3SCokj95PLTg_k3PnOntHAU52nwfnRlyeUVA8Cr20TmuVD3iFUn4XWjPnD59-0XM0gO3AT6Yrv4zK9sLRAjtfDY71MGWU9uRsCgVlHTK-3DD8DVogvEIechaFnvy9LCOTlWP0WKEEdfpAklBiEJ7VHlzbbHWNCgIyHstdpfnrk4qzholaO6akPqf9UoGRDDmoi7nNtJHoR7DmVtKsYDV2i7Kvhe3o-YvK46iO7PFgUm6SS1G08OuWqMSNZNqMU3aLtYaB-tJczHVyr-sK7MjuPCiNg2f8HwuGw7dO7QfEGzYkMdk63qJb8H6A=w1920-h947-ft",
    type: "ESPELHAR_VERTICAL",
  },
  {
    text: "2) O quadro que ela mais gosta é o que colocará na cabeceira da cama, mas ele é pequeno. Ela gostaria de duplicar seu tamanho.",
    name: "https://lh3.googleusercontent.com/fife/AAWUweWEgFu2q6wPYGTsEHVCjvnUqc0vNm8iA9CPm6QSBJD7dcuLgGk7iYfnNOtDwEZfnFK35Z7MRARQqDg9LKh-L4sfxD4dEKrSqAAjFXNBcNpMNYf4j9B19Q508jHl0x5nRMn2E1ChL50aN_NbyLRe7u19N-NBSX2LS-lHtP-sCInYMW2Wuh9wulMtBLgPtsoSXNtICIlDTjtCliDVNwaf4KkDsm5QMd1o--w9r862QNWgxWIkTmRg4SjzvI7CYGg8PMMI-LsTJmOPgJxwUO9prOREUaCu9RKQKq-LIuN3m8hjOdENuGWwxDF7QfE3GCDA-fiKPS3c1hGZQLjbLfMaDkhpXGa8Q_5nUrwC3C4k0aetz8EYuTeu7bTZzCbmgp1CcyBUz679KSP8t7FChM_a2PLEu4iOLW7i6gEesmOT6N0thARHonij8cw0IL-0_tX_jR1YHzoPbtLa-UW1fvH5Cts1-LvRI_TRtrEDDUbeMT9NiR_SvFYdHea8jFuMagyM0RKtTmdcA5TNBUKITX0zglHUUWPG2VUCRmg_u8djuPA2ysx26Bz7Al8OlD6IcZw_mx4IaOfwdXjTI5EnQE2ifYTnNjGhtIz3KHdMbFQFGakFD9QgOSZwcmEEK20yOqm3Ej-4SMmHqifcsrnKXk-HJB_FbQUD6yaAErpILDUi5VPfcNSV3tJB445x8UgaS_muPLws7iY0hSMDjDXv8907Uyf-V1LWaQaPjQ=w1920-h463-ft",
    type: "REDIMENSIONAR_2X",
  },
  {
    text: "3) O quadro de caveira está virado para a esquerda... adivinhe, Ivone quer ele virado para a direita.",
    name: "https://lh3.googleusercontent.com/fife/AAWUweV23SLm_pOejyKTyWIWzs0GkNWRUI8nioBlgDcbg6BPjoheU6MRFVTOT_P7wBsxH9hzK0qR9KR5EV_AlRYZsTtuWDMxMt-jQzLpuE5kPCVcsGLm-cb8ierDysBkIe3iv8gC-sLjSJnPnWfk0lPC4S4M9htixqq_ZLiDTS1dOeMWtzYKJe8QAH_yzqcbTfP25455g2vfil1Clh2Ow-RU-ZKRj14AkBRB2i19n76OafyoEUV71m0wOKPHE-qX6MPgkHbUNYE48XrDVcn4zMPQEtH0FciBUYeBdkDA4DTJRZAxWeZD8KPwTwsddDzVMPG3wO6X8kRtQoAj7j5IyQPt5R95gZhUrpUUOCLZ1JgiurHbXE-v6fdCceWiCg4Dkkj1YcbCP3eV5NIuE3TpLPiM2wLpa-NFu_fj6HIb2dx12XCqWVaKj-8w3OWrWSaFFO2EBQCOOLxKD3C_m_DT7cnL-RnttK-H_aEbMzCtsmyPDNWBysTeMan62eYvItA4_FFaqBMiQOXhYtuXOkT6IRdfobNx8RMFfueNpOwcnl876dT-Pf_-qKzNX4h4g50JaDfKrpGmDq2QOA8MhcF-n23SO2kgMyMEZkPHEeJ41avgKqLyw1_ynwYNAI4to2iHpM9naXRTJePOTLsgyDyqbgTEZihFB7jhbIIziS0C0t3lanNH5mn3o3_SGN4KMNzFIkGNMvQkNFUmd_zUbz4npOrWd5d2N6aoCM9VUQ=w1920-h463-ft",
    type: "ESPELHAR_HORIZONTAL",
  },
  {
    text: "4) Ivone pediu que José deslocasse para a direita em 10 colunas o quadro do ciclista apresentado abaixo.",
    name: "https://lh3.googleusercontent.com/fife/AAWUweX4ZgWDZM2WiHnGWCYCu8h8BzyAJOhwH-cnXo2pruUgvkr4wnVSssHFG1HrDI5pRdhPjcO0WMNNyyDxDuCmhbB2JTOMCvueENgIhaOVj6szrDFsV6t1ZSB-QV_BKnPWXWX2BQB5F55EPb2-pH4_IYNWrAEHpeVg08RSuISGMwatvXYE1yK4H4C8y1RPy--R44-DYMgq8gf6nLhOw3zKL6qTRHuPPr_7r8P-sfzKgB2NwNR1s2rDpepYGUUiADv7Pl4z7-X2Vf-DFzj9vgpVWtnVptRQSUYQyw27DTBDmtDjGM9pPVnBzX4Hn2rM8fWs2BG1IrOBVCoGuHEJYSUk165kZldtsayfqMGehNF5rNy307kPbyXrZVntLbI06qmjD4_JxPNvczyDCj4XpZpKCClwXlvyZ5VcS62BJQIr9P1ZLsRy40XWS8qw11DZ9hUB17qNZEBofMowOrW-qzHqLySLfu23kgLV4bTXov3uCZZeClrYfW5aPjq5s2ndRb5hB7WrKe23sky0hnjorgOJv6jFYpgiH3mai_b1efD2-6fLwb3axEdKz8RKQE-NAXxsZmVnOGgjdrR5zhN-d7Exd9ZiRzr9DiEvgQIWyanvwj93-gyjJBfSxYOnAUWoUfVJC8s7QHC9GUGSrRxpt6TUqi9eyExArkbc2Rf2bIDMRqkn2TG0SJEM96gb2fXwz3HsoTFjI-PBNj8WKAdmYo7nBmLwLfchfojQtQ=w1920-h463-ft",
    type: "TRANSLADAR_10_COLUNAS_DIREITA",
  },
  {
    text: "5) Na cozinha decidiram colocar o quadro abaixo. Porém, rotacionar ele em 90º.",
    name: "https://lh3.googleusercontent.com/fife/AAWUweWRA1UHu3AGk54ixrNg65rWhnWqEDS-wEXHmwiI13Q2CnxHZCwix0r_mrJJ3QHrsauKYYZbwFttW5-QeNMyuaW2N8eWYlSYifvV5OAiDVJsYJcQlxcLy0QTG-XiO3ca1lydF_pYjBiF4LlB4kWRfKKX1n2eE2Ljp9dsCPbj9X3tjU5hWi37oUzFvVQmiCtYUsGxt7CCYAq4BRobrfXXaG5k4aV7eX4N4AY36F7NeXI6u8WkrAVSMH_isUBCFpwSMVz8GXYVxHNewQoJQl8J57QQTxj1FFHqgjtNbcnNx4fwe0DIpbMe2KgfkOvt5vhTc7n4ZuCxY9rZ3TGZM0cz2fMiUiqyzX1rnwZYGybpwth7BUlHprT3ZNX_z17iI5K4q_7Xqf4hNffgwq0RjWNUvYR20LeVfwEEcJw6seO97mpNpszDJd773PidYvH413rSSJePkQEoQ7mDPBeAxxZRrQNjPDIywd6r_DsZdoTmCnsqJKjg7HmEsZoVGQGv7jlftqsyuApxfOz8h7QJSObotn7e8WbUNPlxmJ1p40K4PpCLuuwXlWlR8WbKt8Zqv5-5bjfJy768wXCckxlqqY5o_qeFBgK-IJFcnVH-p0RDsSWW-Fep-Dorw5B_TIGTN99FbPr1VInPzVLP_crvzp-PoDs8gk22WRnV3t2QP4q6-IcdihaQVhfx0ADUMiiq6kzK3KAcGDtaNPtt1C72UUK4LC-dBBpFTEsArg=w1920-h463-ft",
    type: "ROTACIONAR_90_GRAUS",
  },
  {
    text: "6) José cansou! Brigou e os quadros dele decidiu colocar no quiosque. O que ele mais gosta é este mostrado abaixo. O problema é que o quadro não cabe acima da churrasqueira. Terá que diminuir pela metade o tamanho da imagem.",
    name: "https://lh3.googleusercontent.com/fife/AAWUweU6mdUJgwQBXDWx5mNiIzy_VR4TBJY_MPPanETdBIqVrhAChCPR-wIIfr-st0RpiqUDn2M0wTW0RDQM5hlb7x90x0RnYLUd5sYzVbucqRlzv23UJ6Hb1lWaoEMJ1Ft8FvTCZH_wV50Ulu9fVh-TncWQvQfLRlEIZ-3Zr8GBiktBSZiaSpJlDjMEAKhARPR1gu7jUv2-aB07je6VXa6lXDikTniBDZWL7-Fqx5mt1a4OHM2ak5yzrNLpEDnnshdoYydIg1U0CqS4nr7-R-iX6KBapnwoXJPJQhW08xCNXEE9D3VgpCNp9y5GordxAzMIw20SWynQ-cuapJYK2uB8aBaVnTmJ-O-tqBQI3v60RO24HcnvwghEOLy33iiwt7tRQOcSn7iYJJUduGKVtr-da3ohl6T3qy9DVISQOmAAiYopiMSdrzFyvtlAD8iqW3i4kWEohuMdIc9ecxd_zrmi9qc4GbjQlZJp1Y1Q5YjKUTPexd-YY95_qY7EEBU2UrVQRJ1LngHPjAkYMGzsqWdtY_HVzy4OtIzFgLSblk0BRSUdJSMFi3fZRUNd0xsRczS2VMVqcBxijb4FjM_5RrIL0euUu7wFDJblMBUcN6b_ln_p6RAuJPLl_SgUO8abhdPvOvpPaYcIUtTlqd-mI1R45pKB3ZCeIrRQTF-uBciyccS1XG_QpIfaa7JX7mcDJHs6VPuVHBeiRH38F7ZhZpZcIRefE90NmdBaGg=w1920-h463-ft",
    type: "REDIMENSIONAR_METADE",
  },
];

const loadImageInCanvas = (imageName, idCanvas) => {
  const canvas = document.getElementById(idCanvas);
  const ctx = canvas.getContext("2d");

  const image = new Image();

  image.onload = () => {
    canvas.width = image.width;
    canvas.height = image.height;

    ctx.drawImage(image, 0, 0);
  };

  image.src = imageName;
};

const loadAltImageInCanvas = (data) => {
  let c = document.getElementById(data.canvasId);
  c.width = data.newImgData.width;
  c.height = data.newImgData.height;

  let ctx = c.getContext("2d");
  ctx.putImageData(data.newImgData, 0, 0);
};

const transformImage = (canvasId, image, width, height, matrix) => {
  return new Promise((resolve) => {
    let canvas = document.getElementById(canvasId);
    canvas.width = width;
    canvas.height = height;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    let pixelData = ctx.getImageData(0, 0, width, height).data;
    let newImgData = ctx.createImageData(width, height);
    let newPixelData = newImgData.data;
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        let nx = Math.floor(matrix[0] * x + matrix[3] * y + matrix[6]);
        let ny = Math.floor(matrix[1] * x + matrix[4] * y + matrix[7]);
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          newPixelData[(y * width + x) * 4] = pixelData[(ny * width + nx) * 4];
          newPixelData[(y * width + x) * 4 + 1] =
            pixelData[(ny * width + nx) * 4 + 1];
          newPixelData[(y * width + x) * 4 + 2] =
            pixelData[(ny * width + nx) * 4 + 2];
          newPixelData[(y * width + x) * 4 + 3] =
            pixelData[(ny * width + nx) * 4 + 3];
        }
      }
    }

    resolve({ newImgData, canvasId });
  });
};

const mirrorImage = (src, canvasId, mx, my) => {
  return new Promise((resolve) => {
    let image = new Image();

    image.onload = async function () {
      let width = image.width;
      let height = image.height;
      let matrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];

      if (mx) {
        matrix[0] = -1;
        matrix[6] = width;
      }

      if (my) {
        matrix[4] = -1;
        matrix[7] = height;
      }

      resolve(await transformImage(canvasId, image, width, height, matrix));
    };

    image.crossOrigin = "";
    image.src = src;
  });
};

const resizeImage = (src, canvasId, size) => {
  return new Promise(async (resolve) => {
    let image = new Image();

    image.onload = async function () {
      let width = image.width;
      let height = image.height;

      if (size > 1) {
        width = image.width * size;
        height = image.height * size;
      }

      let matrix = [1 / size, 0, 0, 0, 1 / size, 0, 0, 0, 1];
      resolve(await transformImage(canvasId, image, width, height, matrix));
    };

    image.crossOrigin = "";
    image.src = src;
  });
};

const translateImage = (src, canvasId, tx, ty) => {
  return new Promise(async (resolve) => {
    let image = new Image();

    image.onload = async function () {
      let width = image.width + tx;
      let height = image.height + ty;
      let matrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];
      if (tx > 0) {
        matrix[6] = -tx;
      }
      if (ty > 0) {
        matrix[7] = -ty;
      }
      resolve(await transformImage(canvasId, image, width, height, matrix));
    };

    image.crossOrigin = "";
    image.src = src;
  });
};

const rotateImage = (src, canvasId, ang) => {
  return new Promise(async (resolve) => {
    let image = new Image();

    image.onload = async function () {
      let width = image.width;
      let height = image.height;
      let cos = Math.cos((ang * Math.PI) / 180);
      let sin = Math.sin((ang * Math.PI) / 180);
      let xt = (-sin * width) / 2 - (cos * height) / 2 + image.height / 2;
      let yt = (-cos * width) / 2 + (sin * height) / 2 + image.width / 2;
      let matrix = [cos, -sin, 0, sin, cos, 0, xt, yt, 1];

      resolve(await transformImage(canvasId, image, width, height, matrix));
    };

    image.crossOrigin = "";
    image.src = src;
  });
};

const main = async () => {
  questions.forEach(async (question) => {
    $("#canvas-wrapper").append(
      `<div>
          <p>${question.text}</p>
          <canvas id="canvas-${question.name}"></canvas>
          <canvas id="canvas-result-${question.name}"></canvas>
        </div>`
    );

    loadImageInCanvas(question.name, `canvas-${question.name}`);

    switch (question.type) {
      case "ESPELHAR_VERTICAL":
        loadAltImageInCanvas(
          await mirrorImage(
            question.name,
            `canvas-result-${question.name}`,
            false,
            true
          )
        );
        break;
      case "REDIMENSIONAR_2X":
        loadAltImageInCanvas(
          await resizeImage(question.name, `canvas-result-${question.name}`, 2)
        );
        break;
      case "ESPELHAR_HORIZONTAL":
        loadAltImageInCanvas(
          await mirrorImage(
            question.name,
            `canvas-result-${question.name}`,
            true,
            false
          )
        );
        break;
      case "TRANSLADAR_10_COLUNAS_DIREITA":
        loadAltImageInCanvas(
          await translateImage(
            question.name,
            `canvas-result-${question.name}`,
            100,
            0
          )
        );
        break;
      case "ROTACIONAR_90_GRAUS":
        loadAltImageInCanvas(
          await rotateImage(question.name, `canvas-result-${question.name}`, 90)
        );
        break;
      case "REDIMENSIONAR_METADE":
        loadAltImageInCanvas(
          await resizeImage(question.name, `canvas-result-${question.name}`, 0.5)
        );
        break;
    }
  });
};

main();