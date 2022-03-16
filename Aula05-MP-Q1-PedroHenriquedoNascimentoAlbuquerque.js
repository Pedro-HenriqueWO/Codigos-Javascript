/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet 
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pedro Henrique do Nascimento Albuquerque
 * Curso: IPI
 * Aula: Aula 05 - Operadores Lógicos - Mini-prova
 * Questão: 1
 *
 */

 //1. (3.0) Implemente um programa que, dados dois números, informa se ambos estão no intervalo 
 //inclusivo entre -100 e 100 ao mesmo tempo (obs.: é obrigatório o uso de ao menos um operador lógico nesta questão).

 
var a = 102
var b = 291

 if ((a <= 100 && a >= -100) && (b <= 100 && b >= -100)) {
    console.log (a,"Esta no intervalo de  100 e -100")
    console.log (b,"Esta no intervalo de  100 e -100")

 } else if (a > 100 || a < -100) {
console.log("O valor " +a+ " nao esta no intervalo de 100 e -100")


} if (b > 100 || b < -100) {
console.log("O valor " +b+ " nao esta no intervalo de 100 e -100")
