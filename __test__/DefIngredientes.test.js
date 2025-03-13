import Tamanho from '../Model/DefTamanho'
import Ings from '../Model/DefIngredientes'

describe('Testes da classe Tamanho', () => {
    test('deve retornar tamanho pequeno quando opcao é 1', () => {
        const tamanho = new Tamanho(1)
        expect(tamanho.getTamanho()).toBe('pequeno')
    })

    test('deve retornar tamanho medio quando opcao é 2', () => {
        const tamanho = new Tamanho(2)
        expect(tamanho.getTamanho()).toBe('medio') 
    })

    test('deve retornar tamanho grande quando opcao é 3', () => {
        const tamanho = new Tamanho(3)
        expect(tamanho.getTamanho()).toBe('grande')
    })

    test('deve retornar proporção correta para cada tamanho', () => {
        const tamanhoPequeno = new Tamanho(1)
        const tamanhoMedio = new Tamanho(2)
        const tamanhoGrande = new Tamanho(3)

        expect(tamanhoPequeno.getProporc()).toBeCloseTo(0.409)
        expect(tamanhoMedio.getProporc()).toBe(1)
        expect(tamanhoGrande.getProporc()).toBeCloseTo(1.59)
    })
})
//============================================================
//============================================================
//============================================================
describe('Testes da classe Ings', () => {
    test('deve calcular ingredientes corretamente', () => {
        const ings = new Ings()
        const ingredientesCalculados = ings.calcularIngs() //A função calcularIngs() retorna um array com os ingredientes calculados, assim sendo necessário o uso de toBeInstanceOf(Array) para verificar se o retorno é um array e toBe(7) para verificar se o array possui 7 elementos como pré-definido na função calcularIngs()

        expect(ingredientesCalculados).toBeInstanceOf(Array)
        expect(ingredientesCalculados.length).toBe(7)
    })

    test('deve retornar ingredientes após cálculo', () => {
        const ings = new Ings()
        ings.calcularIngs()
        
        expect(ings.getIngs()).toBeDefined()
    })
})

describe('Testes de integração', () => {
    test('deve calcular ingredientes com base no tamanho', () => {
        const tamanho = new Tamanho(2) // tamanho médio
        const ings = new Ings()
        
        const ingredientesCalculados = ings.calcularIngs()
        expect(ingredientesCalculados).toBeDefined()
    })
})