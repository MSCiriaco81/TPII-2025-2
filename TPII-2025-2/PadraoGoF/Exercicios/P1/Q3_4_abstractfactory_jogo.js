// QUESTÃO-3.4: Abstract Factory para jogo de personagens
// Famílias: Herói e Malvado, cada um com arma e habilidade

// Produtos Abstratos
class Personagem {
    descricao() { throw new Error('Implementar descricao()'); }
}
class Arma {
    usar() { throw new Error('Implementar usar()'); }
}
class Habilidade {
    executar() { throw new Error('Implementar executar()'); }
}

// Produtos Concretos Herói
class Heroi extends Personagem {
    descricao() { return 'Herói valente'; }
}
class Espada extends Arma {
    usar() { return 'Usando espada heroica!'; }
}
class Cura extends Habilidade {
    executar() { return 'Habilidade de cura ativada!'; }
}

// Produtos Concretos Malvado
class Malvado extends Personagem {
    descricao() { return 'Vilão terrível'; }
}
class Cajado extends Arma {
    usar() { return 'Usando cajado sombrio!'; }
}
class Magia extends Habilidade {
    executar() { return 'Magia negra lançada!'; }
}

// Abstract Factory
class PersonagemFactory {
    criarPersonagem() { throw new Error('Implementar criarPersonagem()'); }
    criarArma() { throw new Error('Implementar criarArma()'); }
    criarHabilidade() { throw new Error('Implementar criarHabilidade()'); }
}

// Concrete Factories
class HeroiFactory extends PersonagemFactory {
    criarPersonagem() { return new Heroi(); }
    criarArma() { return new Espada(); }
    criarHabilidade() { return new Cura(); }
}
class MalvadoFactory extends PersonagemFactory {
    criarPersonagem() { return new Malvado(); }
    criarArma() { return new Cajado(); }
    criarHabilidade() { return new Magia(); }
}

// Exemplo de uso:
// const factory = new HeroiFactory();
// const personagem = factory.criarPersonagem();
// const arma = factory.criarArma();

// Saída de exemplo:
const personagens = [
    { nome: 'Duncan Idaho', factory: new HeroiFactory() },
    { nome: 'Cersei Lannister', factory: new MalvadoFactory() }
];
personagens.forEach(p => {
    const personagem = p.factory.criarPersonagem();
    const arma = p.factory.criarArma();
    const habilidade = p.factory.criarHabilidade();
    console.log(`${p.nome}: ${personagem.descricao()}, ${arma.usar()}, ${habilidade.executar()}`);
});
// console.log(personagem.descricao(), arma.usar(), habilidade.executar());
