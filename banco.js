
function Banco(conta,saldo,tipo,agencia){
    this.conta = conta;
    this.saldo = saldo;
    this.tipo = tipo;
    this.agen= agencia;
    
    

    this.depositarDinheiro = function(deposito){ 
        if(deposito > 0){
           this.saldo += deposito;
           console.log("Você depositou: R$",deposito,"reais")
        }else{
            console.log("Nenhum deposito eftuado")
        }
    }

    this.sacarDinheiro = function(saque){
        if(saque == 0){
           console.log("Nenhum saque efetuado")
        }
        else if(saque > 0 && saque < saldo){
        
            this.saldo -= saque;
        
            console.log("Você sacou: R$", saque,"reais")
        
        }else if(saque > saldo){
          console.log("Valor maior que saldo existente!")
        } 
        else{
            this.saldo;
            console.log("Erro ao sacar! Verifique novamente")
           
           }
    }
    this.buscarSaldo = function(){
        console.log("Saldo atual: R$",this.saldo,"reais")   
    }
    this.nConta = function(){
        console.log("Número da conta: ",this.conta)
    }
}
let minhaConta = new Banco("1212", 10,"poupanca","44");
console.log("----~~~~~~~~~~~~~ Banco quero mais $$ ~~~~~~~~~~~~~~~~~~~~~~~----")
console.log("------------Extrato de movimentação mensal-----------------------")
console.log("-".repeat(40))
console.log("Número da conta: ",minhaConta.conta, "| Saldo: R$", minhaConta.saldo)
console.log("Agência: ",minhaConta.agen)
console.log("-".repeat(40))

console.log("Atualizando....")
minhaConta.depositarDinheiro(10);
minhaConta.sacarDinheiro(4);

console.log("-".repeat(40))
minhaConta.nConta()
console.log("Agência: ",minhaConta.agen)
minhaConta.buscarSaldo()

console.log("-".repeat(40))
