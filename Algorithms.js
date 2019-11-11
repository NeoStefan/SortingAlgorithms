let numbers = new Array(340, 67, 9, 38, 12, 1);

console.log("Before sorting");

numbers.forEach(number => {
    console.log(number);
});

//bubble sort
for (let j = 0; j < numbers.length; j++) {

    for (let i = 0; i < numbers.length - 1; i++) {
        
        var temp;

        if (numbers[i] > numbers[i + 1]) {

            temp = numbers[i + 1];
            numbers[i + 1] = numbers[i];
            numbers[i] = temp;

        }
    }
}

console.log("");

console.log("After sorting with bubble sort");
numbers.forEach(number => {
    console.log(number);
});

console.log("")

for (let i = 1; i < numbers.length; i++) {
    
    var temp;
    var hole;
    var value;

    value = numbers[i];
    hole = i;

    while (hole > 0 && numbers[i - 1] > value ) {
        
        temp = numbers[i];
        numbers[i] = numbers[i - 1];
        numbers[i - 1] = temp;
        hole = hole - 1;

    }
    
}

console.log("After sorting with insertion sort");

numbers.forEach(number => {
    console.log(number);
});