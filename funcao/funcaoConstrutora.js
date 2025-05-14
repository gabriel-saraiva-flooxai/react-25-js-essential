function Carro(velocidadeMaxima = 350, delta = 20) {
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const ferrari = new Carro
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

const uno = new Carro(500, 100)
uno.acelerar()
console.log(uno.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)