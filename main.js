// q1
// a
// array1.pop();

// b
// array1.shift();

// c
// array1.splice(4, 1);

// q2
function removeLongNames(names) {
    for (let i = 0; i < names.length; i++) {
        if (names[i].length > 4) {
            names.splice(i, 1);
            i--;
        }
    }
}

// q3
function removeAll(anArray, item) {
    for (let i = 0; i < anArray.length; i++) {
        if (anArray[i] == item) {
            anArray.splice(i, 1);
            i--;
        }
    }
}