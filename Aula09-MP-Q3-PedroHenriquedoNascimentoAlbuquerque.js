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
 * Questão: 3
 *
 */

 //O subprograma abaixo deveria ser capaz de, dados um array bidimensional e um número, retornar true se o 
 //número ocorre dentro do array, ou false, caso contrário. Corrija todos os erros do mesmo e para cada erro encontrado 
 //faça um comentário explicando qual o erro e qual foi a solução encontrada.

function buscar(array, n) {
    for (j = 0; j < array.length; j++) {
        for (i = 0; i < array.length; i++) {
            if (array[j][i] == n) {
                return true
            }
        }
    }
        return false
}


var array =  [ [1,2,3,4,5,6], [1,2,3,4,5,6] ]
console.log("resultado:", buscar(array, 0))

// Erro 1: Aspas erradas no resultado
// Correção 1: Usar ""

// Erro 2: Não existe "Vetor" na função
// Correção 2: Trocar vetor por "array"

//Erro 3: Troca de I++ no for do J e J++ no for do I
//Correção 3: Trocar os I e J 

//Erro 4: array[j[.length está errado, não entra no laço
//Correção 4: usar apenas o array.length