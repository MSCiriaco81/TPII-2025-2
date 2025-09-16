// 1 - Interface do Cliente
class AplicacaoCliente{
    request() {}
}

class Cliente{
    constructor(target){
        this.target = target;
    }

    criaRequest(){
        console.log("Cliente - Fazendo uma requisição");
        this.target.request();
    }
}

// 2 - Serviço Existente
class Adaptee{
    especificaRequest(){
        console.log("Requisição especifica do Adaptee");
    }
}

// 3 - Adapter
class Adapter{
    constructor(adaptee){
        this.adaptee = adaptee;
    }

    request(){
        this.adaptee.especificaRequest();
    }
}

// 5 - UTILIZANDO O ADAPTAR -----------------------------------
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
const cliente = new Cliente(adapter);

// Fazendo uma requisição - Requisição Especifica do Adaptee:
cliente.criaRequest();