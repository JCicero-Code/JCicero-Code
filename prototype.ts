abstract class Veiculo {
    constructor(protected modelo: string,
                protected marca: string,
                protected cor: string,
                protected numberoRodas: number) {

                this.modelo = modelo,
                this.marca = marca,
                this.cor = cor,
                this.numberoRodas = numberoRodas
    }

    clone() {}

    represent(): string {
        return `Modelo: ${this.modelo}
        Marca: ${this.marca}
        Cor: ${this.cor}
        Número de rodas: ${this.numberoRodas}`
    }
}

class Carro extends Veiculo {
    constructor (modelo: string,
                 marca: string,
                 cor: string,
                 numberoRodas: number,
                 private Tipocombustivel: string,
                 private numberoPortas: number
    ) {
        super(modelo, marca, cor, numberoRodas)
    }

    clone(): this {
        const newCarro = Object.create(this)
        return newCarro
    }

    represent(): string {
        return 'Modelo: '+this.modelo+
               '\nMarca: '+this.marca+
               '\nCor: '+this.cor+
               '\nNúmero de rodas: '+this.numberoRodas+
               '\nTipo de combustível: '+this.Tipocombustivel+
               '\nNúmero de portas: '+this.numberoPortas
    }
}

class Moto extends Veiculo {
    constructor (modelo: string,
                 marca: string,
                 cor: string,
                 numberoRodas: number,
                 private quantCombustivel: number,
                 private numberoPassageiros: number
    ) {
        super(modelo, marca, cor, numberoRodas)
    }

    clone(): this {
        const newMoto = Object.create(this)
        return newMoto
    }

    represent(): string {
        return 'Modelo: '+this.modelo+
               '\nMarca: '+this.marca+
               '\nCor: '+this.color+
               '\nNúmero de rodas: '+this.numberoRodas+
               '\nQuantidade de combustivél (L): '+this.quantCombustivel+
               '\nNúmero de passageiros: '+this.numberoPassageiros
    }
}

const carro1 = new Carro('Argo', 'Fiat', 'Branco', 4, 'Gasolina', 4)
const moto1 = new Moto('CG 160', 'Honda', 'Preta', 2, 16.1, 2)

const carro2 = new Carro('Altis Hybrid', 'Toyota', 'Prata', 4, 'Gasolina', 4)
const moto2 = new Moto('NMax', 'Yamaha', 'Matt Black', 2, 7.1, 2)

const carro = carro1.clone()
const moto = moto1.clone()

console.log(carro.represent());
console.log();
console.log(moto.represent());
console.log();
console.log(carro1 === Object.getPrototypeOf(carro));
console.log(moto2 === Object.getPrototypeOf(moto));