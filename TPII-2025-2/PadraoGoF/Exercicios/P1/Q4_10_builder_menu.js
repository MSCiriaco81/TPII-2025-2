// QUESTÃO-4.10: Builder para menu de aplicativo
class Menu {
    constructor() {
        this.titulo = '';
        this.icones = [];
        this.submenus = [];
    }
    setTitulo(titulo) { this.titulo = titulo; }
    addIcone(icone) { this.icones.push(icone); }
    addSubmenu(submenu) { this.submenus.push(submenu); }
    show() {
        return `Menu: ${this.titulo}\nÍcones: ${this.icones.join(', ')}\nSubmenus: ${this.submenus.join(', ')}`;
    }
}

class MenuBuilder {
    constructor() {
        this.menu = new Menu();
    }
    setTitulo(titulo) { this.menu.setTitulo(titulo); return this; }
    addIcone(icone) { this.menu.addIcone(icone); return this; }
    addSubmenu(submenu) { this.menu.addSubmenu(submenu); return this; }
    build() { return this.menu; }
}

// Exemplo de uso:
// const builder = new MenuBuilder();

// Saída de exemplo:
const menus = [
    { nome: 'Doran Martell', menu: new MenuBuilder().setTitulo('Configurações').addIcone('engrenagem').addSubmenu('Usuários').build() },
    { nome: 'Chani', menu: new MenuBuilder().setTitulo('Relatórios').addIcone('gráfico').addSubmenu('Exportar').addSubmenu('Importar').build() }
];
menus.forEach(m => {
    console.log(`${m.nome}:\n${m.menu.show()}`);
});
