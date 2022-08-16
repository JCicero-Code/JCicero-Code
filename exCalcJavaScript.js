const prompt = require("prompt-sync")();


let operacao = null
let resto = null
  while (operacao != 0){
  console.log("------------------------------------------------------------------")
  console.log("Escolha a operação de acordo com os números:")
  console.log("")
  console.log("------------------------------------------------------------------")
  console.log("1: Adição | 2: Subtração | 3: Multiplicação | 4: Divisão | 0: Sair")
  console.log("------------------------------------------------------------------")
  console.log("")
  
    
    operacao = prompt("Digite a operação: ");

    if (operacao == 0){
      console.log("Obrigado por participar!")
      break
      }

numero1 = parseInt(prompt("Digite o primeiro número: "))
numero2 = parseInt(prompt("Digite o segundo número: "))

if (operacao == 1){
resultado = numero1 + numero2
}
else if (operacao == "2"){
resultado = numero1 - numero2
}
else if (operacao == "3"){
resultado = numero1 * numero2
}
else if (operacao == "4"){
resultado = numero1 / numero2
resto = numero1 % numero2
}
else{ 
resultado = "Operador " + operacao + " não suportado, escolha as opções: 1, 2, 3, 4 ou 0."
}
console.log("O resultado da operação é: " + resultado)
if(resto != 0){
  console.log("O resto da operação é: " + resto)
}
else{
  console.log("---------------------------------------")
}
console.log("---------------------------------------")


}

