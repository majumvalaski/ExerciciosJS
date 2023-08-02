let num = [5,6,4]
num.sort()
num[3]=7
num.push(8)
console.log(num)
console.log(`O array tem ${num.length} posições`)

let num2 = [8,1,7,4,2,9]

for(let pos=0; pos<num2.length; pos++){
    console.log(`A posição ${pos} tem o valor${num2[pos]}`)
}
