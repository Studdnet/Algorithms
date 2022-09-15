// Линейный поиск. 
const arr = [1, 5, 6, 89, 4, 3, 78, 10];
let count = 0;

function linearSearch(array, item) {
	for (let i = 0; i < array.length; i++) {
		count++;
		if (array[i] === item) {
			return console.log(`Индекс искомого элемента равен ${i}. Количество шагов:${count}`);
		}
	}
	return console.log(`Искомый элемент не найден. Количество шагов: ${count}`);
}
linearSearch(arr, 7);

// Сложность данного алгоритма О(n), где количество элементов итераций в массиве. 

