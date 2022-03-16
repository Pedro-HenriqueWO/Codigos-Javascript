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
 * Questão: 2
 *
 */

 //Implemente um subprograma que dados dois arrays bidimensionais, 
 //retorna true caso todos os elementos de ambos sejam iguais, ou false, caso contrário.


function vetoresiguais(v1,v2) {
    
let iguais = true

if (v1.length != v2.length) {
    iguais = false
}

for (let i = 0; i < v1.length && iguais; i++) {
    for (let j = 0; j < v2[i].length; j++) {
        if (v1[i] != v2[j]) {
           iguais = false
          }
      }
    }
    return iguais 
}



 let v1 = [ [1,2,3,4,5,6],  
            [1, 2, 5, 2, 2, 0] ]

 let v2 =  [ [7,8,9,10,11,12], 
            [0, 4, 4, 8, 8, 0] ]
console.log(vetoresiguais(v1,v2))