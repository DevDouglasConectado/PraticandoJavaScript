let num=[10,20,30,40,50]

/*for(let i=0;i<num.length;i++){
    console.log(num[i])
}*/
/*for (n of num)
console.log(n)

for (n in num)
console.log(num[n])*/

const objs=document.getElementsByTagName("div")

for (o of objs)
console.log(o.innerHTML="Curso")

for (o in objs)
//console.log(objs[o].innerHTML)
console.log(o)

