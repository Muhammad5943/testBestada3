let input = 15
let bestadaSukses = "bestada sukses"
let bestada = "bestada"
let sukses = "sukses"
let inputVacum = ''
for (let i = 1; i <= input; i++) {
    if (i == input && i%7 == 0) {
        inputVacum += bestadaSukses.replace(/["]+/g, '') + ''
    } else if (i == input) {
        inputVacum += sukses.replace(/["]+/g, '') + ''
    } else if (i%7 == 0) {
        inputVacum += bestada.replace(/["]+/g, '') + ', '
    } else {
        inputVacum += i + ', '
    }
}

console.log(inputVacum)