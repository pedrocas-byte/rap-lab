// BANCO DE RIMAS
const rimas = {
  "vida": ["ferida", "caída", "batida"],
  "amor": ["dor", "flor", "terror"],
  "rua": ["lua", "crua", "continua"],
  "flow": ["show", "vou", "sou"],
  "mente": ["frente", "quente", "presente"]
};

// GERADOR DE RIMAS
function gerarRimas() {
  let texto = document.getElementById("input").value.toLowerCase();
  let palavras = texto.split(" ");
  let ultima = palavras[palavras.length - 1];

  let resultado = rimas[ultima] || ["Sem rimas encontradas"];

  document.getElementById("output").innerText = resultado.join(", ");
}

// CONTADOR DE SÍLABAS
function contarSilabas(palavra) {
  palavra = palavra.toLowerCase();
  let silabas = palavra.match(/[aeiouãâáéêíóôõú]+/g);
  return silabas ? silabas.length : 0;
}

function contarFrase() {
  let texto = document.getElementById("input").value;
  let palavras = texto.split(" ");

  let total = palavras.reduce((acc, p) => acc + contarSilabas(p), 0);

  document.getElementById("output").innerText = "Sílabas: " + total;
}

// FREESTYLE
const palavrasFreestyle = ["rua", "grana", "tempo", "mente", "flow"];

function freestyle() {
  let palavra = palavrasFreestyle[Math.floor(Math.random() * palavrasFreestyle.length)];

  document.getElementById("tema").innerText = "Tema: " + palavra;

  let tempo = 10;

  let intervalo = setInterval(() => {
    tempo--;
    document.getElementById("timer").innerText = tempo;

    if (tempo === 0) {
      clearInterval(intervalo);
      document.getElementById("timer").innerText = "Acabou!";
    }
  }, 1000);
}