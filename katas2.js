// comece a criar a sua função add na linha abaixo
function add(a, b) {
   
 
   return a + b


}console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');

 //-----------------------------------------------------------------------------------------

// comece a criar a sua função multiply na linha abaixo
function multiply (a, b){
let result = 0;
for(let i = 0; i <b; i++){
   result = add(result, a)
}return result
   
}console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');

//---------------------------------------------------------------------------


// comece a criar a sua função power na linha abaixo
function power (a, b) {
   let result = 1;
   for(let i = 0; i < b; i++){
      result = multiply(result, a)
   }return result
}console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


 

//-----------------------------------------------------------------------------------------------
// comece a criar a sua função factorial na linha abaixo
function factorial (a) {
   let result = 1;
   for(let i = a; i > 1; i--){
      result = multiply(result  ,[i])
   }return result

} console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');

// descomente a linha seguinte para testar sua função


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');

