// Exemplo de Builder em Java - Carro

// Definindo partes do Carro
class Motor {
    String tipo;
    Motor(String tipo) { this.tipo = tipo; }
}
class Carroceria {
    String estilo;
    Carroceria(String estilo) { this.estilo = estilo; }
}
class Rodas {
    int tamanho;
    Rodas(int tamanho) { this.tamanho = tamanho; }
}
class Interior {
    String cor;
    Interior(String cor) { this.cor = cor; }
}

// Builder
class CarroBuilder {
    private Motor motor;
    private Carroceria carroceria;
    private Rodas rodas;
    private Interior interior;

    CarroBuilder addMotor(String tipo) {
        this.motor = new Motor(tipo);
        return this;
    }
    CarroBuilder addCarroceria(String estilo) {
        this.carroceria = new Carroceria(estilo);
        return this;
    }
    CarroBuilder addRodas(int tamanho) {
        this.rodas = new Rodas(tamanho);
        return this;
    }
    CarroBuilder addInterior(String cor) {
        this.interior = new Interior(cor);
        return this;
    }
    Carro construir() {
        return new Carro(motor, carroceria, rodas, interior);
    }
}

// Produto final
class Carro {
    Motor motor;
    Carroceria carroceria;
    Rodas rodas;
    Interior interior;
    Carro(Motor motor, Carroceria carroceria, Rodas rodas, Interior interior) {
        this.motor = motor;
        this.carroceria = carroceria;
        this.rodas = rodas;
        this.interior = interior;
    }
    void mostrarDetalhes() {
        System.out.println("Carro:\n    Motor: " + motor.tipo + ", Carroceria: " + carroceria.estilo + ", Rodas: " + rodas.tamanho + ", Interior: " + interior.cor);
    }
}

class MainBuilderCarro {
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
