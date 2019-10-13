let afterLargest = function(array: number[]): number {
    if (array.length < 2) {
        return null;
    }

    let a: number = array[0];
    let b: number = array[1];

    for (let i: number = 1; i < array.length - 1; i++) {
        if (array[i]>a) {
            a = array[i];
            b = array[i+1];
        }
    }
    if (array[array.length - 1] > a) {
        return null;
    }
    else {
        return b;
    }
}

export = {afterLargest: afterLargest};
