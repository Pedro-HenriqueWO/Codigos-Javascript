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
 * Questão: 2
 *
 */

// 2. Implemente um programa que, dadas três variáveis booleanas, é capaz de identificar quando há exatamente 
//(apenas) duas verdadeiras (obs.: é obrigatório o uso de ao menos um operador lógico nesta questão).


var a = true
var b = false
var c = false


if ( a == true && b == false &&  c== false) {
console.log(" Há uma verdadeira")

} else if ( a == true && b == true &&  c== false) {
console.log(" Há duas verdadeiras")

} else if ( a == true && b == false &&  c== true) {
console.log(" Há duas verdadeiras")

} else if ( a == false && b == false && c== false) {
console.log(" Não há nenhuma verdadeira")

} else if ( a == false && b == true &&  c== false)  {
console.log(" Há uma verdadeira")

} else if ( a == false && b == false &&  c== true) {
console.log(" Há uma verdadeira")

} else if ( a == true && b == true &&  c== true) {
console.log(" Todas estão verdadeiras")

} else if ( a == false && b == true &&  c== true) {
console.log(" Há duas verdadeiras")