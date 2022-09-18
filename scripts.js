
let i = Object.keys(localStorage);
if (i == 0){
    localStorage.setItem('user1', 'player1');
    localStorage.setItem('user2', 'player2');
    localStorage.setItem('user1point', 0);
    localStorage.setItem('user2point', 0);

}



var namep1localhost = localStorage.getItem('user1');
    var namep2localhost = localStorage.getItem('user2');
if (namep1localhost == 'player1' ||  namep2localhost == 'player2'){
        document.getElementById('play').style.visibility ='visible';
}else{
    document.getElementById('play').style.visibility = 'hidden';
    document.getElementById('names').style.visibility = 'visible';
    document.getElementById('board').style.visibility = 'visible';
}




//Variables
//input player name
var namep1 = document.getElementById('player1').value;

var namep2 = document.getElementById('player2').value;
//Registration of movements and recognition of the winner
var check_winner = [
    p1 = 0 ,
    p2 = 0 , 
    p3 = 0 , 
    p4 = 0 ,
    p5 = 0 ,
    p6 = 0 ,
    p7 = 0 ,
    p8 = 0 ,
    p9 = 0 , 
]
//The number of sections selected on the game board
var check = [true,false,false,false,false,false,false,false,false,false,]
//If it was 0, X must play, if it wasn't, O 
var xo = 0;
//Writes the turn 
var playerturn = document.getElementById('turn'); 
//A message is displayed
var alertgame = document.getElementById('alert'); 
//if all var check it's true the number equal 10 and try again game
let number ;




//Functions


//Start button to ready the game


document.getElementById('namep1').innerHTML += localStorage.getItem('user1');

document.getElementById('namep2').innerHTML += localStorage.getItem('user2');
document.getElementById('namep1point').innerHTML = localStorage.getItem('user1point');

document.getElementById('namep2point').innerHTML = localStorage.getItem('user2point');
function setlocalstorage(){
    namep1 = document.getElementById('player1').value;

    namep2 = document.getElementById('player2').value;
    console.log(namep1);

    localStorage.setItem('user2', namep2);
    localStorage.setItem('user1', namep1);
    location.reload();
    
/*
    document.getElementById('play').style.visibility = 'hidden';
    document.getElementById('names').style.visibility = 'visible';
    document.getElementById('board').style.visibility = 'visible';
    */
    
    /*
    
    

    if (namep1 == ''){
        document.getElementById('namep1').innerHTML += 'Player1';
        namep1 = 'Player1'
    }else{
        document.getElementById('namep1').innerHTML += namep1;
    }
    if (namep2 == ''){
        document.getElementById('namep2').innerHTML += 'Player2';
        namep1 = 'Player2'
    }else{
        document.getElementById('namep2').innerHTML += namep2;
    }
    document.getElementById('play').style.visibility = 'hidden';
    document.getElementById('names').style.visibility = 'visible';
    document.getElementById('board').style.visibility = 'visible';
*/

}



