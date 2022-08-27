let arr = [3, 7, 1, 2, 6, 7, 8, 9, 12, 5, 3, 12]
let unique  = [];
for (var i = 0, l = arr.length; i < l; i++)
if (unique.indexOf(arr[i]) === -1 && arr[i] !== '')
unique.push(arr[i]);

let sort = (uniqueArr) => {
    let isSort
    
    do {
        isSort = false
        for (let i = 0; i < uniqueArr.length; i++) {
            if (uniqueArr[i] < uniqueArr[i+1]) {
                let temp = uniqueArr[i]
                uniqueArr[i] = uniqueArr[i + 1]
                uniqueArr[i + 1] = temp
                
                isSort = true
            }
        }
    } while (isSort)

    return uniqueArr
}

console.log(sort(unique))