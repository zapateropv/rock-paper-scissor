let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let record = document.getElementById("record");
let myP3 = document.getElementById("myP3");
let reset = document.getElementById("reset");
let myP4 = document.getElementById("myP4");
let bato = document.getElementById("bato");



document.getElementById("rock").onclick = function(){

    playGame("rock");


  
 }
 //PAPER BUTTON
 
 
 document.getElementById("paper").onclick = function   (){
 
     playGame("paper");


    
 
 }
 //SCISSOR BUTTON
 //
 
 document.getElementById("scissor").onclick = function  (){
 
     playGame("scissor");
 
     
 
 }
 
 document.getElementById("reset").onclick = function (){

document.getElementById("record").textContent = "Win: 0, Losses: 0, Tie: 0"

 }














 //usable functions
 


 let win = 0;
 let losses = 0;
 let tie = 0;
let result = " ";  
 function playGame(playerMove){
 
             const computerMove =  pickComputerMove();
 
    

             if (playerMove === 'rock'){
                 if(computerMove === "rock"){
                     tie++;
                     document.getElementById("myP3").textContent = "Tie";
                     
                 }
                 else if(computerMove === "paper"){
                   losses++;
                     document.getElementById("myP3").textContent = "You lose.";
                     
                 }
                 else if(computerMove === "scissor"){
                  win++;
                    document.getElementById("myP3").textContent = "You win.";
                    
                 }
              
                
              
  
             } else if(playerMove === "paper"){
                 if(computerMove === "rock"){
                    win++;
                     document.getElementById("myP3").textContent = "You win";
                     }
                     else if(computerMove === "paper"){
                     tie++;
                     document.getElementById("myP3").textContent = "Tie ";
                     }
                     else if(computerMove === "scissor"){
                        losses++;
                         document.getElementById("myP3").textContent = "You lose";
                     }
                    }
 
                     
                 else if (playerMove === "scissor"){              
                         if(computerMove === "rock"){
                             losses++;
                             document.getElementById("myP3").textContent = "You lose.";
                             }  
                         else if(computerMove === "paper"){
                            win++;
                             document.getElementById("myP3").textContent = "You win.";
                             }                       
                         else if(computerMove === "scissor"){
                                tie++;
                                 document.getElementById("myP3").textContent = "Tie.";
                             }     
                             
                             
                            
                             }
                            

             result = document.getElementById("record").textContent = `Win: ${win} Losses: ${losses} Tie: ${tie}`;
                             
            
              document.getElementById('myP4')
            .innerHTML =  `
             You
             <img src="${playerMove}-emoji.png" class="emoji" >
             <img src="${computerMove}-emoji.png" class="emoji" >
             Computer`;
          
 }
 
 
 
 
 
             function pickComputerMove (){
                 const randomNumber = Math.random();
 
                 let computerMove = " ";
 
                 if(randomNumber >= 0 && randomNumber < 1 / 3){
                         
                     computerMove = "rock";
                 }
 
                 else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3 ){
                     computerMove = "paper";
                 }
 
 
                 else if(randomNumber >= 2 / 3 && randomNumber < 1){
                     computerMove = "scissor";
                 }
 
 
 
                 
 
                 return computerMove;
 
 
 
 
             
             }