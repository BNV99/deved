
let m = [1, 26, 43, 4, 10, 63, 7, 28, 9, 5];



function Bubble(n){


for (let i = 0; i < n.length; i++) {
    let m_min = m[i];
    for (let j = i + 1; j < n.length-1; j++) {
        if (m[j] < m_min) {
            let mm = m[i];
            m_min = m[j];
            m[i] = m_min;
            m[j] = mm;
        }
    }
}
return m;


}



function Select(arr)
{
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }
    return arr;
};



function Insert (arr) 
{
    for (let i = 1, l = arr.length; i < l; i++) {
        const current = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
    }
    return arr;
};


console.log(Bubble(m));
console.log(Insert(m));
console.log(Select(m));