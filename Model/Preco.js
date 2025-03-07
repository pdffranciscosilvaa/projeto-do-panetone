import Ings from './Ings.js'
export default class Preco{
    preco = {
        "Farinha de trigo integral": 0.5,
        "Farinha de trigo branca": 0.5,
        "Fermento biológico seco": 0.5,
        "Leite morno": 0.5,
        "Ovos": 0.5,
        "Manteiga sem sal": 0.5,
        "Açúcar mascavo": 0.5,
        "Mel": 0.5,
        "Essência de baunilha": 0.5,
        "Frutas secas": 0.5,
        "Sal": 0.5
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