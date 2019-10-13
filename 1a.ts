
let secondLargest = function(array: number[]): number {
    if (array.length < 2) {
        return null;
    }

    let a: number = array[0];
    let b: number

    if (array[1]>a) {
        b = a;
        a = array[1];
    }
    else {
        b = array[1];
    }

    for (let i: number = 2; i<array.length; i++) {
        if (array[i]>a) {
            b = a;
            a = array[i];
        }
        else if (array[i]>b) {
            b = array[i];
        }
    }

    return b;
}
