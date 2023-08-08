const double = num => num * 3;
const digun = double(4);
console.log(digun);



const give = () => 5;
const result = give();
console.log(result);


const add = (x, y) => x + y;
const result2 = add(5,6);
console.log(result2);

const doMath = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const total =sum * diff;
    return total;
}
const result3 = doMath(7,5);
console.log(result3);