// 1. MEDIADOR - Torre de Controle:
class TorreDeControle{
    constructor(){
        this.aeronaves = new Set();     // Aeronave registradas
        this.pistaLivre = true;         // Estado da Pista
        this.fila = [];                 // Fila de Eventos
    }

    registrar(aeronave){
        aeronave.definirMediator(this);
        this.aeronaves.add(aeronave);
    }

    notificar(rementente, tipo, dados = {}){
        const prioridade = dados.emergencia ? 0 : 1;
        const evento = { rementente, tipo, dados, prioridade };

        // Caso for Emergencia vai pro Inicio:
        if(prioridade === 0){
            this.fila.unshift(evento);
        }else{
            this.fila.push(evento);
        }

        this.processar();
    }

    processar(){
        if(!this.pistaLivre || this.fila.length === 0){
            return;
        }

        const { rementente, tipo, dados } = this.fila.shift();
        this.pistaLivre = false;       // Ocupa a Pista

        if(tipo === "pouso"){
            this.pouso(rementente);
        }else if(tipo === "decolagem"){
            this.decolagem(rementente);
        }else if(tipo === "emergencia"){
            this.emergencia(rementente, dados);
        }
    }

    pouso(aeronave){
        console.log("----------------------------------------");
        console.log(`[OK ] Pouso Autorizado: ${aeronave.identificacao()}`);
        setTimeout(() => {
            console.log(`[END] Pousou: ${aeronave.identificacao()}`);
            this.pistaLivre = true;
            this.avisarOutros(aeronave, "pousou");
            this.processar();
        }, 3000);
    }

    decolagem(aeronave){
        console.log("----------------------------------------");
        console.log(`[OK ] Decolagem Autorizada: ${aeronave.identificacao()}`);
        setTimeout(() => {
            console.log(`[END] Decolou: ${aeronave.identificacao()}`);
            this.pistaLivre = true;
            this.avisarOutros(aeronave, "decolou");
            this.processar();
        }, 3000);
    }

    emergencia(aeronave, dados){
       console.log("----------------------------------------");
       console.log(`[SOS] EMERGENCIA: ${aeronave.identificacao()} - ${dados.motivo}`);
        setTimeout(() => {
            console.log(`[END] Emergencia Atendido: ${aeronave.identificacao()}`);
            this.pistaLivre = true;
            this.avisarOutros(aeronave, "Emergencia Atendida");
            this.processar();
        }, 3000);
    }

    avisarOutros(rementente, msg){
        for(const a of this.aeronaves){
            if(a !== rementente){
                console.log(`[AVISO] ${a.identificacao()} -> ${msg}`);
            }
        }
    }
}

// 2. AERONAVE - COMPONENTE BASE:
class Aeronave{
    constructor(prefixo, tipo){
        this.prefixo = prefixo;
        this.tipo = tipo;
        this.mediator = null;
    }

    definirMediator(m){
        this.mediator = m;
    }

    identificacao(){
        return `${this.tipo} - ${this.prefixo}`;
    }

    solicitarPouso(){
        this.mediator.notificar(this, "pouso");
    }

    solicitarDecolagem(){
        this.mediator.notificar(this, "decolagem");
    }

    declararEmergencia(motivo){
        this.mediator.notificar(this, "emergencia", { emergencia: true, motivo});
    }
}

// 3. AERONAVES - ESPECIALIZAÇÕES:
class Aviao extends Aeronave{
    constructor(p){
        super(p, "Avião");
    }
}

class Helicoptero extends Aeronave{
    constructor(p){
        super(p, "Helicoptero");
    }
}

class Ultraleve extends Aeronave{
    constructor(p){
        super(p, "Ultraleve");
    }
}

// 4. USO DO PADRÃO - FUNCIONAMENTO:
(function operacao(){
    const torre = new TorreDeControle();

    const aviao = new Aviao("PT-AVA");
    const helicoptero  = new Helicoptero("PT-HEL");
    const ultraleve = new Ultraleve("PT-ULI");

    torre.registrar(aviao);
    torre.registrar(helicoptero);
    torre.registrar(ultraleve);

    aviao.solicitarPouso();                             // Fila Normal
    helicoptero.solicitarDecolagem();                   // Fila Normal
    ultraleve.declararEmergencia("Falha Eletrica");     // Prioridade Max
})();
