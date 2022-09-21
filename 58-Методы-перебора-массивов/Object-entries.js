const obj = {
    ivan: 'person',
    alex: 'person',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
    .filter(arr => arr[1] === 'person')
    .map(item => item[0]);

console.log(newArr);