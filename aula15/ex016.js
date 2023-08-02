let num = [8,1,7,4,2,9]

for(let pos=0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let posicao2 = num.indexOf(2)
let posicao3 = num.indexOf(3)
console.log(`o 2 está na posição ${posicao2}`)
console.log(`o 3 está na posição ${posicao3}`)
//quando volta a posição -1 é porque nao tem no array