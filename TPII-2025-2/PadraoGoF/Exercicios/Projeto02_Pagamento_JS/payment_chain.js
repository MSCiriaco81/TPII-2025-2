// Projeto 02 — Extensão do sistema de processamento de pagamento
// Adiciona a EtapaDeteccaoFraude entre EtapaAutenticacao e EtapaConfirmacao
// Comentado em português para fins didáticos

// Base: EtapaProcesso semelhante ao exemplo Chain02 do repositório
class EtapaProcesso{
    constructor(){
        this.proximaEtapa = null;
    }

    setProximaEtapa(proximaEtapa){
        this.proximaEtapa = proximaEtapa;
    }

    processar(pagamento){
        throw new Error("Esse método deve ser implementado pelas subclasses");
    }
}

// Etapas existentes
class EtapaConexao extends EtapaProcesso{
    processar(pagamento){
        console.log('>>>> Estabelecendo conexão...');
        // Simulação de sucesso de conexão
        console.log('[OK] Conexão Estabelecida');
        if(this.proximaEtapa){
            this.proximaEtapa.processar(pagamento);
        }
    }
}

class EtapaValidacao extends EtapaProcesso{
    processar(pagamento){
        console.log('>>>> Validando Informações de Pagamento...');
        if(pagamento.valor > 0){
            console.log('[OK] Informações do Pagamento Validadas com sucesso...');
            if(this.proximaEtapa){
                this.proximaEtapa.processar(pagamento);
            }
        }else{
            console.log('[**] Informações Invalidas - Processamento Encerrado...');
        }
    }
}

class EtapaEnvioInformacao extends EtapaProcesso{
    processar(pagamento){
        console.log('>>>> Enviando informações de Pagamento...');
        console.log('[OK] Informações Enviadas com Sucesso...');
        if(this.proximaEtapa){
            this.proximaEtapa.processar(pagamento);
        }
    }
}

class EtapaAutenticacao extends EtapaProcesso{
    processar(pagamento){
        console.log('>>>> Autenticando Pagamento...');
        // Simulação de autenticação bem-sucedida
        console.log('[OK] Pagamento Autenticado com Sucesso...');
        if(this.proximaEtapa){
            this.proximaEtapa.processar(pagamento);
        }
    }
}

// Nova etapa: Detecção de Fraude
class EtapaDeteccaoFraude extends EtapaProcesso{
    processar(pagamento){
        console.log('>>>> Verificando possíveis fraudes na transação...');
        // Estratégia simples: o objeto pagamento deve ter a propriedade
        // `possuiFraude` (boolean). Em um caso real, aqui iríamos chamar
        // um serviço externo de prevenção de fraudes ou aplicar regras.
        if(pagamento.possuiFraude){
            console.log('[**] Fraude detectada! Transação bloqueada.');
            // Não chama a próxima etapa — interrompe o fluxo
        }else{
            console.log('[OK] Nenhuma fraude detectada. Prosseguindo...');
            if(this.proximaEtapa){
                this.proximaEtapa.processar(pagamento);
            }
        }
    }
}

class EtapaConfirmacao extends EtapaProcesso{
    processar(pagamento){
        console.log('>>>> Confirmando Pagamento...');
        console.log('[OK] Pagamento Confirmado com Sucesso...');
    }
}

// Objeto Pagamento estendido com flag de fraude
class Pagamento{
    constructor(valor, possuiFraude = false){
        this.valor = valor;
        this.possuiFraude = possuiFraude; // false por padrão
    }
}

// Função auxiliar para executar a cadeia com um pagamento de teste
function executarCadeiaComPagamento(pagamento){
    // Criação das Etapas:
    const etapaConexao = new EtapaConexao();
    const etapaValidacao = new EtapaValidacao();
    const etapaEnvioInformacao = new EtapaEnvioInformacao();
    const etapaAutenticacao = new EtapaAutenticacao();
    const etapaDeteccaoFraude = new EtapaDeteccaoFraude();
    const etapaConfirmacao = new EtapaConfirmacao();

    // Configuração da Cadeia:
    etapaConexao.setProximaEtapa(etapaValidacao);
    etapaValidacao.setProximaEtapa(etapaEnvioInformacao);
    etapaEnvioInformacao.setProximaEtapa(etapaAutenticacao);
    // Inserir Detecção de Fraude após Autenticação e antes da Confirmação
    etapaAutenticacao.setProximaEtapa(etapaDeteccaoFraude);
    etapaDeteccaoFraude.setProximaEtapa(etapaConfirmacao);

    // Início do processo
    etapaConexao.processar(pagamento);
}

// Testes: 1) Sem fraude  2) Com fraude
console.log('=== Teste 1: Pagamento sem fraude (fluxo completo esperado) ===');
const pagamentoOK = new Pagamento(250.00, false);
executarCadeiaComPagamento(pagamentoOK);

console.log('\n=== Teste 2: Pagamento com fraude (processo deve ser bloqueado) ===');
const pagamentoFraud = new Pagamento(250.00, true);
executarCadeiaComPagamento(pagamentoFraud);

// Export (opcional) para reutilização
module.exports = {
    EtapaDeteccaoFraude,
    Pagamento,
    executarCadeiaComPagamento
};
