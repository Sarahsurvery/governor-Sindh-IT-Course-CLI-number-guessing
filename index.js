import inquirer from "inquirer";
//1) computer will generate random number -Done
//2) user input for guessing number
//3) compare user input with computer generated number and show result
const randomnumber = Math.floor(Math.random() * 6 + 1);
console.log(randomnumber);
const answers = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "please guess a number between 1-6:",
    }
]);
if (answers.userguessednumber === randomnumber) {
    console.log("congratulation! you guessed right number");
}
else {
    console.log("you guessed wrong number");
}
