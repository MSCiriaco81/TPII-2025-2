// OBJETO REAL
class ServicoReal{
    executar(){
        console.log("Objeto Real - Executando o Serviço Real");
    }
}

// PROXY - PROCURADOR:
class ProxyServicoReal{
    constructor(){
        this.servicoReal = new ServicoReal();
    }

    executar(){
        console.log("Proxy - Antes da Execução do Serviço Real");
        this.servicoReal.executar();
        console.log("Proxy - Depois da Execução do Serviço Real");
    }
}

// USO DO PROXY:
const proxy = new ProxyServicoReal();
proxy.executar();