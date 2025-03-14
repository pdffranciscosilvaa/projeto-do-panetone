import Tamanho from "../Model/DefTamanho.js";

describe("Classe Tamanho", () => {
  test("getTamanho retorna volumes padrão corretos", () => {
    expect(Tamanho.getTamanho(1)).toBe(0.409);
    expect(Tamanho.getTamanho(2)).toBe(1);
    expect(Tamanho.getTamanho(3)).toBe(1.59);
  });

  test("calcularVolumePersonalizado retorna volume correto", () => {
    const volume = Tamanho.calcularVolumePersonalizado(5, 10);
    expect(volume).toBeCloseTo(Math.PI * 25 * 10, 2);
  });
});