$(document).ready(function(){


// Global Variables
var score = 0;
var wrongAnswers = 0;
var timer = 20;
var timerOn = false;
var currentQuestion = 0 // This will pull the first question from the array
var correctAnswer;
var userGuess;

//Questions/Answers Array
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


// Show the question and choices in the browser. currentQuestion initially equals 0.

function loadQuestion(){
    var question = questionsArray[currentQuestion].question;
    var choices = questionsArray[currentQuestion].choices;
    console.log(question);
    console.log(choices);
    $("#question-answer-container").css("visibility", "visible");
    $("#question").html("<h3>" + question + "</h3>");

    // Loads the choices by looping through our currentQuestion questionArray choices.
    for (var i = 0; i < choices.length; i++){
        $("#choices").append("<button class='btn btn-primary choicesButtons' id='"+choices[i]+"'>" + choices[i] + "</button>"); 
        //I want to give each an ID of choices + [i]. Not sure if I can do that. Update: DID IT
    }

    $(".choicesButtons").click(function(){
        
        userGuess = ($(this).attr("id"));

        for (var i = 0; i < questionsArray.length; i++){
            correctAnswer = questionsArray[currentQuestion].correctAnswer;
            
        }

        console.log(correctAnswer);
        console.log(userGuess);

        if (userGuess == correctAnswer){
            //stop timer
            score++;
            currentQuestion++;
            $("#question").empty();
            $("#choices").empty();
            userGuess = "";
            $("#rightOrWrong").html("<p>You got it right! Bob knew you could do it.</p>");
            loadQuestion();
        }

        else {
            //stop timer
            wrongAnswers++;
            currentQuestion++
            $("#question").empty();
            $("#choices").empty();
            userGuess = "";
            $("#rightOrWrong").html("<p>Oh no! You got it wrong! Don't worry, Bob still believes in you.</p>");
            loadQuestion();
        }


    });
}



// On click start button

$("#start-button").on("click", function(){
    $("#start-button").hide();
    loadQuestion();
    //checkAnswers();
});


});
