// Criar de forma literal
function funl() { }

// Armazenar em uma variável
const fun2 = function () { }

// Armazenar em um array
const array = [function (a, b) { return a + b }, funl, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}

obj.falar = function () { return 'Opa' }
console.log(obj.falar())


function run(fun) {
    fun()
}

run(function () {
    console.log('Executando...')
})

// Um função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
soma(9,7,5)
const cincoMais = soma(2, 3)
cincoMais(4)