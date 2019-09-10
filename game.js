s$(document).ready(function () {
    //here we set empty variable
       var lgNumb = "";
       var smNumb = "";
       var smNumbArray = [];
       var sumTotalArray = [];
       var wins = "";
       var loses = "";
    
       // this function generates the value of the larger number
       function lgNumbGen() {
          lgNumb = Math.floor(Math.random() * 101) + 19;
          console.log(lgNumb);
          $(".lg-rand").html(lgNumb);
       }
    
       //This function generates 4 smaller number and pushed them into an array
       function numbGenCaller() {
          function smNumbGen() {
             smNumb = Math.ceil(Math.random() * 12);
             console.log(smNumb);
             smNumbArray.push("+" + smNumb);
          }
          smNumbGen();
          smNumbGen();
          smNumbGen();
          smNumbGen();
       }
    
       //These two calls initialize the game 
       lgNumbGen();
       numbGenCaller();
       console.log(smNumbArray);
    
       // This function empties the arrays and sets current score value zero
       function resetValues() {
          smNumbArray = [];
          sumTotalArray = [];
          $(".sm-rand").html(0);
       }
    
       // This function listens for click for click of gems and pushes the value into a sum total array
       $(".crystal-btn").on("click", function () {
          if ($(this).attr("class") == "flip3D btn1 crystal-btn") {
             sumTotalArray.push(smNumbArray[0]);
          }
    
          if ($(this).attr("class") == "flip3D btn2 crystal-btn") {
             sumTotalArray.push(smNumbArray[1]);
          }
    
          if ($(this).attr("class") == "flip3D btn3 crystal-btn") {
             sumTotalArray.push(smNumbArray[2]);
          }
          if ($(this).attr("class") == "flip3D btn4 crystal-btn") {
             sumTotalArray.push(smNumbArray[3]);
    
          }
    
    // These two methods join the arrays and evaluates their mathematical value
          var sumTotalArrayJoined = sumTotalArray.join("")
          var sumTotalJoinedEval = eval(sumTotalArray.join(""));
    
    
          console.log(sumTotalJoinedEval);
          // document.querySelector(".sm-rand").innerHTML = sumTotalJoinedEval;
          $(".sm-rand").html(sumTotalJoinedEval);
    
          // This if statements handle winning and losing
          if (lgNumb == sumTotalJoinedEval && sumTotalJoinedEval != "") {
             console.log("We Won");
             alert("Congratulations. You Won!");
             wins++;
             $("#win-count").html(wins);
             console.log(wins);
             resetValues();
             lgNumbGen();
             numbGenCaller();
             console.log(smNumbArray);
          }
    
          if (lgNumb < sumTotalJoinedEval) {
                alert("sorry you lost");
             console.log("Sorry but you lost");
             loses++;
             $("#loss-count").html(loses);
             console.log(loses);
             resetValues();
             lgNumbGen();
             numbGenCaller();
          }
       });
    });
    // <!-- Hide show feature- The element will not take up any space when the display property set to "none". -->
    // <!-- How do I attach this to the score -->
    // <script>
    // function myFunction() {
    //   var x = document.getElementById("winner!");
    //   if (x.style.display === "none") {
    //     x.style.display = "block";
    //   } else {
    //     x.style.display = "none";
    //   }
    //   var x = document.getElementById("loser!");
    //   if (x.style.display === "none") {
    //     x.style.display = "block";
    //   } else {
    //     x.style.display = "none";
    //   }
    // }