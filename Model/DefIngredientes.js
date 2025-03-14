import Tamanho from "./DefTamanho.js";

export default class Ingredientes {
  static calcularQuantidades(opcao, raio = 0, altura = 0) {
    const volume = Tamanho.getTamanho(opcao, raio, altura);
    const proporcao = volume / Tamanho.tamanhosPadrao[2]; // Proporção relativa ao tamanho médio (base)
    const quantidades = {};

    for (const [ingrediente, qtdBase] of Object.entries(Tamanho.ingredientesBase)) {
      quantidades[ingrediente] = qtdBase * proporcao;
    }
    return quantidades;
  }
}