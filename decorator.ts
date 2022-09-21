interface ProtocoloProduto {
    getNome(): string
    getPreco(): number
}

class ProdutoDecorator implements ProtocoloProduto {
    constructor (protected product: ProtocoloProduto) {}

    getNome(): string {
        return this.product.getNome()
    }

    getPreco(): number {
        return this.product.getPreco()
    }
} 

class Sanduiche implements ProtocoloProduto {
    private nome = '- Sanduíche'
    private preco = 0.0

    getNome(): string {
        return this.nome
    }

    getPreco(): number {
        return this.preco
    }
}

class SanduicheFrango extends ProdutoDecorator {
    getNome(): string {
        return this.product.getNome() + ' de frango assado'
    }

    getPreco(): number {
        return this.product.getPreco() + 4.50
    }
}

class SanduicheCarne extends ProdutoDecorator {
    getNome(): string {
        return this.product.getNome() + ' de Carne, Bacon, Queijo Mussarela Ralado'
    }

    getPreco(): number {
        return this.product.getPreco() + 7.49
    }
}

class Pepperoni implements ProtocoloProduto {
    private nome = '- Adicional de Pepperoni'
    private preco = 0.99

    getNome(): string {
        return this.nome
    }

    getPreco(): number {
        return this.preco 
    }
}

class QueijoMussarelaRalado  implements ProtocoloProduto {
    private nome = '- Adicional de Queijo Mussarela Ralado'
    private preco = 2.0

    getNome(): string {
        return this.nome
    }

    getPreco(): number {
        return this.preco
    }
}

const sanduiche = new Sanduiche()
const sanduicheDeFrango = new SanduicheFrango(sanduiche)
const sanduicheDeCarne = new SanduicheCarne(sanduiche)
const pepperoni = new Pepperoni() 
const QueijoMussarelaRalada = new QueijoMussarelaRalado()

console.log(`${sanduicheDeFrango.getNome()}, R$${sanduicheDeFrango.getPreco().toFixed(2)}`);
console.log(`${sanduicheDeCarne.getNome()}, R$${sanduicheDeCarne.getPreco().toFixed(2)}`);
console.log(`${pepperoni.getNome()}, R$${pepperoni.getPreco().toFixed(2)}`);
console.log(`${QueijoMussarelaRalada.getNome()}, R$${QueijoMussarelaRalada.getPreco().toFixed(2)}`);