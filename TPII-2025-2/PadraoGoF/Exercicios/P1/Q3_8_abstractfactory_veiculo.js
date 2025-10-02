// QUESTÃO-3.8: Abstract Factory para simulador de veículos
// Produtos: Motor, Roda

class Motor {
    tipo() { throw new Error('Implementar tipo()'); }
}
class Roda {
    tamanho() { throw new Error('Implementar tamanho()'); }
}

// Esportivo
class MotorEsportivo extends Motor {
    tipo() { return 'Motor V8 esportivo'; }
}
class RodaEsportiva extends Roda {
    tamanho() { return 'Roda 20" esportiva'; }
}

// Popular
class MotorPopular extends Motor {
    tipo() { return 'Motor 1.0 popular'; }
}
class RodaPopular extends Roda {
    tamanho() { return 'Roda 14" popular'; }
}

// Abstract Factory
class VeiculoFactory {
    criarMotor() { throw new Error('Implementar criarMotor()'); }
    criarRoda() { throw new Error('Implementar criarRoda()'); }
}

class EsportivoFactory extends VeiculoFactory {
    criarMotor() { return new MotorEsportivo(); }
    criarRoda() { return new RodaEsportiva(); }
}
class PopularFactory extends VeiculoFactory {
    criarMotor() { return new MotorPopular(); }
    criarRoda() { return new RodaPopular(); }
}

// Exemplo de uso:
// const factory = new EsportivoFactory();
// const motor = factory.criarMotor();

// Saída de exemplo:
const motoristas = [
    { nome: 'Ghanima Atreides', factory: new EsportivoFactory() },
    { nome: 'Samwell Tarly', factory: new PopularFactory() }
];
motoristas.forEach(m => {
    const motor = m.factory.criarMotor();
    const roda = m.factory.criarRoda();
    console.log(`${m.nome}: ${motor.tipo()}, ${roda.tamanho()}`);
});
