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
 * Questão: 3
 *
 */


// O subprograma abaixo deveria ser capaz de, dados um vetor e um número, retornar true se o número ocorre dentro do vetor, ou false, caso contrário. 
//Corrija todos os erros do mesmo e para cada erro encontrado faça um comentário explicando qual o erro e qual foi a solução encontrada.


function buscar(array, n) {
    for (i = 0; i < n; i++) {
        if (a[n] == n) {
            return false
        } else {
            return true
        }
    }
}


var vetor = [4,5,6,7,1,2,3,4]
var achar = vetor.find(element => vetor > 6);
console.log("resultado:", buscar(achar))


// Erro 1: Aspas da lingua portuguesa
// Correção 1: Usar ""

//Erro 2: === só irá operar quando os valores forem idênticos
// Correção 2: utilizar ==

//Erro 3: está faltando uma variável para o número que irá ser encontrado no vetor
//Correção 3: colocar a variável e o número