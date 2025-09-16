// Class Pessoa - Padrão que será clonado

class Pessoa{
    constructor(id, nome, idade){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }

    // Metodo clone
    clone(){
        return new Pessoa(this.id, this.nome, this.idade);
    }
}

// Classe PessoaManager
class PessoaManager{
    constructor(){
        this.pessoas = {};
    }

    // Metodo addPessoa
    addPessoa(id, nome, idade){
        const pessoa = new Pessoa(id, nome, idade);
        this.pessoas[id] = pessoa;
    }

    // Metodo getPessoas
    getPessoasId(id){
        const pessoaOriginal = this.pessoas[id];
        if(pessoaOriginal){
            return pessoaOriginal.clone();
        }else{
            return null;
        }
    }
}

// Criando uma instancia de PessoaManager
const manager = new PessoaManager();

// Add tres pessoas
manager.addPessoa(1, "Viado da bike", 44)
manager.addPessoa(2, "Bin laden de diadema", 65)
manager.addPessoa(3, "Michel Temer", 1360)

// Clonando 1 pessoas e modificando
const pessoaClone1 = manager.getPessoasId(1);
if(pessoaClone1){
    pessoaClone1.nome = "Gordinho bololo";
    pessoaClone1.id = 3;
}


// Imprimindo pessoas
console.log("Pessoa original:")
console.log(manager.getPessoasId(1))
console.log("Pessoa clonada:")
console.log(pessoaClone1)