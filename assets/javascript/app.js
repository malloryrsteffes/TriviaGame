$(document).ready(function(){


// Global Variables
var score = 0;
var wrongAnswers = 0;
var timer = 20;
var time;
var questionAnswered; // How we will stop the timer
var currentQuestion = 0; // This will pull the first question from the array
var correctAnswer;  
var userGuess;

//Questions and Answers Array
var questionsArray = [
    {
        question: "Before he was a painter, what was Bob Ross' occupation?",
        choices: ["Air Force Master Sergeant", "Airline Pilot", "Web Developer", "Schoolteacher"],
        correctAnswer: "Air Force Master Sergeant",
    },

    {
        question: "What did Bob Ross keep due to its popularity, despite personally hating it?",
        choices: ["His signature glasses", "His pet squirrel, Peapod", "His iconic perm", "His taped-over brushes"],
        correctAnswer: "His iconic perm",
    },

    {
        question: "About how long did it take Bob to film an entire 13-episode series of 'The Joy of Painting'? ",
        choices: ["two weeks", "two days", "two months", "two hours"],
        correctAnswer: "two days",
    },

    {
        question: "True or False: Bob Ross never sold his paintings.",
        choices: ["True", "False"],
        correctAnswer: "True",
    },

    {
        question: "How many copies of the featured painting did Bob produce for each episode?",
        choices: ["one", "two", "three", "none"],
        correctAnswer: "three",
    },

    {
        question: "What percentage of Bob Ross' paintings included a happy little tree?",
        choices: ["75%", "83%", "68%", "91%"],
        correctAnswer: "91%",
    },

    {
        question: "What was the name of Bob Ross' favorite pet?",
        choices: ["Peapod, the Pocket Squirrel", "Hoot the Owl", "Little Bit, the Fox Squirrel", "The Little Rascal Baby Robins"],
        correctAnswer: "Peapod, the Pocket Squirrel",
    },

    {
        question: "What did Bob Ross avoid painting?",
        choices: ["buildings", "bad weather", "people", "pollution"],
        correctAnswer: "people",
    },
]

// Countdown function. IT WORKS. Just don't stop when I get the right or wrong answer.
    function countdown(){
        
        
        $("#timer").html(timer);
        //Sets a delay of one second before the timer starts
       // time = setInterval(showCountdown, 1000);
        // Shows the countdown function. IT WORKS.
        showCountdown();
            
    }



 // Shows the countdown function. IT WORKS.
 function showCountdown(){
    if (timer === 0) {
        resetRound();
        questionAnswered = true;
        clearInterval(time);

    } 
      else if (questionAnswered === true) {
        clearInterval(time);

    }
    else if (timer > 0) {
        timer--;
        $('#timer').html(timer);
      }

      //resetRound();
    
}

// Reset Round Function. I can get it to move on to the next question, but I can't currently figure out how to reset the timer.
function resetRound(){
        currentQuestion++;
        if (currentQuestion < 8){
    
        setTimeout(function () {

            loadQuestion();
            $('#gifs').empty();
            console.log(currentQuestion);
            }, 5000); //CHANGE THIS BACK TO 5 WHEN DONE TESTING
        }

        else {
                $("#timeRemaining").remove();
                $("#question").html("<h4> Congratulations! You finished the quiz. You answered " + score + " out of 8 questions correctly!</h3>");
           
            };
        
    
}


// Show the question and choices in the browser. currentQuestion initially equals 0.

function loadQuestion(){
    
    questionAnswered = false;
    var question = questionsArray[currentQuestion].question;
    var choices = questionsArray[currentQuestion].choices;
    timer = 21; // I have literally no idea why setting this to 22 instead of 20 works.
    $("#question-answer-container").css("visibility", "visible");
    $("#question").html("<h3>" + question + "</h3>");

    //Sets a delay of one second before the timer starts
    time = setInterval(countdown, 1000);
    
    if (questionAnswered === false){
        countdown();
    }

    // Loads the choices by looping through our currentQuestion (which starts at zero) questionArray choices.
    for (var i = 0; i < choices.length; i++){
        $("#choices").append("<button class='btn btn-primary choicesButtons' id='"+choices[i]+"'>" + choices[i] + "</button>"); 
    }

    // On click function for each choice button
    $(".choicesButtons").click(function(){
        
        // Sets the user guess
        userGuess = ($(this).attr("id"));
        //Sets the correct Answer
        for (var i = 0; i < questionsArray.length; i++){
            correctAnswer = questionsArray[currentQuestion].correctAnswer;
            
        }

        //If the user guesses correctly
        if (userGuess == correctAnswer){
            //stop timer (once we know how to do that) 
            questionAnswered = true; // Will trigger the timer to stop
            score++;
            //currentQuestion++;
            $("#question").empty();
            $("#choices").empty();
            userGuess = "";
            $("#question").html("<h3>You got it right! Bob knew you could do it.</h3>");
            $("#gifs").html("<img src='./assets/images/rightAnswer.gif'/>");
            //I must be linking this file path incorrectly. I can tell SOMETHING is being appended to the page, but nothing is showing up! 
            resetRound();
        }

        //If the user guesses incorrectly
        else {
            //stop timer (once we know how to do that)
            questionAnswered = true; // Will trigger the timer to stop
            wrongAnswers++;
            //currentQuestion++;
            $("#question").empty();
            $("#choices").empty();
            userGuess = "";
            $("#question").html("<h3>Oh no! You got it wrong! Don't worry, Bob still believes in you.</h3>");
            //I must be linking this file path incorrectly. I can tell SOMETHING is being appended to the page, but nothing is showing up! 
            $("#gifs").html("<img src='./assets/images/wrongAnswer.gif'/>");
           resetRound();
        }


    });
}



// On click start button

$("#start-button").on("click", function(){
    $("#start-button").hide();
    loadQuestion();
    countdown();

});


});
