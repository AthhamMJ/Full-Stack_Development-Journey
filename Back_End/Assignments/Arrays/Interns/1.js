function DuplicateRemover() {
    let numbers = [1, 2, 4, 5, 2, 5, 6, 7, 8, 9, 10, 9, 9];
    let numbers2 = [];
    for (let i = 0; i < numbers.length; i++) {
        let found = false;
        for (let j = 0; j < numbers2.length; j++) {

            if (numbers[i] === numbers2[j]) {
                found = true;
                break;
            }

        }
        if (!found) {
            numbers2.push(numbers[i]);
        }
    }
    console.log(numbers2);
}
DuplicateRemover();