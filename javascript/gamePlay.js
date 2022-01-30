
// define varibales
// object used to hold values of xs and os
var obj = {1: 'empty', 2: 'empty', 3: 'empty', 4: 'empty', 5: 'empty', 6: 'empty', 7: 'empty', 8: 'empty', 9: 'empty'};
// an array of available moves used in computer plays
var availableSquares = [1,2,3,4,5,6,7,8,9];
// an empty array of filled squares used in computer plays
var filledSquares = [];
// count number of moves made
var numberOfMoves = 0;

// computerPlays is a function that manages the moves of the computer
function computerPlays() {
    // pick a random square
    var randomSquare = Math.floor(Math.random() * 10);
    // check if the random square is filled
    // if it is then recalculate the chosen random square
    while (filledSquares.includes(randomSquare) || randomSquare === 0) {
        randomSquare = Math.floor(Math.random() * 10);
    }
    console.log(randomSquare)

    // switch case used to display the computers chosen square
    switch (randomSquare) {
        case 1:
            document.getElementById('one-o').style.display = 'block';
            obj[1] = 'o';
            availableSquares.splice(0,1);
            filledSquares.push(1);
            numberOfMoves++
            checkGame(obj);
            break;
        case 2:
            document.getElementById('two-o').style.display = 'block';
            obj[2] = 'o';
            availableSquares.splice(1,1);
            filledSquares.push(2);
            numberOfMoves++
            checkGame(obj);
            break;
        case 3:
            document.getElementById('three-o').style.display = 'block';
            obj[3] = 'o';
            availableSquares.splice(2,1);
            filledSquares.push(3);
            numberOfMoves++
            checkGame(obj);
            break;
        case 4:
            document.getElementById('four-o').style.display = 'block';
            obj[4] = 'o';
            availableSquares.splice(3,1);
            filledSquares.push(4);
            numberOfMoves++
            checkGame(obj);
            break;
        case 5:
            document.getElementById('five-o').style.display = 'block';
            obj[5] = 'o';
            availableSquares.splice(4,1);
            filledSquares.push(5);
            numberOfMoves++
            checkGame(obj);
            break;
        case 6:
            document.getElementById('six-o').style.display = 'block';
            obj[6] = 'o';
            availableSquares.splice(5,1);
            filledSquares.push(6);
            numberOfMoves++
            checkGame(obj);
            break;
        case 7:
            document.getElementById('seven-o').style.display = 'block';
            obj[7] = 'o';
            availableSquares.splice(6,1);
            filledSquares.push(7);
            numberOfMoves++
            checkGame(obj);
            break;
        case 8:
            document.getElementById('eight-o').style.display = 'block';
            obj[8] = 'o';
            availableSquares.splice(7,1);
            filledSquares.push(8);
            numberOfMoves++
            checkGame(obj);
            break;
        case 9:
            document.getElementById('nine-o').style.display = 'block';
            obj[9] = 'o';
            availableSquares.splice(8,1);
            filledSquares.push(9);
            numberOfMoves++
            checkGame(obj);
            break;
    }
}


