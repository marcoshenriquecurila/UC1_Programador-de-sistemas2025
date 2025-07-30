let cliente1 = "Marcos"
let cliente2 = "Nice"

let idade1 = "44"
let idade2 = "32"

let quantidade_cafe1 = 187
let quantidade_cafe2 = 5

let cadastro1 = "True"
let cadastro2 = "false"

let preco_cafe = 3.50

console.log("Olá!\nBem vidno ao sistema de usuários do marconzito\nAbaixo estão as informações dos usuários vcadastrados em nosso sistema:\n\n")
console.log("....Lista de usuários:\n - nome: "+cliente+", idade:"+idade1+". É cliente?" +cadastro1)
console.log("2  nome: "+cliente2+", idade:"+idade2+". É cliente?" +cadastro2)

console.log("\n\n---- Quantidade de ca´fes:")
console.log("O Cliente "+cliente1+" já tomou "+quantidade_cafe1+ "cafés!")
console.log("O cliente "+cliente2+" já tomou "+quantidade_cafe2+ "cafés!")

console.log("\n\n---Soma dos cafés tomados:")
console.log("juntos, os clientes "+cliente1+" e "+cliente2+" tomaram "+(quantidade_cafe1 +quantidade_cafe2)+ "cafés!")

console.log("\n\n---Quantos cafés faltam para chegar em 200?")
console.log("Faltam "+(200 -quantidade_cafe1) + "cafés para "+cliente1)
console.log("Faltam "+(200 -quantidade_cafe2) + "cafés para "+cliente2)

console.log("\n\n --------------Atividade Extra ----------\n\n")

let nova_quantidade1 = quantidade_cafe1 + 15
let nova_quantidade2 = quantidade_cafe2 + 3

let gasto_total1 = nova_quantidade1 * preco_cafe
let gasto_total2 = nova_quantidade2 * preco_cafe

console.log("\nAo todo, "+cliente1+" gastou R$ " + (nova_quantidade1 * preco_cafe)+" em café!")
console.log("\nAo todo, "+cliente2+" gastou R$ " + (nova_quantidade2 * preco_cafe)+" em café!")

console.log("\nCaso tivesse aproveitado a promoção de 50% de desconto, "+cliente1+ "teria gasto apenas R$ "+(gasto_total1 * 0.5)+".")
console.log("\nCaso tivesse aproveitado a promoção de 50% de desconto, "+cliente1+ "teria gasto apenas R$ "+(gasto_total2 * 0.5)+".")