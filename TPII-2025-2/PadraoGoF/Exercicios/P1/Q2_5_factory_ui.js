// QUESTÃO-2.5: UI Factory para diferentes sistemas operacionais
class UIElement {
    render() {
        throw new Error('Método render() deve ser implementado.');
    }
}

class WindowsButton extends UIElement {
    render() {
        return 'Renderizando botão no Windows';
    }
}

class MacButton extends UIElement {
    render() {
        return 'Renderizando botão no Mac';
    }
}

class LinuxButton extends UIElement {
    render() {
        return 'Renderizando botão no Linux';
    }
}

class UIFactory {
    criarBotao() {
        throw new Error('Método criarBotao() deve ser implementado.');
    }
    renderizarBotao() {
        const botao = this.criarBotao();
        return botao.render();
    }
}

class WindowsUIFactory extends UIFactory {
    criarBotao() {
        return new WindowsButton();
    }
}

class MacUIFactory extends UIFactory {
    criarBotao() {
        return new MacButton();
    }
}

class LinuxUIFactory extends UIFactory {
    criarBotao() {
        return new LinuxButton();
    }
}


// Saída de exemplo:
const usuarios = [
    { nome: 'Vladimir Harkonnen', factory: new WindowsUIFactory() },
    { nome: 'Jon Snow', factory: new MacUIFactory() },
    { nome: 'Chani', factory: new LinuxUIFactory() }
];
usuarios.forEach(u => {
    console.log(`${u.nome}: ${u.factory.renderizarBotao()}`);
});
