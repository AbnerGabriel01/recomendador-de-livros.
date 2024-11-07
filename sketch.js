//como convencer alguem em 90 segundos
//as armas da persuasão 
//gatlhos mentais
//o herói fora da lei 
//storycelling
//as coisas que voce só ve quando desacelera
//para voce que sente demais



let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de livros");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de descobertas?");
  campoAventura = createCheckbox("Gosta de mistério?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Como convencer alguem em 90 segundos";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "as armas da persuasão ";          
        } else{
         return "o herói fora da lei ";
        }
      } else {
        if (gostaDeFantasia) {
          return "as coisas que voce só ve quando desacelera";
        } else {
          return "gatlhos mentais";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "para voce que sente demais";
    } else {
      return "storycelling";
    }
  }
}
