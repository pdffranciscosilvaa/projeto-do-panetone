import Tamanho from "./DefTamanho.js"
export default class Volume{
    constructor(raio, altura){
        this.raio = raio
        this.altura = altura
    }
    calcularVolume(){
        if(Tamanho.getTamanho() == "personalizado"){
            return Tamanho.calcTamanhoPers()
        }else{
            return Tamanho.getTamanho() / 0,785
        }
    }
    getRaio(){
        return this.raio
    }
    getAltura(){
        return this.altura
    }
}    