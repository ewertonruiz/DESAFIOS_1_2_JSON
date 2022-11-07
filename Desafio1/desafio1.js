//  Armazene 5 dados numéricos em um vetor. 
const vector = [1, 2, 3, 4, 5];
console.log(vector);

//Em seguida, copie para um objeto com as propriedades n1, n2, n3, n4 e n5. 
const objetoNumerico = { n1:vector[0], n2:vector[1], n3:vector[2], n4:vector[3], n5:vector[4]} 

//Utilize destructuring para copiar os valores para 5 variáveis. 
const [v1, v2, v3, v4, v5] = vector

//Construa um objeto JSON com os valores das variáveis.
const vectorJson = {
    num1: v1,
    num2: v2,
    num3: v3,
    num4: v4,
    num5: v5
}
console.log(JSON.stringify(vectorJson))