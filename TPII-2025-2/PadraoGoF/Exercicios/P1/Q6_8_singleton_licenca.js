// QUESTÃO-6.8: Singleton para verificador de licença de software
class VerificadorLicenca {
    constructor() {
        if (VerificadorLicenca._instance) {
            return VerificadorLicenca._instance;
        }
        this.licencaValida = false;
        VerificadorLicenca._instance = this;
    }
    setLicencaValida(valida) {
        this.licencaValida = valida;
    }
    isLicencaValida() {
        return this.licencaValida;
    }
    static getInstance() {
        if (!VerificadorLicenca._instance) {
            VerificadorLicenca._instance = new VerificadorLicenca();
        }
        return VerificadorLicenca._instance;
    }
}

// Exemplo de uso:
// const verificador = VerificadorLicenca.getInstance();

// Saída de exemplo:
const verificador1 = VerificadorLicenca.getInstance();
verificador1.setLicencaValida(true);
const verificador2 = VerificadorLicenca.getInstance();
console.log(`Gurney Halleck: Licença válida? ${verificador1.isLicencaValida()}`);
verificador2.setLicencaValida(false);
console.log(`Catelyn Stark: Licença válida? ${verificador2.isLicencaValida()}`);
