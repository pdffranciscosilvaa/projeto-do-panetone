import Ings from './DefIngredientes.js'
export default class Preco{
    preco = {
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
    }
    calcularPreco(){
        let valorTotal = 0
        let ings = Ings.calcularIngs()
        for (let i = 0; i < ings.length; i++){
           valorTotal += ings[i] * this.preco[i]
        }
        return valorTotal
    }
    getPreco(){
        return this.preco
    }
    //O código irá calcular o preço total do panetone a partir dos ingredientes e seus respectivos preços
    //O valor total é retornado, onde deve ser mostrado no index.html a partir da função calcularPreco()
}
