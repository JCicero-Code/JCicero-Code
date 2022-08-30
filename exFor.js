console.log("|".repeat(40))
console.log("----Lista das propriedades do objeto----")

function lerPropriedades(){
    let pessoa = {
        nome:'Peter',
        sobreNome:'Park',
        idade: 20
    }
    for(const prop in pessoa){
        console.log(`${prop}: ${pessoa[prop]}`)
    }
    
    
}
lerPropriedades()

console.log("|".repeat(40))
console.log("------Lista de elementos do array------")

function lerItem(){
let itens =["Peter","Park",20]

for(e of itens){
console.log(e)
}
}
lerItem()
