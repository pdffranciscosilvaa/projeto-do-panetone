import Preco from "../Model/Preco.js"
import Tamanho from "../Model/DefTamanho.js"
describe("Classe Preco", () => {
  test("Custo total para tamanho médio", () => {
    const custo = Preco.calcularPrecoFinal(2);
    const custoEsperado = Object.values(Tamanho.ingredientesBase)
      .reduce((acc, qtd, i) => acc + qtd * Object.values(Preco.precos)[i], 0);
    expect(parseFloat(custo)).toBeCloseTo(custoEsperado, 2);
  });

  test("Custo para tamanho personalizado", () => {
    const custo = Preco.calcularPrecoFinal(4, 5, 10);
    expect(parseFloat(custo)).toBeGreaterThan(0); // Teste genérico para retorno numérico positivo
  });
});