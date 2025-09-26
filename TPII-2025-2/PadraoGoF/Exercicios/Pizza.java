// Implementação da interface de cálculo de preço
abstract class PriceImpl {
    abstract double getBasePrice();
    abstract double getSizeMultiplier();
    abstract double getExtrasPrice();
    double getTotalPrice() {
        return getBasePrice() * getSizeMultiplier() + getExtrasPrice();
    }
}

// Implementação concreta do cálculo para a pizza
class PizzaPrice extends PriceImpl {
    String sabor;
    String tamanho;
    String[] adicionais;

    PizzaPrice(String sabor, String tamanho, String[] adicionais) {
        this.sabor = sabor;
        this.tamanho = tamanho;
        this.adicionais = adicionais;
    }

    double getBasePrice() {
        switch (sabor) {
            case "margherita": return 20;
            case "pepperoni": return 25;
            case "quatro-queijos": return 30;
            case "frango-catupiry": return 28;
            default: return 20;
        }
    }

    double getSizeMultiplier() {
        switch (tamanho) {
            case "pequena": return 1;
            case "media": return 1.5;
            case "grande": return 2;
            default: return 1;
        }
    }

    double getExtrasPrice() {
        double total = 0;
        for (String ad : adicionais) {
            switch (ad) {
                case "borda-recheada": total += 5; break;
                case "azeitona": total += 3; break;
                case "bacon": total += 7; break;
                case "extra-queijo": total += 4; break;
                case "catupiry": total += 6; break;
            }
        }
        return total;
    }
}

// Classe Pizza que utiliza a implementação para calcular o preço
class Pizza {
    PriceImpl priceImpl;
    Pizza(PriceImpl priceImpl) {
        this.priceImpl = priceImpl;
    }
    String getDescription() {
        String desc = "";
        switch (priceImpl instanceof PizzaPrice ? ((PizzaPrice)priceImpl).sabor : "") {
            case "margherita": desc = "molho de tomate, queijo muçarela, manjericão"; break;
            case "pepperoni": desc = "molho de tomate, queijo muçarela, pepperoni"; break;
            case "quatro-queijos": desc = "queijo muçarela, queijo gorgonzola, queijo parmesão, queijo provolone"; break;
            case "frango-catupiry": desc = "frango desfiado, catupiry, queijo muçarela"; break;
        }
        String adicionais = (priceImpl instanceof PizzaPrice && ((PizzaPrice)priceImpl).adicionais.length > 0) ? String.join(", ", ((PizzaPrice)priceImpl).adicionais) : "nenhum";
        return String.format("Pizza sabor %s (%s), tamanho %s, com adicionais: %s",
            ((PizzaPrice)priceImpl).sabor, desc, ((PizzaPrice)priceImpl).tamanho, adicionais);
    }
    double getTotalPrice() {
        return priceImpl.getTotalPrice();
    }
}

// Função para mostrar opções disponíveis ao usuário
class PizzaMain {
    static void mostrarOpcoes() {
        System.out.println("Sabores disponíveis:");
        System.out.println("- margherita: molho de tomate, queijo muçarela, manjericão");
        System.out.println("- pepperoni: molho de tomate, queijo muçarela, pepperoni");
        System.out.println("- quatro-queijos: queijo muçarela, queijo gorgonzola, queijo parmesão, queijo provolone");
        System.out.println("- frango-catupiry: frango desfiado, catupiry, queijo muçarela");
        System.out.println("\nTamanhos disponíveis:");
        System.out.println("- pequena\n- media\n- grande");
        System.out.println("\nAdicionais disponíveis:");
        System.out.println("- borda-recheada (R$ 5)");
        System.out.println("- azeitona (R$ 3)");
        System.out.println("- bacon (R$ 7)");
        System.out.println("- extra-queijo (R$ 4)");
        System.out.println("- catupiry (R$ 6)");
    }
    public static void main(String[] args) {
        mostrarOpcoes();
        String saborEscolhido = "quatro-queijos";
        String tamanhoEscolhido = "media";
        String[] adicionaisEscolhidos = {"borda-recheada", "extra-queijo"};
        PizzaPrice pizzaPrice = new PizzaPrice(saborEscolhido, tamanhoEscolhido, adicionaisEscolhidos);
        Pizza pizza = new Pizza(pizzaPrice);
        System.out.println("\nPedido:");
        System.out.println(pizza.getDescription());
        System.out.printf("Valor total: R$ %.2f\n", pizza.getTotalPrice());
    }
}
