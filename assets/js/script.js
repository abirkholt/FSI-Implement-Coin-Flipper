// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    
    // TODO: Add event listener and handler for flip and clear buttons
    let total = 0;
    let numberOfHeads = 0;
    let numberOfTails = 0;
    let percentageHeads = 0;
    let percentageTails = 0;

    const flipButton = document.querySelector('#flip');
    const clearButton = document.querySelector('#clear');
    const statusMessage = document.querySelector('#statusMessage');
    const pennyImage = document.querySelector('img');
    const numberHeadCell = document.querySelector('#heads');
    const numberTailscell = document.querySelector('#tails');
    const percentageHeadsCell = document.querySelector('#heads-percent');
    const percentageTailsCell = document.querySelector('#tails-percent');

    flipButton.addEventListener('click', function(e) {
        total += 1;
        console.log("hello")
       
        const result = Math.round(Math.random() * 100);
        console.log(result)
        // Heads

        if (result > 50) {
            numberOfHeads += 1;
            statusMessage.textContent = 'You Flipped Heads!';
            pennyImage.src = 'assets/images/penny-heads.jpg'; 
            } else{
            // Tails
            numberOfTails +=1;
            statusMessage.textContent = 'You Flipped Tails!';
            pennyImage.src = 'assets/images/penny-tails.jpg';
        }
        percentageHeads = Math.round((numberOfHeads / total) * 100);
        percentageTails = Math.round((numberOfTails / total) * 100);
        numberHeadCell.textContent = `${numberOfHeads}`;
        numberTailscell.textContent = `${numberOfTails}`;
        percentageHeadsCell.textContent = `${percentageHeads}`;
        percentageTailsCell.textContent = `${percentageTails}`;
    });

    clearButton.addEventListener('click', function(e) {
        total = 0;
        numberOfHeads = 0;
        numberOfTails = 0;
        percentageHeads = 0;
        percentageTails = 0;

        numberHeadCell.textContent = `${numberOfHeads}`;
        numberTailscell.textContent = `${numberOfTails}`;
        percentageHeadsCell.textContent = `${percentageHeads}`;
        percentageTailsCell.textContent = `${percentageTails}`;
        statusMessage.textContent = "Let's Get Rolling!";
        pennyImage.src = 'assets/images/penny-heads.jpg';



        
    });

})