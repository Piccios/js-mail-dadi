

for (let i = 0; i < 1; i++) {
    let Computer = (Math.floor((Math.random() * 6) + 1));
    console.log(Computer + " Computer");
    let User = Math.floor((Math.random() * 6) + 1);
    console.log(User + " User")

    if (Computer < User) {
        console.log(User + ' USER WINS!!')
    } else if (Computer > User) {
        console.log(Computer + ' COMPUTER WINS!!')
    } else {
        console.log("IT'S A DROW!!")
    }
}
