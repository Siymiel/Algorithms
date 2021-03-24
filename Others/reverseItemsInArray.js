// Reverse items in an array
// Built in function
/**
 reverse_items_in_array = arr => {
    return arr.reverse();
}

console.log(reverse_items_in_array([1,2,3,4,5,6]));
console.log(reverse_items_in_array([1,2,3]));
console.log(reverse_items_in_array(['arr1', 'arr2', 'arr3']));
 */


reverse_items_in_array = arr => {

    let rarr = [];

    for(i = 0; i = arr.length; i++) {
        rarr += arr.pop(i);
    }
    return rarr.split('');
}

console.log(reverse_items_in_array([1,2,3,4,5,6]));
// console.log(reverse_items_in_array([1,2,3]));
// console.log(reverse_items_in_array(['arr1', 'arr2', 'arr3']));


