import Tamanho from "./DefTamanho"
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
    //O códgio irá pegar o valor do raio e da altura e calcular o volume do panetone
    //Se o tamanho for personalizado, ele irá calcular o volume do panetone personalizado a partir de outra classe definida como DefTamanho
    //Se o tamanho não for personalizado, ele irá calcular o volume do panetone a partir do tamanho padrão encontrado também no DefTamanho
    //O cálculo do volume é feito a partir da fórmula do volume de um cilindro
}    