// playGame is a function used to set the display of player 
// selected squares where clicked is the id of the square that was clicked
function playGame(clicked) {
    // switch case used to set display of the players chosen square
    switch (clicked) {
        case 'top-left':
            if (obj[1] === 'empty') {
                document.getElementById('one-x').style.display = 'block';
                obj[1] = 'x';
                availableSquares.splice(0,1);
                filledSquares.push(1);
                numberOfMoves++
                checkGame(obj);
                if (numberOfMoves < 9) {
                    computerPlays();
                }
            }
            else {
                alert('choose a different square')
            }
            break;
        case 'top-middle':
            if (obj[2] === 'empty') {
                document.getElementById('two-x').style.display = 'block';
                obj[2] = 'x';
                availableSquares.splice(1,1);
                filledSquares.push(2);
                numberOfMoves++
                checkGame(obj);
                if (numberOfMoves < 9) {
                    computerPlays();
                }
            }
            else {
                alert('choose a different square')
            }
            break;
        case 'top-right':
            if (obj[3] === 'empty') {
                document.getElementById('three-x').style.display = 'block';
                obj[3] = 'x';
                availableSquares.splice(2,1);
                filledSquares.push(3);
                numberOfMoves++
                checkGame(obj);
                if (numberOfMoves < 9) {
                    computerPlays();
                }
            }
            else {
                alert('choose a different square')
            }
            break;
        case 'middle-left':
            if (obj[4] === 'empty') {
                document.getElementById('four-x').style.display = 'block';
                obj[4] = 'x';
                availableSquares.splice(3,1);
                filledSquares.push(4);
                numberOfMoves++
                checkGame(obj);
                if (numberOfMoves < 9) {
                    computerPlays();
                }
            }
            else {
                alert('choose a different square')
            }
            break;
        case 'middle-middle':
            if (obj[5] === 'empty') {
                document.getElementById('five-x').style.display = 'block';
                obj[5] = 'x';
                availableSquares.splice(4,1);
                filledSquares.push(5);
                numberOfMoves++
                checkGame(obj);
                if (numberOfMoves < 9) {
                    computerPlays();
                }
            }
            else {
                alert('choose a different square')
            }
            break;
        case 'middle-right':
            if (obj[6] === 'empty') {
                document.getElementById('six-x').style.display = 'block';
                obj[6] = 'x';
                availableSquares.splice(5,1);
                filledSquares.push(6);
                numberOfMoves++
                checkGame(obj);
                if (numberOfMoves < 9) {
                    computerPlays();
                }
            }
            else {
                alert('choose a different square')
            }
            break;
        case 'bottom-left':
            if (obj[7] === 'empty') {
                document.getElementById('seven-x').style.display = 'block';
                obj[7] = 'x';
                availableSquares.splice(6,1);
                filledSquares.push(7);
                numberOfMoves++
                checkGame(obj);
                if (numberOfMoves < 9) {
                    computerPlays();
                }
            }
            else {
                alert('choose a different square')
            }
            break;
        case 'bottom-middle':
            if (obj[8] === 'empty') {
                document.getElementById('eight-x').style.display = 'block';
                obj[8] = 'x';
                availableSquares.splice(7,1);
                filledSquares.push(8);
                numberOfMoves++
                checkGame(obj);
                if (numberOfMoves < 9) {
                    computerPlays();
                }
            }
            else {
                alert('choose a different square')
            }
            break;
        case 'bottom-right':
            if (obj[9] === 'empty') {
                document.getElementById('nine-x').style.display = 'block';
                obj[9] = 'x';
                availableSquares.splice(8,1);
                filledSquares.push(9);
                numberOfMoves++
                checkGame(obj);
                if (numberOfMoves < 9) {
                    computerPlays();
                }
            }
            // if the players chosen square is already populated, alert the user to choose a 
            // different square
            else {
                alert('choose a different square')
            }
            break;
    }
}


