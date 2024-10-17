const user = {
    name: 'salavat',
    age: ' 26 y.o',
    dateBorn: 23.11
}
console.log(user)

const man = {
    alex: {
        age: ' 26 y.o',
        dateBorn: 23.11
    },
    sayHello(name) {
        console.log(`Hello ${name}`)
    }
}
man.sayHello('Sasha')



const users = [
    {
        name: 'max',
        age: 21,
        gender: 'male',
        isAdmin: false
    },
     {
        name: 'paul',
        age: 21,
        gender: 'male',
        isAdmin: false
    },
    {
        name: 'tom',
        age: 21,
        gender: 'male',
        isAdmin: true
    },
    {
        name: 'sasha',
        age: 21,
        gender: 'female',
        isAdmin: false
    },
    {
        name: 'masha',
        age: 21,
        gender: 'female',
        isAdmin: false
    }

]
let notAdmin = 0
for (let i = 0; i < users.length; i++) {
    if(users[i].isAdmin == false){
         notAdmin++
        }
    }
    
    console.log(notAdmin)
