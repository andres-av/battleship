// Variable Declarations: Gameboard and ships
const gameBoard = 
[
[0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0] , 
[0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0] ,
[0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0] ,
[0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0] ,
[0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0] ,
[0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0] ,
[0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0] ,
[0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0] ,
[0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0] ,
[0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0] ,
];

const ship2 = ["s2","s2"];
const ship3 = ["s3","s3","s3"];
const ship4 = ["s4","s4","s4","s4"];
const ship5 = ["s5","s5","s5","s5","s5"];
const ship6 = ["s6","s6","s6","s6","s6","s6"];
// End of variable Declarations: Gameboard and ships

// Function placeShips, places a given ship on the gameboard based on X and Y axis coordinates and the direction of the ship
const placeShips = (ship, yCoor, xCoor, direction) => {
    if(direction.toLowerCase() === "right"){
        gameBoard[yCoor].splice([xCoor], ship.length , ...ship);
    } 
    else if(direction.toLowerCase() === "down"){
        ship.forEach(element => {
            for(i = yCoor; i < ship.length+yCoor; i++){
                gameBoard[i].splice([xCoor], 1 , element);
            }
        });    
    }
    return gameBoard;
};
// End of unction placeShips

// Level declarations, placing all the ships on the gameboard

const level1 = () => {
    let gameboard1 = gameBoard
    placeShips(ship2, 0, 8, 'right');
    placeShips(ship3, 0, 1, 'down');
    placeShips(ship3, 0, 1, 'down');
    placeShips(ship4, 3, 6, 'right');
    placeShips(ship5, 4, 0, 'down');
    placeShips(ship6, 9, 3, 'right');
    return gameboard1
}
// End of level declarations

// Insert gameboard into HTML

// End of Insert gameboard into HTML

console.log(level1());


