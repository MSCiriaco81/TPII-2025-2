// classe base de veiculo:
class Veiculo{
    constructor(modelo){
        this.modelo = modelo;
    }
    mostrarDetalhes(){
        console.log(`Modelo: ${this.modelo}`);
    }
}

// subclasse de veiculo:

// Carro
class Carro extends Veiculo{
    constructor(modelo){
        super(modelo);
    }
}

// Moto
class Moto extends Veiculo{
    constructor(modelo){
        super(modelo);
    }
}

// Caminhão
class Caminhao extends Veiculo{
    constructor(modelo){
        super(modelo);
    }
}

// Fabrica Abstrata de veiculo:
class FabricaDeVeiculo{
    criarVeiculo(modelo){
        throw new Error("Metodo deve ser implementado na subclasse");
    }
}

// Fabrica concreta de carro
class FabricaDeCarro extends FabricaDeVeiculo{
    criarVeiculo(modelo){
        return new Carro(modelo);
    }
}

// Fabrica concreta de moto
class FabricaDeMoto extends FabricaDeVeiculo{
    criarVeiculo(modelo){
        return new Moto(modelo);
    }
}

// Fabrica concreta de caminhão
class FabricaDeCaminhao extends FabricaDeVeiculo{
    criarVeiculo(modelo){
        return new Caminhao(modelo);
    }
}

// USO DO PADRAO DE PROJETO - FABRICA
const fabricaDeCarro = new FabricaDeCarro();
const fabricaDeMoto = new FabricaDeMoto();
const fabricaDeCaminhao = new FabricaDeCaminhao();


const carro1 = fabricaDeCarro.criarVeiculo("Sedan");
carro1.mostrarDetalhes();
const carro2 = fabricaDeCarro.criarVeiculo("esportivo");
carro2.mostrarDetalhes();

const moto1 = fabricaDeMoto.criarVeiculo("Yamaha");
moto1.mostrarDetalhes();
const moto2 = fabricaDeMoto.criarVeiculo("Honda");
moto2.mostrarDetalhes();

const caminhao1 = fabricaDeCaminhao.criarVeiculo("Scania");
caminhao1.mostrarDetalhes();
const caminhao2 = fabricaDeCaminhao.criarVeiculo("W-Cargo");
caminhao2.mostrarDetalhes();