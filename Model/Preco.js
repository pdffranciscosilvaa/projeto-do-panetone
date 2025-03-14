import Ingredientes from "./DefIngredientes.js";

export default class Preco {
  static precos = {
    "Farinha de trigo integral": 1.08,
    "Farinha de trigo branca": 0.62,
    "Fermento biológico seco": 1.25,
    "Leite morno": 0.27,
    "Ovos": 2.35,
    "Manteiga sem sal": 0.79,
    "Açúcar mascavo": 0.64,
    "Mel": 0.50,
    "Essência de baunilha": 1.85,
    "Frutas secas": 16.94,
    "Sal": 0.08
  };
  static calcularPrecoFinal(opcao, raio = 0, altura = 0) {
    const quantidades = Ingredientes.calcularQuantidades(opcao, raio, altura);
    let custoTotal = 0;

    for (const [ingrediente, qtd] of Object.entries(quantidades)) {
      custoTotal += qtd * this.precos[ingrediente];
    }
    return custoTotal.toFixed(2);
  }
}