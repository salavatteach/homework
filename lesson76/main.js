
const age = 17

if(age >= 18){
    console.log('Вы совершеннолетний')
} else{
    console.log('Вам нет  18')
}

age >= 18 ? console.log('Вы совершеннолетний') :  console.log('Вам нет  18')



for(let p = 2; p <= 12; p= p+2){
    console.log(`Прошел ${p} круг`)
}


for(let i = 10; i >= 1 ;i--){
    console.log(`Прошел ${i} круг`)
} 


let p = 0;
while (p <= 10) {
    p = p + 2
    console.log(`Закончился ${p} круг`)
}


let i = 10;
while (i >= 1) {
    i = i-1
    console.log(`Закончился ${i} круг`)
}
