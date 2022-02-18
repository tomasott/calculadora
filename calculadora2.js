function soma(num1,num2){
    let resposta = num1 + num2
    return resposta
}

function subtracao(num1,num2){
    let resposta = num1 - num2
    return resposta
}

function multiplicacao(num1,num2){
    let resposta = num1 * num2
    return resposta
}

function divisao(num1,num2){
    let resposta = num1 / num2
    return resposta
}

/* Calculadora Nv3
1.Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.
Importante: quadradoDoNumero() deve usar a função multiplicação() para calcular o quadrado do parâmetro inserido em power().
2.Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas anteriormente em nossa calculadora.
3.Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.
Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300). 
4. Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.
Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1%*/

function quadradoDoNumero(num1){
    let resposta = multiplicacao(num1,num1)
    console.log("o quadrado de "+num1+" é "+resposta)
}

function mediaDeTresNumeros(num1,num2,num3){
    let resp1 = soma(num1,num2)
    let resp2 = soma(resp1,num3)
    let resposta = divisao(resp2,3)
    console.log("a média dos três numeros foi "+ resposta)
}

function calculaPorcentagem(num1,num2){
    let resp1 = divisao(num1,100)
    let resposta = multiplicacao(resp1,num2)
    console.log("o "+num2+" porcento de " + num1 + " é "+ resposta)
}

function geradorDePorcentagem (num1,num2){
    let resp1 = divisao(num1,num2)
    let resposta = multiplicacao(resp1,100)
    console.log(num1+" é "+ resposta + "% de "+num2)
}

quadradoDoNumero(5)
mediaDeTresNumeros(8,9,13)
calculaPorcentagem(12000,65)
geradorDePorcentagem(45,900)