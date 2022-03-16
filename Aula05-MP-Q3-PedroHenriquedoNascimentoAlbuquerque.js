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
 * Questão: 3
 *
 */


// O programa abaixo deveria ser capaz de testar se três variáveis do tipo booleano são iguais, 
//corrija todos os erros do mesmo, e para cada erro encontrado faça um comentário explicando qual o erro e qual foi 
//a solução encontrada (obs.: é obrigatório o uso de operadores lógicos nesta questão)



var a = true
var b = true
var c = true


if (a != c && c != a) { //ac, ca
    console.log("diferentes")
} else if (a != b && b != a) { // ab , ba
    console.log("diferentes")   
}else if (b != c && c != b){ // bc , cb
    console.log("diferentes") 

} else {
    console.log("iguais")
}


//Erro 1: A palavra "True" está escrita errada nas 3 variáveis, por isso não há exito ao executar o código
//Correção 1: Por a palavra "True" corretamente

//Erro 2: o "& comercial está incompleto
//Correção 2: Colocar os dois "&&"

//Erro 3: No código, está faltando a comparação bc e cb, o código estava executando apenas 2 condicionais
//Correção 3: Adicionar o }else if (b != c && c != b){ para realizar o teste de bc e cb
//Obs.: o código apenas estava testando apenas as condicionais ac, ca, ba e ab