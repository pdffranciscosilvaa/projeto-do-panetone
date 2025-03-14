import Volume from "./Volume.js"
export default class Tamanho{
    constructor(opcao){
        this.opcao = opcao
    }
    calcTamanhoPers(){
        raio = Volume.getRaio()
        altura = Volume.getAltura()
        return Math.PI * Math.pow(raio, 2) * altura
    }
    tamanho = {
        "pequeno": 180,
        "medio": 440,
        "grande": 700,
        "personalizado": calcTamanhoPers()
    }
    ingredientes = {
        "Farinha de trigo integral": 150,
        "Farinha de trigo branca": 100,
        "Fermento biológico seco": 5,
        "Leite morno": 60,
        "Ovos": 2,
        "Manteiga sem sal": 40,
        "Açúcar mascavo": 50,
        "Mel": 10,
        "Essência de baunilha": 5,
        "Frutas secas": 80,
        "Sal": 2
    }
    getProporc(){
        switch(tamanho){
            case "pequeno":
                return proporc = 0.409
            case "medio":
                return proporc = 1
            case "grande":
                return proporc = 1.59
            case "personalizado":
                return proporc = calcTamanhoPers()/440
            default:
                return alert("Opção inválida")
        }
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
    getOpcao(){
        return this.opcao
    }
    getTamanho(){
        return this.tamanho
    }
}