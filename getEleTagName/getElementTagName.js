const dc1=document.getElementById("c1");
const dc2=document.getElementById("c2");
const dc3=document.getElementById("c3");
const dc4=document.getElementById("c4");
const dc5=document.getElementById("c5");
const dc6=document.getElementById("c6");

const arrayElementos=[dc1,dc2,dc3,dc4,dc5,dc6]

const colecaoHTML = document.getElementsByTagName("div")

console.log(arrayElementos); // retormo array
console.log(colecaoHTML); // array HTMLcollection



/*const colecaoHTMLL = [...document.getElementsByTagName("div")]
console.log(colecaoHTMLL);
//forma menos direta*/

let colecaoHTMLL=document.getElementsByTagName("div");
colecaoHTMLL=[...colecaoHTML]

console.log(colecaoHTMLL)

colecaoHTMLL.map((e)=>{
    console.log(e)
})