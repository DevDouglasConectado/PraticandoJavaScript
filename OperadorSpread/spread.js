let n1=[10,20,30]
let n2=[11,22,33,44,55]
let n3=[n1,n2]
let n4=[...n1,...n2]

//console.log("n1: " + n1)
//console.log("n2: " + n2)
console.log("n3: " + n3)
//console.log("n4: " + n4)
console.log("tipo de n3: "+typeof(n3))

const jogador1={nome:"Bruno",energia:100,vidas:5,magia:150}
const jogador2={nome:"Bruce",energia:100,vidas:3,velocidade:80}
const jogador3={...jogador1,...jogador2}
console.log(jogador3)

const soma=(v1,v2,v3)=>{
    return v1+v2+v3
}
console.log(soma(1,5,4))

let valores=[1,5,4,20]
console.log(soma(valores))
console.log(soma(...valores))

const objs1=document.getElementsByTagName("div") // retorna uma coleção de HTML que é diferete de um Arrays, em vista dos elementos desta coleção 
const objs2=[...document.getElementsByTagName("div")]

/*objs1.forEach(Element =>{  //********vai dar erro , pq não egiste esta função
    console.log(Element)
})*/

objs2.forEach(Element =>{
    console.log(Element)
})




console.log(objs1)
console.log(objs2)




