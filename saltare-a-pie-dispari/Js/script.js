let numberList = []

for (let i = 0; i <= 6; i++ ) {
    let numeroUser = Number.parseInt(prompt("Inserisci un numero:"));
    if (numeroUser % 2 === 0){
        numberList.push(numeroUser)
    };

}
console.log(numberList)
