import Ingredientes from "../Model/DefIngredientes.js";
import Tamanho from "../Model/DefTamanho.js";

describe("Classe Ingredientes", () => {
  test("Quantidades proporcionais ao tamanho médio", () => {
    const quantidades = Ingredientes.calcularQuantidades(2);
    const qtdEsperadaFarinhaIntegral = 150;
    expect(quantidades["Farinha de trigo integral"]).toBe(qtdEsperadaFarinhaIntegral);
  });

  test("Proporção para tamanho personalizado", () => {
    const volumeMedio = Tamanho.tamanhosPadrao[2];
    const quantidades = Ingredientes.calcularQuantidades(4, 5, 10);
    const proporcaoEsperada = (Math.PI * 25 * 10) / volumeMedio;
    expect(quantidades["Ovos"]).toBeCloseTo(2 * proporcaoEsperada, 2);
  });
});