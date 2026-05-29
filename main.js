const carros = []
const carro = {}
let contador = 0

alert("Você preencherá uma lista de carros. Esta pronto?")

do {
    const carro = {}

    carro.marca = prompt("Qual é a marca desse carro?")
    carro.modelo = prompt("Qual é o modelo desse carro")
    carro.cor = prompt("Qual é a cor desse carro")
    carro.potencia = prompt("Qual a potência desse carro")
    carro.preco = prompt("Qual é o preço desse carro")

    carros.push(carro)

    resposta = confirm("Deseja continuar inserindo carros?")
} while (resposta == true)

do {
    alert(`SEU CARRO
        Marca: ${carros[contador].marca}
        Modelo: ${carros[contador].modelo}
        Cor: ${carros[contador].cor}
        Potência: ${carros[contador].potencia}
        Preço: ${carros[contador].preco}
        `)
        contador++
} while (contador<carros.lengh);