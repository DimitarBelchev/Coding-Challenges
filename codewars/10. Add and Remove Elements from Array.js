function solve(arr) {
    let number = 1;
    let array = [];
 
    for (let command of arr) {
        if (command === "add") {
            array.push(number);
        } else if (command === "remove") {
            if (array.length > 0) {
                array.pop();
            }
        }
        number++;
    }
 
    if (array.length === 0) {
        console.log("Empty");
    } else {
        console.log(array.join(" "));
    }
}
solve(['remove', 'remove', 'remove'])