let A = [3, 2, 1, 13, 8, 5, 0, 1];
let B = copyArray();
const end = A.length;


function MergeSort() {

    SplitMerge(A, B, 0, end)
    console.log(A)
}
MergeSort()

function SplitMerge(B, A, start, end) {

    if (end - start <= 1) {
        return;
    }
    else {
        const middle = (end + start)/2;

        SplitMerge(A, B, start, middle);
        SplitMerge(A, B, middle, end);
        Merge(B, A, start, middle, end);
    }
}

function Merge(B, A, start, middle, end) {
    let i = start;
    let j = middle;

    for (let k = start; k < end; k++) {
        if (i < middle && (j >= end || A[i] <= A[j])) {
            B[k] = A[i];
            i++;
        }
        else {
            B[k] = A[j];
            j++;
        }
    }
}

function copyArray() {
    const B = [].concat(A)
    return B;
}