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
 * Questão: 1
 *
 */


//  Implemente um subprograma que, dado um vetor, retorna a média de todos os seus números ímpares. 
// Retorno : 3
vetor = [1, 2, 5, 2, 2, 0]
media = 6
for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 !== 1 ) {
     media = vetor[i] / media;
    }
}
console.log(media)











