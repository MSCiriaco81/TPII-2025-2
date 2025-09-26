class VeiculoAbstrato{
    criaVeiculoTerrestre(){}
    criaVeiculoAereo(){}
}

class Terrestre extends VeiculoAbstrato{
    criaVeiculoTerrestre(){
        return new Carro();
    }

    criaVeiculoTerrestre(){
        return new Onibus();
    }
}

class Aereo extends VeiculoAbstrato{
    criaVeiculoAereo(){
        return new Helicoptero();
    }

    criaVeiculoAereo(){
        return new Aviao();
    }
}

class VeiculoTerrestre01{
    constructor(){
        this.tipo = "Terrestre";
    }

    descricao(){
        return `Tipo de transporte ${this.tipo}: Carro`;
    }
}

class VeiculoTerrestre02{
    constructor(){
        this.tipo = "Terrestre";
    }

    descricao(){
        return `Tipo de transporte ${this.tipo}: Onibus`;
    }
}

class VeiculoAereo01{
    constructor(){
        this.tipo = "Aereo";
    }

    descricao(){
        return `Tipo de transporte ${this.tipo}: Avião`;
    }
}

class VeiculoAereo02{
    constructor(){
        this.tipo = "Aereo";
    }

    descricao(){
        return `Tipo de transporte ${this.tipo}: Helicoptero`;
    }
}

class Carro extends VeiculoTerrestre01{
    descricao(){
        return `Tipo de transporte ${this.tipo}: Carro`
    }
}

class Onibus extends VeiculoTerrestre02{
    descricao(){
        return `Tipo de transporte ${this.tipo}: Onibus`
    }
}

class Aviao extends VeiculoAereo01{
    descricao(){
        return `Tipo de transporte ${this.tipo}: Aviao`
    }
}

class Helicoptero extends VeiculoAereo02{
    descricao(){
        return `Tipo de transporte ${this.tipo}: Helicoptero`
    }
}

function veiculo(dono, veiculo){
    const VeiculoTerrestre01 = veiculo.criaVeiculoTerrestre();
    const VeiculoTerrestre02 = veiculo.criaVeiculoTerrestre();

    const VeiculoAereo01 = veiculo.criaVeiculoAereo();
    const VeiculoAereo02 = veiculo.criaVeiculoAereo();

    console.log(`${dono} Tem um:`);
    console.log(VeiculoAereo01.descricao());
    console.log(VeiculoAereo02.descricao());
    console.log(VeiculoTerrestre01.descricao());
    console.log(VeiculoTerrestre02.descricao());
}

const dono1 = "João da Silva";
const Terrestre = new Terrestre;
veiculo(dono1, Terrestre);

const dono2 = "Maria da Silva";
const Aereo = new Aereo;
veiculo(dono1, Aereo);

