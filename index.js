import Tamanho from './DefTamanho.js';
import Ings from './DefIngredientes.js';
import Volume from './Volume.js';
import Preco from './Preco.js';
function main() {
    const opcaoTamanho = 2
    Tamanho(opcaoTamanho)
    const volume = new Volume(5, 10)
    const volumeCalculado = volume.calcularVolume()
    console.log(`Volume calculado: ${volumeCalculado}`)
    const ingredientes = new Ings()
    const ingredientesCalculados = ingredientes.calcularIngs()
    console.log(`Ingredientes calculados: ${JSON.stringify(ingredientesCalculados)}`)
    const quantidade = 1
    const preco = new Preco(quantidade)
    const precoTotal = preco.calcularPreco()
    console.log(`Preço total: ${precoTotal}`)
}
main()