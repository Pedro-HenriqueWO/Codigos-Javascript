/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet 
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados 
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pedro Henrique do Nascimento Albuquerque
 * Curso:IPI
 * Aula: Aula 10 - Registros - Mini-prova
 * Questão: 2 
 */

// (4.0) Criar o tipo (2.0) EstoqueVentiladores com o atributo ventiladores (um array de Ventiladores) e quantidades (um array de inteiros), 
//além da operação (2.0) quantidadeMarca que dados um EstoqueDeVentiladores e uma marca, retorna o valor total dos Ventiladores da marca no estoque.
 //Importante: na resposta dessa questão é proibido o uso de arrays associativos ou qualquer outra forma que simplifique a função disponibilidade a 
 //uma linha de código.

 class ventilador{
    constructor(modelo, marca, cor, velocidades, preco) {
    this.modelo = modelo
    this.marca = marca
    this.cor = cor
    this.velocidades = velocidades
    this.preco = preco
    }
}
function marcasIguais(v1, v2){
return v1.modelo == v2.modelo 
}
class EstoqueVentiladores{
    constructor(quantidade, ventiladores){
        this.quantidade = quantidade
        this.ventiladores = ventiladores
    }
}

function quantidadeMarca(estoque, marca){
for (var i = 0; i < marca.length; i++) {
    if (marcasIguais(ventilador, estoque.marca[i])){
        return estoque.quantidade[i] 
         }
    }
    return 0
}

var ventilador1 = new ventilador('XT12', 'Mondial', 'Preta', '5')  
var ventilador2 = new ventilador('KBS25', 'Cadence', 'Branca', '4')  

var estoque = new EstoqueVentiladores(([0,3] , [ventilador1, ventilador2]))

console.log('estoque de ventiladores:' , quantidadeMarca(estoque, ventilador1))
console.log('estoque de ventiladores:' , quantidadeMarca(estoque, ventilador2))