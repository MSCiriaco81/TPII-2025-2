// Componente Notificador:
class ComponenteNotificador{
    enviar(msg){
        console.log(`Enviando Msg: ${msg}`);
    }
}

// Componente Decorador Base:
class DecoradorNotificador{
    constructor(componente){
        this.componente = componente;
    }

    enviar(msg){
        this.componente.enviar(msg);
    }
}

// Componentes Decorador Concreto 1 - SMS:
class NotificadorSMS extends DecoradorNotificador{
    enviar(msg){
        super.enviar(msg);
        console.log(`Enviando Msg por SMS: ${msg}`);
    }
}

// Componentes Decorador Concreto 2 - Whatsapp:
class NotificadorWhatsapp extends DecoradorNotificador{
    enviar(msg){
        super.enviar(msg);
        console.log(`Enviando Msg por Whatsapp: ${msg}`);
    }
}

// Componentes Decorador Concreto 3 - Email:
class NotificadorEmail extends DecoradorNotificador{
    enviar(msg){
        super.enviar(msg);
        console.log(`Enviando Msg por Email: ${msg}`);
    }
}

// USO PELO CLIENTE:
const notificador = new ComponenteNotificador();
const notificadorSMS = new NotificadorSMS(notificador);
const notificadorWhatsapp = new NotificadorWhatsapp(notificadorSMS);

notificadorWhatsapp.enviar("Pedido do Habbi's Saindo... ");