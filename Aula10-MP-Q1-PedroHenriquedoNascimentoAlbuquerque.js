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
 * Questão: 1
 *
 */

 // Implemente o tipo Ventilador (1.5) com os atributos modelo, marca, cor, número de velocidades e preço, além da operação menorPreço (1.5) que,
 // dados dois ventiladores, retorna -1 se o primeiro tiver o menor preço, 0 se ambos tiverem o mesmo preço e 1 se o segundo tiver o menor preço.

class ventilador{
    constructor(modelo, marca, cor, velocidades, preco) {
    this.modelo = modelo
    this.marca = marca
    this.cor = cor
    this.velocidades = velocidades
    this.preco = preco
    }
}
function menorPreco(v1, v2){
if (v2.preco > v1.preco) {
    return -1
    }else if (v1.preco == v2.preco){    
    return 0    
    }else if (v1.preco > v2.preco){
    return 1    
    }

}

var ventilador1 = new ventilador('XT12', 'Mondial', 'Preta', '5', 150)  
var ventilador2 = new ventilador('KBS25', 'Cadence', 'Branca', '4', 150)  

console.log(menorPreco(ventilador1, ventilador2))