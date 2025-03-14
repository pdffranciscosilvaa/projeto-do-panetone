import Preco from "./DefPreco.js"; // Certifique-se de que o caminho está correto
import Tamanho from "./DefTamanho.js";
import Volume from "./DefVolume.js";

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para obter a opção de tamanho
function obterOpcao() {
  return new Promise((resolve) => {
    readline.question('Escolha o tamanho (1: Pequeno, 2: Médio, 3: Grande, 4: Personalizado): ', (opcao) => {
      resolve(parseInt(opcao));
    });
  });
}

// Função para obter raio e altura se a opção for personalizada
function obterDimensoes() {
  return new Promise((resolve) => {
    readline.question('Digite o raio: ', (raio) => {
      readline.question('Digite a altura: ', (altura) => {
        resolve({ raio: parseFloat(raio), altura: parseFloat(altura) });
      });
    });
  });
}

// Função principal
async function main() {
  const opcao = await obterOpcao();
  let raio = 0;
  let altura = 0;

  if (opcao === 4) {
    const dimensoes = await obterDimensoes();
    raio = dimensoes.raio;
    altura = dimensoes.altura;
  }

  const precoFinal = Preco.calcularPrecoFinal(opcao, raio, altura);
  console.log(`O preço final para a opção escolhida é: R$ ${precoFinal}`);
  
  readline.close();
}

// Executa a função principal
main();
