import Volume from "./Volume"
export default class Tamanho{
    constructor(opcao){
        this.opcao = opcao
    }
    tamanho = {
        "pequeno": 180,
        "medio": 440,
        "grande": 700,
        "personalizado": calcTamanhoPers()
    }
    getTamanho() {
        switch(this.opcao){
            case 1:
                return this.tamanho = "pequeno"
            case 2:
                return this.tamanho = "medio"
            case 3:
                return this.tamanho = "grande"
            case 4:
                return this.tamanho = "personalizado"
            default:
                return alert("Opção inválida")
        }
    }
    calcTamanhoPers(){
        raio = Volume.getRaio()
        altura = Volume.getAltura()
        return Math.PI * Math.pow(raio, 2) * altura
    }
    getOpcao(){
        return this.opcao
    }
    getTamanho(){
        return this.tamanho
    }
}