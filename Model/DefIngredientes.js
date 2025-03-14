
import Tamanho from "./DefTamanho.js"
export default class Ings {
    calcularIngs(){
        let ings = [{farinha_trigo}, {acucar}, {manteiga}, {ovos}, {leite}, {fermento}, {sal}]
        let proporc = Tamanho.getProporc()
        let ingredientes = Tamanho.ingredientes
        for (let i = 0; i < ingredientes.length; i++){
            ings[i] = ingredientes[i] * proporc
        }
        return ings
    }
    getIngs(){
        return this.ings

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