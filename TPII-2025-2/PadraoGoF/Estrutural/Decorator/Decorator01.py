# Exemplo de Decorator em Python

class ComponenteNotificador:
    def enviar(self, msg):
        print(f"Enviando Msg: {msg}")

class DecoradorNotificador(ComponenteNotificador):
    def __init__(self, componente):
        self.componente = componente
    def enviar(self, msg):
        self.componente.enviar(msg)

class NotificadorSMS(DecoradorNotificador):
    def enviar(self, msg):
        super().enviar(msg)
        print(f"Enviando Msg por SMS: {msg}")

class NotificadorWhatsapp(DecoradorNotificador):
    def enviar(self, msg):
        super().enviar(msg)
        print(f"Enviando Msg por Whatsapp: {msg}")

class NotificadorEmail(DecoradorNotificador):
    def enviar(self, msg):
        super().enviar(msg)
        print(f"Enviando Msg por Email: {msg}")

# USO PELO CLIENTE
notificador = ComponenteNotificador()
notificador_sms = NotificadorSMS(notificador)
notificador_whatsapp = NotificadorWhatsapp(notificador_sms)
notificador_whatsapp.enviar("Pedido do Habbi's Saindo... ")
