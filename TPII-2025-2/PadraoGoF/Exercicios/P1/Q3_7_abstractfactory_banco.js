// QUESTÃO-3.7: Abstract Factory para sistema bancário internacional
// Produtos: Menu, Idioma

class Menu {
    exibir() { throw new Error('Implementar exibir()'); }
}
class Idioma {
    saudacao() { throw new Error('Implementar saudacao()'); }
}

// Brasil
class MenuBrasil extends Menu {
    exibir() { return 'Menu em português'; }
}
class IdiomaBrasil extends Idioma {
    saudacao() { return 'Bem-vindo ao banco!'; }
}

// EUA
class MenuEUA extends Menu {
    exibir() { return 'Menu in English'; }
}
class IdiomaEUA extends Idioma {
    saudacao() { return 'Welcome to the bank!'; }
}

// França
class MenuFranca extends Menu {
    exibir() { return 'Menu en français'; }
}
class IdiomaFranca extends Idioma {
    saudacao() { return 'Bienvenue à la banque!'; }
}

// Abstract Factory
class BancoFactory {
    criarMenu() { throw new Error('Implementar criarMenu()'); }
    criarIdioma() { throw new Error('Implementar criarIdioma()'); }
}

class BancoBrasilFactory extends BancoFactory {
    criarMenu() { return new MenuBrasil(); }
    criarIdioma() { return new IdiomaBrasil(); }
}
class BancoEUAFactory extends BancoFactory {
    criarMenu() { return new MenuEUA(); }
    criarIdioma() { return new IdiomaEUA(); }
}
class BancoFrancaFactory extends BancoFactory {
    criarMenu() { return new MenuFranca(); }
    criarIdioma() { return new IdiomaFranca(); }
}

// Exemplo de uso:
// const factory = new BancoBrasilFactory();
// const menu = factory.criarMenu();

// Saída de exemplo:
const clientesBanco = [
    { nome: 'Stilgar', factory: new BancoBrasilFactory() },
    { nome: 'Joffrey Baratheon', factory: new BancoEUAFactory() },
    { nome: 'Irulan Corrino', factory: new BancoFrancaFactory() }
];
clientesBanco.forEach(c => {
    const menu = c.factory.criarMenu();
    const idioma = c.factory.criarIdioma();
    console.log(`${c.nome}: ${menu.exibir()}, ${idioma.saudacao()}`);
});
