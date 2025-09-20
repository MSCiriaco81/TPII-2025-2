// Exemplo de Decorator em Java
// O padrão Decorator permite adicionar funcionalidades a objetos de forma dinâmica, sem alterar sua estrutura original.

// Componente base
interface Notificador {
    void enviar(String msg);
}

// Componente concreto
class ComponenteNotificador implements Notificador {
    public void enviar(String msg) {
        System.out.println("Enviando Msg: " + msg);
    }
}

// Decorador base
abstract class DecoradorNotificador implements Notificador {
    protected Notificador componente;
    public DecoradorNotificador(Notificador componente) {
        this.componente = componente;
    }
    public void enviar(String msg) {
        componente.enviar(msg);
    }
}

// Decorador concreto - SMS
class NotificadorSMS extends DecoradorNotificador {
    public NotificadorSMS(Notificador componente) { super(componente); }
    public void enviar(String msg) {
        super.enviar(msg);
        System.out.println("Enviando Msg por SMS: " + msg);
    }
}

// Decorador concreto - Whatsapp
class NotificadorWhatsapp extends DecoradorNotificador {
    public NotificadorWhatsapp(Notificador componente) { super(componente); }
    public void enviar(String msg) {
        super.enviar(msg);
        System.out.println("Enviando Msg por Whatsapp: " + msg);
    }
}

// Decorador concreto - Email
class NotificadorEmail extends DecoradorNotificador {
    public NotificadorEmail(Notificador componente) { super(componente); }
    public void enviar(String msg) {
        super.enviar(msg);
        System.out.println("Enviando Msg por Email: " + msg);
    }
}

// Uso pelo cliente
class MainDecorator {
    public static void main(String[] args) {
        Notificador notificador = new ComponenteNotificador();
        Notificador notificadorSMS = new NotificadorSMS(notificador);
        Notificador notificadorWhatsapp = new NotificadorWhatsapp(notificadorSMS);
        notificadorWhatsapp.enviar("Pedido do Habbi's Saindo... ");
    }
}
