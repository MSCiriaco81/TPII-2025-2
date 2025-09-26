// Exemplo de Abstract Factory em Java - Exercício Veículos

// Interface Abstrata da Fábrica
abstract class VeiculoAbstrato {
    abstract VeiculoTerrestre criaVeiculoTerrestre1();
    abstract VeiculoTerrestre criaVeiculoTerrestre2();
    abstract VeiculoAereo criaVeiculoAereo1();
    abstract VeiculoAereo criaVeiculoAereo2();
}

// Fábrica Concreta para Veículos Terrestres
class Terrestre extends VeiculoAbstrato {
    @Override
    VeiculoTerrestre criaVeiculoTerrestre1() {
        return new Carro();
    }
    @Override
    VeiculoTerrestre criaVeiculoTerrestre2() {
        return new Onibus();
    }
    @Override
    VeiculoAereo criaVeiculoAereo1() {
        return null;
    }
    @Override
    VeiculoAereo criaVeiculoAereo2() {
        return null;
    }
}

// Fábrica Concreta para Veículos Aéreos
class Aereo extends VeiculoAbstrato {
    @Override
    VeiculoTerrestre criaVeiculoTerrestre1() {
        return null;
    }
    @Override
    VeiculoTerrestre criaVeiculoTerrestre2() {
        return null;
    }
    @Override
    VeiculoAereo criaVeiculoAereo1() {
        return new Aviao();
    }
    @Override
    VeiculoAereo criaVeiculoAereo2() {
        return new Helicoptero();
    }
}

// Interfaces e classes para veículos terrestres
abstract class VeiculoTerrestre {
    String tipo = "Terrestre";
    abstract String descricao();
}

class Carro extends VeiculoTerrestre {
    @Override
    String descricao() {
        return "Tipo de transporte " + tipo + ": Carro";
    }
}

class Onibus extends VeiculoTerrestre {
    @Override
    String descricao() {
        return "Tipo de transporte " + tipo + ": Onibus";
    }
}

// Interfaces e classes para veículos aéreos
abstract class VeiculoAereo {
    String tipo = "Aereo";
    abstract String descricao();
}

class Aviao extends VeiculoAereo {
    @Override
    String descricao() {
        return "Tipo de transporte " + tipo + ": Aviao";
    }
}

class Helicoptero extends VeiculoAereo {
    @Override
    String descricao() {
        return "Tipo de transporte " + tipo + ": Helicoptero";
    }
}

// Simulação de uso
class SimulacaoVeiculo {
    static void veiculo(String dono, VeiculoAbstrato veiculo) {
        VeiculoTerrestre vt1 = veiculo.criaVeiculoTerrestre1();
        VeiculoTerrestre vt2 = veiculo.criaVeiculoTerrestre2();
        VeiculoAereo va1 = veiculo.criaVeiculoAereo1();
        VeiculoAereo va2 = veiculo.criaVeiculoAereo2();
        System.out.println(dono + " Tem um:");
        if (va1 != null) System.out.println(va1.descricao());
        if (va2 != null) System.out.println(va2.descricao());
        if (vt1 != null) System.out.println(vt1.descricao());
        if (vt2 != null) System.out.println(vt2.descricao());
    }

    public static void main(String[] args) {
        String dono1 = "João da Silva";
        VeiculoAbstrato terrestre = new Terrestre();
        veiculo(dono1, terrestre);

        String dono2 = "Maria da Silva";
        VeiculoAbstrato aereo = new Aereo();
        veiculo(dono2, aereo);
    }
}
