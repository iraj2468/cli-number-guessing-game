import inquirer from "inquirer"
const answers  = await inquirer.prompt([
    {
        message:"Please gueesed a number between 1-9",
        type:"number",
        name:"guessednumber"
    }
])
const randomnumber = Math.floor(Math.random()*9 + 1);
if(answers.guessednumber=== "randomnumber"){
    console.log("Congratulations! you guessed a correct number")
}
else{
    console.log("Sorry! you guessed a wrong number.\n Try Again")
}