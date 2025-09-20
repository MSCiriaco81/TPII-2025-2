// Classe principal para executar o exemplo do Builder de Carro
public class MainBuilderCarro {
    public static void main(String[] args) {
        CarroBuilder builder = new CarroBuilder();
        Carro carroEsportivo = builder.addMotor("V8").addCarroceria("Esportivo").addRodas(18).addInterior("Preta").construir();
        Carro carroSedan = builder.addMotor("1.4 LT").addCarroceria("Sedan").addRodas(15).addInterior("Bege").construir();
        Carro carroBYD = builder.addMotor("Eletrico 12v").addCarroceria("BYD").addRodas(12).addInterior("Plastico").construir();
        carroEsportivo.mostrarDetalhes();
        carroSedan.mostrarDetalhes();
        carroBYD.mostrarDetalhes();
    }
}
