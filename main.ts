import inquirer from "inquirer";

let myBalance = 20000;
let myPin = 8216;

let myPinAnswer = await inquirer.prompt([
  {
    name: "Q1",
    message: "Enter your pin code",
    type: "number",
  },
]);

if (myPinAnswer.Q1 === myPin) {
  console.log("Correct pin code!!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please selct one option",
      type: "list",
      choices: ["WithDraw", "Check your Balance", "Fast cash"],
    },
  ]);

  if (operationAns.operation === "WithDraw") {
    let amouantAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Select amount that you want to withdraw",
        type: "number",
        validate: (value) => {
          if (value > myBalance) {
            return "Insufficient balance";
          }
          return true;
        },
      },
    ]);

    myBalance -= amouantAns.amount;
    console.log(`Your remaining balance is:  ${myBalance}`);
  } else if (operationAns.operation === "Check your Balance") {
    console.log(`Your current balance is: ${myBalance}`);
  } else if (operationAns.operation === "Fast cash") {
    let fastCashAns = await inquirer.prompt([
      {
        name: "cash",
        message: "Select one of the operator to perform fast cash",
        type: "list",
        choices: [1000, 2000, 3000, 5000, 10000],
      },
    ]);

    myBalance -= fastCashAns.cash;
    console.log(`Your remaining balance is:  ${myBalance}`);
  }
} else {
  console.log("Incorrect pin code!");
}
