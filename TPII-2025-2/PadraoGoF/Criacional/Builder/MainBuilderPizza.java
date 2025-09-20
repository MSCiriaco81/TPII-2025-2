// Classe principal para executar o exemplo do Builder de Pizza
public class MainBuilderPizza {
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
