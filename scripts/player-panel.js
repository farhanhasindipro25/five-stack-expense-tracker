const fiveStack = [];

function disableAfterOneSelect(){
    const selectButton = document.getElementsById('player-select-btn').addEventListener('click',function(){
        selectButton.setAttribute('disabled',true);
    });
}

function addToPlayerListPanel(element){
    const playerName = element.parentNode.children[0].innerText;
    element.setAttribute('disabled',true);
    fiveStack.push(playerName);
    if(fiveStack.length === 6){
        element.removeAttribute('disabled',false);
        alert('You cannot select more than 5 players');
        return;
    }
    getPlayerQuantity('player-quantity');
    displayPlayers(fiveStack);
}

function getPlayerQuantity(elementId){
    document.getElementById(elementId).innerText = fiveStack.length; 
}

function displayPlayers(fiveStack){
    const playerListPanel = document.getElementById('player-list-panel');
    playerListPanel.innerText = '';
    for(let i = 0 ; i < fiveStack.length ; i++){
        const name = fiveStack[i];
        const displayPlayer = document.createElement('li');
        displayPlayer.innerText = name;
        playerListPanel.appendChild(displayPlayer);
    }
}