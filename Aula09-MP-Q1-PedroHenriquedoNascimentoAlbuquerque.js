/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet 
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados 
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pedro Henrique do Nascimento Albuquerque
 * Curso:IPI
 * Aula: Aula 09 - Arrays - Mini-prova
 * Questão: 1
 *
 */

// Implemente um subprograma que, dado um array bidimensional, retorna a média de todos os seus números ímpares. 

function mediaimpares (vet) {
    
let media = 0
let apenasimpares = 0

for (let i = 0; i < vet.length; i++) {
    for (let j = 0; j < vet[i].length ; j++) {
         if (vet[i][j] % 2 != 0) {
         media = media + vet[i][j]
         apenasimpares++
           }
       }
        media = media / apenasimpares
        return media 
     }
}

vet = [ [1, 2, 5, 2, 2, 0],
        [0, 4, 4, 8, 8, 0] ] 

console.log(mediaimpares(vet))