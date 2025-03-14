export default class Tamanho {
    static tamanhosPadrao = {
      1: 0.409,   // Pequeno
      2: 1,       // Médio
      3: 1.59,    // Grande
      4: null     // Personalizado
    };
  
    static ingredientesBase = {
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
    };
  
    static calcularVolumePersonalizado(raio, altura) {
      return Math.PI * Math.pow(raio, 2) * altura;
    }
  
    static getTamanho(opcao, raio = 0, altura = 0) {
      if (opcao === 4) return this.calcularVolumePersonalizado(raio, altura);
      return this.tamanhosPadrao[opcao];
    }
  }