true / kiwi
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
88,64,59,27,15 / apple
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
orange

console.log(getRandomString());
60 * orange
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };

const reverseWords = str => str.split(" ").reverse().join(" ");
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
86 - 14,83,26,71,27,43,15,87,18,5,73,79,36,72,74,69,94,23,94,45,2,36,97,33,98,82,81,96,4,43,29,79,47,88,59,19,14,70,40,41,26,29,70,48,70,41,3,91,33,99,50,68,19,6,30,64,9
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

banana + 60,65,12,95,37,3,35,29,98,87,67,92,13,92,87,37
const getRandomSubset = (array, size) => array.slice(0, size);

let array = getRandomArray(); array.forEach(item => console.log(item));

kiwi

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const sum = (a, b) => a + b;
const isEven = num => num % 2 === 0;
27 - true
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const variableName = getRandomNumber();
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
