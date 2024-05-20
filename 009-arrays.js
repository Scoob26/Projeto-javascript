/*
O que é um Array em JavaScript?
Um array em JavaScript é um tipo de estrutura 
de dados que permite armazenar múltiplos valores 
em uma única variável. Os elementos de um array 
são indexados numericamente, começando do índice 0,
 o que significa que cada elemento tem uma posição 
 específica no array.
*/
// Usando colchetes []
let array1= [1,2,3,4,5];

// Usando o construtor array()
let array2= (1,2,3,4,5);

// criando um array vazio []
let array3= [];

// arrays podem conter diferentes tipos de dados []
let array4= ["Hello",42,true];

let array=[10,20,30,40,50];
console.log(array[0]);// saida:10
console.log(array[2]);// saida:30

// verificando o tamanho do array
let arraylength= [1,2,3];
console.log(arraylength.length) // saida 3

// inserindo um item no array
 arraylength.push(4)
console.log(arraylength); // saida:  [1,2,3]
 
// verificando o tamanho do array
let removedElement = arraylength.pop();
console.log(removedElement); // saida: 4
console.log(arraylength); // saida: [1,2,3]



