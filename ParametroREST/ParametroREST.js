/*function soma(...valores){
    let tam=valores.length
    let res=0
    for(let i=0;i<tam;i++){
        res=res+valores[i]
    }
    return res
}
console.log(soma(2,5,2,8))*/
function soma(...valores){ //paramentros rest utilizando o spred
    let res=0
    for(let v of valores){
        res+=v
    }
    return res
}
console.log(soma(2,5,2,8))