// tossCoin is a function used to decide if the computer or player goes first
// where pick is the selected button id in index.html. Either heads or tails.
function tossCoin(pick) {
    // declare local variables
    var goesFirst = 'computer'
    var result = 'heads'
    var coin = Math.random();
    // if the coin variable is less than or equal to 0.5, set the result 
    // of the coin toss to tails
    if (coin <= 0.5) {
        result = 'tails'
    }
    // if the result is equal to the selected button, the player goes first,
    // otherwise the computer goes first
    if (pick === result) {
        goesFirst = 'player'
    }
    // if the goesFirst variable equals player, set the display of the appropriate 
    // text to indicate if the user won or lost the coin toss
    if (goesFirst === 'player') {
        document.getElementById('i-go').style.display = 'flex';
        document.getElementById('coin-toss-container').style.display = 'none'
        document.getElementById('ttt-container').style.display = 'flex'
        // switch case used to choose a random square and then set the 
        // display of the appropriate square
        switch (Math.floor(Math.random() * 10)) {
            case 1:
                document.getElementById('one-o').style.display = 'block';
                obj[1] = 'o';
                availableSquares.splice(0 - numberOfMoves,1);
                filledSquares.push(1);
                numberOfMoves++
                break;
            case 2:
                document.getElementById('two-o').style.display = 'block';
                obj[2] = 'o';
                availableSquares.splice(1 - numberOfMoves,1);
                filledSquares.push(2);
                numberOfMoves++
                break;
            case 3:
                document.getElementById('three-o').style.display = 'block';
                obj[3] = 'o';
                availableSquares.splice(2 - numberOfMoves,1);
                filledSquares.push(3);
                numberOfMoves++
                break;
            case 4:
                document.getElementById('four-o').style.display = 'block';
                obj[4] = 'o';
                availableSquares.splice(3 - numberOfMoves,1);
                filledSquares.push(4);
                numberOfMoves++
                break;
            case 5:
                document.getElementById('five-o').style.display = 'block';
                obj[5] = 'o';
                availableSquares.splice(4 - numberOfMoves,1);
                filledSquares.push(5);
                numberOfMoves++
                break;
            case 6:
                document.getElementById('six-o').style.display = 'block';
                obj[6] = 'o';
                availableSquares.splice(5 - numberOfMoves,1);
                filledSquares.push(6);
                numberOfMoves++
                break;
            case 7:
                document.getElementById('seven-o').style.display = 'block';
                obj[7] = 'o';
                availableSquares.splice(6 - numberOfMoves,1);
                filledSquares.push(7);
                numberOfMoves++
                break;
            case 8:
                document.getElementById('eight-o').style.display = 'block';
                obj[8] = 'o';
                availableSquares.splice(7 - numberOfMoves,1);
                filledSquares.push(8);
                numberOfMoves++
                break;
            case 9:
                document.getElementById('nine-o').style.display = 'block';
                obj[9] = 'o';
                availableSquares.splice(8 - numberOfMoves,1);
                filledSquares.push(9);
                numberOfMoves++
                break;
            }
        console.log(numberOfMoves)
    }
    else {
        document.getElementById('you-go').style.display = 'flex'
        document.getElementById('coin-toss-container').style.display = 'none'
        document.getElementById('ttt-container').style.display = 'flex'
    }
}

function checkGame(object) {
    var player = 'loser';
    var computer = 'loser';
    var gameBoard = Object.values(object);
    var diagonalUp = gameBoard[2] + gameBoard[4] + gameBoard[6];
    var diagonalDown = gameBoard[0] + gameBoard[4] + gameBoard[8];
    var leftUp = gameBoard[0] + gameBoard[3] + gameBoard[6];
    var middleUp = gameBoard[1] + gameBoard[4] + gameBoard[7];
    var rightUp = gameBoard[2] + gameBoard[5] + gameBoard[8];
    var wholeBoard = gameBoard.join('');
    console.log(diagonalUp)
    console.log(diagonalDown)
    console.log(player)
    console.log(computer)
    console.log(leftUp)
    console.log(middleUp)
    console.log(rightUp)
    console.log(wholeBoard)
    console.log(numberOfMoves)

    if (numberOfMoves >= 5) {
        if (wholeBoard.includes('ooo') || diagonalDown === 'ooo' || diagonalUp === 'ooo'
        || leftUp === 'ooo' || middleUp === 'ooo' || rightUp === 'ooo') {
            computer = 'winner';
        }
        else if (wholeBoard.includes('xxx') || diagonalDown === 'xxx' || diagonalUp === 'xxx'
        || leftUp === 'xxx' || middleUp === 'xxx' || rightUp === 'xxx') {
            player = 'winner';
        }
        if (numberOfMoves === 9 && player === 'winner' && computer === 'winner') {
            document.getElementById('cat').style.display = 'block';
            document.getElementById('retry').style.display = 'block';
            document.getElementById('ttt-container').style.display = 'none';
        }
        else if (player === 'winner') {
            document.getElementById('you-won').style.display = 'block';
            document.getElementById('you-won').style.display = 'none';
            document.getElementById('retry').style.display = 'block';
            document.getElementById('ttt-container').style.display = 'none';
        }
        else if (computer === 'winner') {
            document.getElementById('i-won').style.display = 'block';
            document.getElementById('you-won').style.display = 'none';
            document.getElementById('retry').style.display = 'block';
            document.getElementById('ttt-container').style.display = 'none';
        }
        else if (numberOfMoves === 9 && computer === 'loser' && player === 'loser') {
            document.getElementById('cat').style.display = 'block';
            document.getElementById('retry').style.display = 'block';
            document.getElementById('ttt-container').style.display = 'none';
        }
    }
}

function displayCoinToss() {
    window.location.reload();
    document.getElementById('i-won').style.display = 'none';
    document.getElementById('you-won').style.display = 'none';
    document.getElementById('cat').style.display = 'none';
}