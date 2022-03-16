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
 * Questão: 3
 *
 */

 //Reescreva corretamente o programa abaixo que deveria implementar o tipo Sacola e a operação ehBiodegradavel que 
 //recebe uma variável do tipo Sacola como parâmetro e deveria retornar true se a Sacola fosse biodegradável, ou false, caso contrário. 
 //Para cada alteração feita no código escreva uma frase justificando a mesma como comentário no código-fonte.


class Sacola {
    constructor(fabricante, volume, biodegradavel) { // Está escrito "construtor", o correto seria "Constructor"
        this.fabricante = fabricante // Está faltando o This para identificar o objeto na classe
        this.volume = volume // Está faltando o This para identificar o objeto na classe
        this.biodegradavel = biodegradavel // Está faltando o This para identificar o objeto na classe
    }
}


function ehBiodegradavel(s1, s2) { //Utilizar Execução condicional 
    if (s1.biodegradavel == s2.biodegradavel) { // Usar s1.biodegradavel e s2.biodegradavel para identificar o que vai ser comparado no código
        return true
    }else{
        return false
    }
    
}


var sacola1 = new Sacola('plasfil', '13', 'nao biodegradavel') // Criar variável para as sacolas 1 e 2
var sacola2 = new Sacola('plasfil', '13', 'biodegradavel') // Criar variável para as sacolas 1 e 2

console.log(ehBiodegradavel(sacola1, sacola2)) // Imprimir a função e a sacola1 e sacola2 como parâmetros
