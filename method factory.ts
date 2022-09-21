// Interface
interface Computador {
     ram: string
     hd: string
     cpu: string
     type: string

    toString(): void
}

// Classe Desktop para implementar a interface Computador
class Desktop implements Computador {
     ram = '16'
     hd = '500'
     cpu = 'Ryzen 5 5600g 3.9'
     type = 'PC'
                
    
    public get ramValue() {
        return this.ram
    }

    public get hdValue() {
        return this.hd
    }

    public get cpuValue() {
        return this.cpu
    }

    public get typeValue() {
        return this.type
    }
    
    toString(): void {
        console.log(`Memória ram: ${this.ram} GB`);
        console.log(`HD de: ${this.hd} GB`);
        console.log(`Velocidade do processador: ${this.cpu} Ghz`);
        console.log(`Tipo do computador: ${this.type}`);
    }
}

// Classe Server para implementar a interface Computador
class Servidor implements Computador {
     ram = '32'
     hd = '2000'
     cpu = 'Xeon e5 2640 v3 2.60'
     type = 'Server'
    
    public get ramValue() {
        return this.ram
    }

    public get hdValue() {
        return this.hd
    }

    public get cpuValue() {
        return this.cpu
    }

    public get typeValue() {
        return this.type
    }
    
    toString(): void {
        console.log('-----------------------------------------');
        console.log(`Memória ram: ${this.ram} GB`);
        console.log(`HD de: ${this.hd} GB`);
        console.log(`Velocidade do processador: ${this.cpu} Ghz`);
        console.log(`Tipo do computador: ${this.type}`);
        console.log('-----------------------------------------');
    }
}

// Classe fábrica, onde vai instanciar dependendo do tipo se for PC ou Servidor
class TipoComputador {
    createComputador(type: string) {
        if (type === 'pc'){
            return new Desktop()
        }

        if (type === 'server') {
            return new Servidor()
        }
    }
}

const factoryMethod = new TipoComputador()
const desktop = factoryMethod.createComputador('pc')
const server = factoryMethod.createComputador('server')

desktop?.toString()
server?.toString()