
function splitBill() {
    let numberOfDiners;
    let menuChoice1Cost;
    let menuChoice2Cost;
    let menuChoice3Cost;
    let menuChoice4Cost;
    let perPersonCost;
    numberOfDiners = prompt("Split the bill between how many people?")
    menuChoice1Cost = prompt("How much was the first dish?");
    menuChoice2Cost = prompt("How much was the second dish?");
    menuChoice3Cost = prompt("How much was the third dish?");
    menuChoice4Cost = prompt("How much was the fourth dish?");
    let menuChoice1CostNumber = Number(menuChoice1Cost);
    let menuChoice2CostNumber = Number(menuChoice2Cost);
    let menuChoice3CostNumber = Number(menuChoice3Cost);
    let menuChoice4CostNumber = Number(menuChoice4Cost);
    let totalCost = Number(menuChoice1CostNumber+menuChoice2CostNumber+menuChoice3CostNumber+menuChoice4CostNumber);
    divMenu1.innerHTML = `The cost for the first item is $${menuChoice1CostNumber}`;
    divMenu2.innerHTML = `The cost for the second item is $${menuChoice2CostNumber}`;
    divMenu3.innerHTML = `The cost for the third item is $${menuChoice3CostNumber}`;
    divMenu4.innerHTML = `The cost for the fourth item is $${menuChoice4CostNumber}`;
    divTotalCost.innerHTML = `The total bill is $${totalCost}`;
    divNumberOfDiners.innerHTML = `Number of diners ${numberOfDiners}`;
    perPersonCost = Math.floor(totalCost / numberOfDiners);
    divPerPersonBill.style.color = "yellow";
    divPerPersonBill.innerHTML = `The cost per person is $${perPersonCost}`; 
}

splitBillButton.onclick = splitBill;