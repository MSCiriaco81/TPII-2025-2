// QUESTÃO-5.8: Prototype para RH (clonagem de perfis de cargos)
class PerfilCargo {
    constructor(nome, salario, beneficios) {
        this.nome = nome;
        this.salario = salario;
        this.beneficios = beneficios;
    }
    clone() {
        return new PerfilCargo(this.nome, this.salario, [...this.beneficios]);
    }
    show() {
        return `${this.nome} - Salário: ${this.salario}, Benefícios: ${this.beneficios.join(', ')}`;
    }
}

// Exemplo de uso:
// const perfil = new PerfilCargo('Analista', 5000, ['VR', 'VT']);
// const copia = perfil.clone();

// Saída de exemplo:
const perfil = new PerfilCargo('Mentat', 8000, ['VR', 'VT']);
const copia = perfil.clone();
copia.beneficios.push('Plano de Saúde');
console.log(`Piter de Vries: ${perfil.show()}`);
console.log(`Tyrion Lannister: ${copia.show()}`);
