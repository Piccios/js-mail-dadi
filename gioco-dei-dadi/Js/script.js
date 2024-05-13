

for (let i = 0; i < 1; i++) {
    let Computer = (Math.floor((Math.random() * 6) + 1));
    console.log("Computer gets: " + Computer );
    let User = Math.floor((Math.random() * 6) + 1);
    console.log("User gets: " + User )

    if (Computer < User) {
        console.log("The number is: " + User + ' USER WINS!!')
    } else if (Computer > User) {
        console.log("The number is: " + Computer + ' COMPUTER WINS!!')
    } else {
        console.log("IT'S A DROW!!")
    }
}
