const euroinput = document.getElementById("euro");

const dolarinput = document.getElementById("dolar");

const converterEuroInput = document.getElementById("botao-converter-euro");

const converterDolarInput = document.getElementById("botao-converter-dolar");

const resultadoEuroInput = document.getElementById("resultadoEuro");

const resultadoDolarInput = document.getElementById("resultadoDolar");

const euro = 6;

const dolar = 5.2;

const botaoLimpar = document.getElementById("botao-limpar");

botaoLimpar.addEventListener("click", () => {
  euroinput.value = "";
  dolarinput.value = "";

  resultadoEuroInput.innerHTML = "";
  resultadoDolarInput.innerHTML = "";
});

converterEuroInput.addEventListener("click", () => {
  if (euroinput.value !== "" && euroinput.value > 0) {
    const valor = euroinput.value;

    const resultado = valor * euro;

    resultadoEuroInput.innerHTML = `<span class="text-primary">Conversão de Euro para Real: R$ ${resultado.toFixed(2)}</span>`;
  } else {
    resultadoEuroInput.innerHTML =
      '<span class="text-danger">Digite um valor de Euro válido!</span>';
  }
});

converterDolarInput.addEventListener("click", () => {
  if (dolarinput.value !== "" && dolarinput.value > 0) {
    const valor = dolarinput.value;

    const resultado = valor * dolar;

    resultadoDolarInput.innerHTML = `<span class="text-success">Conversão de Dólar para Real: R$ ${resultado.toFixed(2)}</span>`;
  } else {
    resultadoDolarInput.innerHTML =
      '<span class="text-danger">Digite um valor de Dólar válido!</span>';
  }
});
