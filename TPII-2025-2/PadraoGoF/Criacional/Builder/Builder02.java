// Exemplo de Builder em Java - Pizza

// Definindo partes da Pizza
class Massa {
    String tipo;
    Massa(String tipo) { this.tipo = tipo; }
}
class Molho {
    String tipo;
    Molho(String tipo) { this.tipo = tipo; }
}
class Ingredientes {
    String[] itens;
    Ingredientes(String[] itens) { this.itens = itens; }
}
class Tamanho {
    int diametro;
    Tamanho(int diametro) { this.diametro = diametro; }
}

// Builder
class PizzaBuilder {
    private Massa massa;
    private Molho molho;
    private Ingredientes ingredientes;
    private Tamanho tamanho;

    PizzaBuilder addMassa(String tipo) {
        this.massa = new Massa(tipo);
        return this;
    }
    PizzaBuilder addMolho(String tipo) {
        this.molho = new Molho(tipo);
        return this;
    }
    PizzaBuilder addIngredientes(String[] itens) {
        this.ingredientes = new Ingredientes(itens);
        return this;
    }
    PizzaBuilder addTamanho(int diametro) {
        this.tamanho = new Tamanho(diametro);
        return this;
    }
    Pizza construir() {
        return new Pizza(massa, molho, ingredientes, tamanho);
    }
}

// Produto final
class Pizza {
    Massa massa;
    Molho molho;
    Ingredientes ingredientes;
    Tamanho tamanho;
    Pizza(Massa massa, Molho molho, Ingredientes ingredientes, Tamanho tamanho) {
        this.massa = massa;
        this.molho = molho;
        this.ingredientes = ingredientes;
        this.tamanho = tamanho;
    }
    void mostrarDetalhes() {
        System.out.println("Pizza:\n    Massa: " + massa.tipo + ", Molho: " + molho.tipo + ", Ingredientes: " + String.join(", ", ingredientes.itens) + ", Tamanho: " + tamanho.diametro + " cm");
    }
}

class MainBuilderPizza {
    public static void main(String[] args) {
        PizzaBuilder builder = new PizzaBuilder();
        Pizza pizzaMargherita = builder.addMassa("Tradicional").addMolho("Tomate").addIngredientes(new String[]{"Mussarela", "Manjericão", "Azeite"}).addTamanho(30).construir();
        Pizza pizzaCalabresa = builder.addMassa("Fina").addMolho("Tomate").addIngredientes(new String[]{"Calabresa", "Queijo", "Cebola"}).addTamanho(40).construir();
        Pizza pizzaVeggie = builder.addMassa("Integral").addMolho("Pesto").addIngredientes(new String[]{"Tomate", "Espinafre", "Cogumelos", "Queijo Vegano"}).addTamanho(35).construir();
        pizzaMargherita.mostrarDetalhes();
        pizzaCalabresa.mostrarDetalhes();
        pizzaVeggie.mostrarDetalhes();
    }
}
