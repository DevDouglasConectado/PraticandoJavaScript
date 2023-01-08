
const soma=(...valores)=>{ 
     const somar=(val)=>{
        let res=0
        for(v of val)
        res+=v
        return res    
     }
     return somar(valores)
}
console.log(soma(10,5,15))

/*const somar=(val)=>{
    let res=0
    for(v of val)
    res+=v
    return res    
 }
 const soma=(...valores)=>{
    return somar(valores)

    valor=[10,5,15]
    console.log(soma(...valor))
}*/