// Exemplo de Factory Method em Java - Veículos

// Classe base de veículo
class Veiculo {
    String modelo;
    Veiculo(String modelo) { this.modelo = modelo; }
    void mostrarDetalhes() {
        System.out.println("Modelo: " + modelo);
    }
}
// Carro
class Carro extends Veiculo {
    Carro(String modelo) { super(modelo); }
}
// Moto
class Moto extends Veiculo {
    Moto(String modelo) { super(modelo); }
}
// Caminhao
class Caminhao extends Veiculo {
    Caminhao(String modelo) { super(modelo); }
}
// Fábrica abstrata de veículo
abstract class FabricaDeVeiculo {
    abstract Veiculo criarVeiculo(String modelo);
}
// Fábrica concreta de carro
class FabricaDeCarro extends FabricaDeVeiculo {
    @Override
    Veiculo criarVeiculo(String modelo) { return new Carro(modelo); }
}
// Fábrica concreta de moto
class FabricaDeMoto extends FabricaDeVeiculo {
    @Override
    Veiculo criarVeiculo(String modelo) { return new Moto(modelo); }
}
// Fábrica concreta de caminhão
class FabricaDeCaminhao extends FabricaDeVeiculo {
    @Override
    Veiculo criarVeiculo(String modelo) { return new Caminhao(modelo); }
}

public class MainFactoryMethodVeiculo {
    public static void main(String[] args) {
        FabricaDeVeiculo fabricaDeCarro = new FabricaDeCarro();
        FabricaDeVeiculo fabricaDeMoto = new FabricaDeMoto();
        FabricaDeVeiculo fabricaDeCaminhao = new FabricaDeCaminhao();

        Veiculo carro1 = fabricaDeCarro.criarVeiculo("Sedan");
        carro1.mostrarDetalhes();
        Veiculo carro2 = fabricaDeCarro.criarVeiculo("esportivo");
        carro2.mostrarDetalhes();

        Veiculo moto1 = fabricaDeMoto.criarVeiculo("Yamaha");
        moto1.mostrarDetalhes();
        Veiculo moto2 = fabricaDeMoto.criarVeiculo("Honda");
        moto2.mostrarDetalhes();

        Veiculo caminhao1 = fabricaDeCaminhao.criarVeiculo("Scania");
        caminhao1.mostrarDetalhes();
        Veiculo caminhao2 = fabricaDeCaminhao.criarVeiculo("W-Cargo");
        caminhao2.mostrarDetalhes();
    }
}