function play(a){
    
    
    if (check[parseInt(a.id)] == true) {
        alertgame.innerHTML = 'WTF!';
        alertgame.style.visibility = 'visible';

        setTimeout(function(){ alertgame.style.visibility = 'hidden'; }, 1000);
    
    }else{
        if (xo == 0){
            document.getElementById(a.id).innerHTML = 'O';
            check_winner[parseInt(a.id)] = 1;
            xo = 1;
            document.getElementById(a.id).style.backgroundColor = 'blue';
            document.getElementById(a.id).style.color = 'white';
            playerturn.style.backgroundColor = 'red';
            playerturn.innerHTML = "Player X's turn";
        }else{
            document.getElementById(a.id).innerHTML = 'X';
            check_winner[parseInt(a.id)] = 2;
            xo = 0;
            document.getElementById(a.id).style.backgroundColor = 'red';
            document.getElementById(a.id).style.color = 'white';
            playerturn.style.backgroundColor = 'blue';
            playerturn.innerHTML = "Player O's turn";
        }
        
        check[parseInt(a.id)] = true;
    }
    number = 0;
    for (let i = 0;i < 10; i++){
        
        console.log(number+'----')
        if (check[i] == true){
            number++;
        }
        if (number == 9){
            alertgame.innerHTML = ' Play again!';
            setTimeout(function(){ location.reload(); }, 1000);
            

        }

    }
    if (check_game() == 'win'){
        if (xo == 1){
            var int = localStorage.getItem('user1point');
            localStorage.setItem('user1point', parseInt(int)+1);
            
        }
        if (xo == 0){
            var int = localStorage.getItem('user2point');
            localStorage.setItem('user2point', parseInt(int)+1);
            
        }
    }
    
}
document.getElementsByClassName('q1').innerHTML = '1';
//Always check who wins
function check_game(){
    
    var userO = 1;
    var userX = 2;
    if (check_winner[1] == userO && check_winner[2]== userO && check_winner[3] == userO){
        alertgame.innerHTML = namep1 + ' WIN!';
        
        alertgame.style.visibility = 'visible';
        alertgame.style.backgroundColor = 'green';
        document.getElementById('names').style.visibility = 'hidden';
        document.getElementById('board').style.visibility = 'hidden';
        setTimeout(function(){ location.reload(); }, 1000);
        return 'win';
       
        
        
        
    }
    if (check_winner[1] == userX && check_winner[2]== userX && check_winner[3] == userX){
        alertgame.innerHTML = namep2 + ' WIN!';
        
        alertgame.style.visibility = 'visible';
        alertgame.style.backgroundColor = 'green';
        document.getElementById('names').style.visibility = 'hidden';
        document.getElementById('board').style.visibility = 'hidden';
        setTimeout(function(){ location.reload(); }, 1000);
        return 'win';
    }
    if (check_winner[4] == userO && check_winner[5]== userO && check_winner[6] == userO){
        alertgame.innerHTML = namep1 + ' WIN!';
        
        alertgame.style.visibility = 'visible';
        alertgame.style.backgroundColor = 'green';
        document.getElementById('names').style.visibility = 'hidden';
        document.getElementById('board').style.visibility = 'hidden';
        setTimeout(function(){ location.reload(); }, 1000);
        return 'win';
    }
    if (check_winner[4] == userX && check_winner[5]== userX && check_winner[6] == userX){
        alertgame.innerHTML = namep2 + ' WIN!';
        
        alertgame.style.visibility = 'visible';
        alertgame.style.backgroundColor = 'green';
        document.getElementById('names').style.visibility = 'hidden';
        document.getElementById('board').style.visibility = 'hidden';
        setTimeout(function(){ location.reload(); }, 1000);
        return 'win';
    }
    if (check_winner[7] == userO && check_winner[8]== userO && check_winner[9] == userO){
        alertgame.innerHTML = namep1 + ' WIN!';
        
        alertgame.style.visibility = 'visible';
        alertgame.style.backgroundColor = 'green';
        document.getElementById('names').style.visibility = 'hidden';
        document.getElementById('board').style.visibility = 'hidden';
        setTimeout(function(){ location.reload(); }, 1000);
        return 'win';
    }
    if (check_winner[8] == userX && check_winner[7]== userX && check_winner[9] == userX){
        alertgame.innerHTML = namep2 + ' WIN!';
        
        alertgame.style.visibility = 'visible';
        alertgame.style.backgroundColor = 'green';
        document.getElementById('names').style.visibility = 'hidden';
        document.getElementById('board').style.visibility = 'hidden';
        setTimeout(function(){ location.reload(); }, 1000);
        return 'win';
    }
    if (check_winner[4] == userO && check_winner[1]== userO && check_winner[7] == userO){
        alertgame.innerHTML = namep1 + ' WIN!';
        
        alertgame.style.visibility = 'visible';
        alertgame.style.backgroundColor = 'green';
        document.getElementById('names').style.visibility = 'hidden';
        document.getElementById('board').style.visibility = 'hidden';
        setTimeout(function(){ location.reload(); }, 1000);
        return 'win';
    }
    if (check_winner[4] == userX && check_winner[1]== userX && check_winner[7] == userX){
        alertgame.innerHTML = namep2 + ' WIN!';
        
        alertgame.style.visibility = 'visible';
        alertgame.style.backgroundColor = 'green';
        document.getElementById('names').style.visibility = 'hidden';
        document.getElementById('board').style.visibility = 'hidden';
        setTimeout(function(){ location.reload(); }, 1000);
        return 'win';
    }
    if (check_winner[2] == userO && check_winner[5]== userO && check_winner[8] == userO){
        alertgame.innerHTML = namep1 + ' WIN!';
        
        alertgame.style.visibility = 'visible';
        alertgame.style.backgroundColor = 'green';
        document.getElementById('names').style.visibility = 'hidden';
        document.getElementById('board').style.visibility = 'hidden';
        setTimeout(function(){ location.reload(); }, 1000);
        return 'win';
    }
    if (check_winner[2] == userX && check_winner[5]== userX && check_winner[8] == userX){
        alertgame.innerHTML = namep2 + ' WIN!';
        
        alertgame.style.visibility = 'visible';
        alertgame.style.backgroundColor = 'green';
        document.getElementById('names').style.visibility = 'hidden';
        document.getElementById('board').style.visibility = 'hidden';
        setTimeout(function(){ location.reload(); }, 1000);
        return 'win';
    }
    if (check_winner[3] == userO && check_winner[6]== userO && check_winner[9] == userO){
        alertgame.innerHTML = namep1 + ' WIN!';
        
        alertgame.style.visibility = 'visible';
        alertgame.style.backgroundColor = 'green';
        document.getElementById('names').style.visibility = 'hidden';
        document.getElementById('board').style.visibility = 'hidden';
        setTimeout(function(){ location.reload(); }, 1000);
        return 'win';
    }
    if (check_winner[3] == userX && check_winner[9]== userX && check_winner[6] == userX){
        alertgame.innerHTML = namep2 + ' WIN!';
        
        alertgame.style.visibility = 'visible';
        alertgame.style.backgroundColor = 'green';
        document.getElementById('names').style.visibility = 'hidden';
        document.getElementById('board').style.visibility = 'hidden';
        setTimeout(function(){ location.reload(); }, 1000);
        return 'win';
    }
    if (check_winner[1] == userO && check_winner[5]== userO && check_winner[9] == userO){
        alertgame.innerHTML = namep1 + ' WIN!';
        
        alertgame.style.visibility = 'visible';
        alertgame.style.backgroundColor = 'green';
        document.getElementById('names').style.visibility = 'hidden';
        document.getElementById('board').style.visibility = 'hidden';
        setTimeout(function(){ location.reload(); }, 1000);
        return 'win';
    }
    if (check_winner[1] == userX && check_winner[5]== userX && check_winner[9] == userX){
        alertgame.innerHTML = namep2 + ' WIN!';
        
        alertgame.style.visibility = 'visible';
        alertgame.style.backgroundColor = 'green';
        document.getElementById('names').style.visibility = 'hidden';
        document.getElementById('board').style.visibility = 'hidden';
        setTimeout(function(){ location.reload(); }, 1000);
        return 'win';
    }
    if (check_winner[7] == userO && check_winner[3]== userO && check_winner[5] == userO){
        alertgame.innerHTML = namep1 + ' WIN!';
        
        alertgame.style.visibility = 'visible';
        alertgame.style.backgroundColor = 'green';
        document.getElementById('names').style.visibility = 'hidden';
        document.getElementById('board').style.visibility = 'hidden';
        setTimeout(function(){ location.reload(); }, 1000);
        return 'win';
    }
    if (check_winner[7] == userX && check_winner[3]== userX && check_winner[5] == userX){
        alertgame.innerHTML = namep2 + ' WIN!';
        
        alertgame.style.visibility = 'visible';
        alertgame.style.backgroundColor = 'green';
        document.getElementById('names').style.visibility = 'hidden';
        document.getElementById('board').style.visibility = 'hidden';
        setTimeout(function(){ location.reload(); }, 1000);
        return 'win';
    }
    
}


function resetname(){
    localStorage.setItem('user1', 'player1');
    localStorage.setItem('user2', 'player2');
    location.reload();
}
function resetpoint(){
    localStorage.setItem('user1point', 0);
    localStorage.setItem('user2point', 0);
    location.reload();
}