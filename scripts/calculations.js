document.getElementById('total-cost-of-5-btn').addEventListener('click',function(){
    const costPerPlayerInput = getInputFieldValueInt('cost-per-player');
    displayTotalCostOfFivePlayers(costPerPlayerInput);
});

document.getElementById('total-expense-btn').addEventListener('click',function(){
    const costPerPlayerInput = getInputFieldValueInt('cost-per-player');
    const totalCostOf5Players = displayTotalCostOfFivePlayers(costPerPlayerInput);
    const managerCostInput = getInputFieldValueInt('manager-cost');
    const coachCostInput = getInputFieldValueInt('coach-cost');
    displayTotalExpenses(totalCostOf5Players,managerCostInput,coachCostInput);
});

function getInputFieldValueInt(elementId){
    const fieldInput = document.getElementById(elementId);
    const valueString = fieldInput.value;
    const valueInt = parseInt(valueString);
    if(isNaN(valueInt)){
        alert("Please provide numerical values");
        return;
    }
    else{
        return valueInt;
    }
}

function displayTotalCostOfFivePlayers(inputCost){
    const totalCostOf5Players = inputCost * 5;
    if(isNaN(totalCostOf5Players)){
        document.getElementById('five-stack-cost-display').innerText = "0";
    }
    else{
        document.getElementById('five-stack-cost-display').innerText = totalCostOf5Players;
        return totalCostOf5Players;
    }
}

function displayTotalExpenses(playersCost, managerCost ,coachCost){
    const totalExpense = playersCost + managerCost + coachCost;
    if(isNaN(totalExpense)){
        document.getElementById('expense-display').innerText = "0";
    }
    else{
        document.getElementById('expense-display').innerText = totalExpense;
    }
}