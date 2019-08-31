//////////////// js task 1 /////////////

var name = "Андрей";
console.log(name);

name = "Александр";
console.log(name);


//////////////// js task 2 /////////////
let a = 1;
if (a == 1) {
    console.log('true');
} else console.log('false');


//////////////// js task 3 /////////////

for (let i = 0; i <10; i++) {
    console.log(i);
}


//////////////// js task 3 /////////////

function sum(p1, p2, p3) {
    let s = p1 + p2 + p3;
    return s;
}

let s = sum(10,20,30);
console.log(s);

s = sum(1,2,3);
console.log(s);

s = sum(5,5,5);
console.log(s);


//////////////// js task 4 /////////////

let ar = ['привет', 'loftschool'];

ar.push('я изучаю', 'javascript');

console.log(ar.length);

for (let i = 0; i<ar.length; i++) {console.log(ar[i])}


//////////////// js task 5 /////////////

let ar = [4, 100, 658, 74, 129, 10, 19, 57, 3500, 99];

for (let i = 0; i<ar.length; i++) {
    if (ar[i] > 100) {
        console.log(ar[i]);
    }
}

//////////////// js task 5 /////////////

let o = {
    name: 'Андрей',
    lastName: 'Стефанцов',
    age: '28'
};

console.log(o.name, o.lastName, o.age);

o.town = 'Домодедово';

console.log(o.town);


//////////////// js task 6 /////////////

function hello(human) {
    return (`Привет, меня зовут ${human.name} ${human.lastName} и мне ${human.age} лет!`)
}

console.log(hello (o));

