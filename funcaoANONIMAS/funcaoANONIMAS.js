// não gurdada na memoria , e so executata em tempo de execução 

/*const f= function(v1,v2){
    return v1+v2
}
console.log(f(10,5))*/

const f= function(...valores){ //usando spred
    let res=0
    for(v of valores){
        res+=v
    }
    return res
}
console.log(f(10,5))
/*função anonimas construtora */
const g=new Function("v1","v2","v3","return v1+v2+v3")
console.log(g(10,5,15))