/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet 
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados 
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pedro Henrique do Nascimento Albuquerque
 * Curso:IPI
 * Aula: Aula 08 - Vetores - Mini-prova
 * Questão: 2
 *
 */

// Implemente um subprograma que dados dois vetores, retorna true caso todos os elementos de ambos sejam iguais, ou false, caso contrário.

function vetoresiguais (vetor1,vetor2) {
    let iguais = true
if (vetor1.length != vetor2.length) {
    return false
}
    for (let i = 0; iguais && i < vetor1.length; i++) {
        if (vetor1[i] == vetor2[vetor1.length]);{
            return true
        }
    }
}

let vetor1 = [1,2,3,32]
let vetor2 = [1,2,3]

console.log(vetoresiguais(vetor1, vetor2))