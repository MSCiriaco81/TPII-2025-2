// QUESTÃO-3.6: Abstract Factory para UI multiplataforma
// Produtos: Botão, Menu

class Button {
    render() { throw new Error('Implementar render()'); }
}
class Menu {
    render() { throw new Error('Implementar render()'); }
}

// Windows
class WindowsButton extends Button {
    render() { return 'Botão do Windows'; }
}
class WindowsMenu extends Menu {
    render() { return 'Menu do Windows'; }
}

// Mac
class MacButton extends Button {
    render() { return 'Botão do Mac'; }
}
class MacMenu extends Menu {
    render() { return 'Menu do Mac'; }
}

// Linux
class LinuxButton extends Button {
    render() { return 'Botão do Linux'; }
}
class LinuxMenu extends Menu {
    render() { return 'Menu do Linux'; }
}

// Abstract Factory
class UIFactory {
    criarBotao() { throw new Error('Implementar criarBotao()'); }
    criarMenu() { throw new Error('Implementar criarMenu()'); }
}

class WindowsUIFactory extends UIFactory {
    criarBotao() { return new WindowsButton(); }
    criarMenu() { return new WindowsMenu(); }
}
class MacUIFactory extends UIFactory {
    criarBotao() { return new MacButton(); }
    criarMenu() { return new MacMenu(); }
}
class LinuxUIFactory extends UIFactory {
    criarBotao() { return new LinuxButton(); }
    criarMenu() { return new LinuxMenu(); }
}

// Exemplo de uso:
// const factory = new MacUIFactory();
// const botao = factory.criarBotao();

// Saída de exemplo:
const sistemas = [
    { nome: 'Baron Harkonnen', factory: new WindowsUIFactory() },
    { nome: 'Melisandre', factory: new MacUIFactory() },
    { nome: 'Gurney Halleck', factory: new LinuxUIFactory() }
];
sistemas.forEach(s => {
    const botao = s.factory.criarBotao();
    const menu = s.factory.criarMenu();
    console.log(`${s.nome}: ${botao.render()}, ${menu.render()}`);
});
