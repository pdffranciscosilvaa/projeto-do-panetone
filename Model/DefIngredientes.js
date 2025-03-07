import Tamanho from "./DefTamanho"
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
    }
}