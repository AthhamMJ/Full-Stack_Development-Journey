function DuplicateRemover() {
    let numbers = [1, 2, 4, 5, 2, 5, 6, 7, 8, 9, 10, 9, 9];
    let count = 0;
    let i;
    for (i = 0; i < numbers.length; i++) {
        let temp = numbers[i];
        count = 0;
        for (let j = 0; j < numbers.length; j++) {

            if (numbers[i] === numbers[j]) {
                count++;
            }

        }
        
    }
    console.log(`The Number ${numbers[i]} Appeared ${count} times`);
}
DuplicateRemover();