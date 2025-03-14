import Volume from "../Model/Volume.js";
import Tamanho from "../Model/DefTamanho.js";

describe("Classe Volume", () => {
  test("Cálculo de volume personalizado", () => {
    const volumeObj = new Volume(5, 10);
    jest.spyOn(Tamanho, 'calcularVolumePersonalizado').mockReturnValue(4);
    expect(volumeObj.calcularVolume()).toBeCloseTo(Math.PI * 25 * 10, 2);
  });

  test("Cálculo para tamanho padrão", () => {
    const volumeObj = new Volume(0, 0);
    jest.spyOn(Tamanho, 'calcularVolumePersonalizado').mockReturnValue(2);
    expect(volumeObj.calcularVolume()).toBeCloseTo(1 / 0.785, 2);
  });
});