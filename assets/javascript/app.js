$(document).ready(function() {

    // Array of our trivia questions with true or false answers
    var triviaQuestions = [
        { 
            question: "There are 365 days in a year.",
            choices: ["True", "False"],
            answer: 0,
            photo: ""
        },
        { 
            question: "On a farm, a kid is a baby goat.", 
            choices: ["True", "False"],
            answer: 0,
            photo: ""
        },
        { 
            question: "There are 4 colors in a rainbow.",
            choices: ["True", "False"],
            answer: 1,
            photo: ""
        },
        { 
            question: "The Italian city Pisa is famous for its leaning tower.",
            choices: ["True", "False"], 
            answer: 0,
            photo: ""
        },
        { 
            question: "The cowboy from Toy Story is named Whoopie.",
            choices: ["True", "False"], 
            answer: 1,
            photo: ""
        },
        { 
            question: "Pharoah is the title given to the leader of the United States of America.",
            choices: ["True", "False"],
            answer: 1,
            photo: ""
        },
        { 
            question: "Baloo was the name of the bear in The Jungle Book.",
            choices: ["True", "False"], 
            answer: 0,
            photo: ""
        },
        {
            question: "The 70+-year-old mother of Hideo Kojima, creator of the Metal Gear Solid series, played completely through Metal Gear Solid 3.",
            choices: ["True", "False"],
            answer: 0,
            photo: ""
        },
        { 
            question: "Chicago is the third largest city in the United States.",
            choices: ["True", "False"], 
            answer: 0,
            photo: ""
        },
        { 
            question: "You are great and cool.",
            choices: ["True", "False"], 
            answer: 0,
            photo: ""
        },
    ];

    // Global question/quiz variables
    var timeCounter = 30;
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unansweredQuestions = 0;
    var totalQuestions = triviaQuestions.length;
    var intervalId;
    var userGuess = "";
    var running = false;
    var pick;
    var index;
    var newArray= [];
    var holder = [];

    // Renders questions on the screen
    function renderQuestions() {
        for (i = 0; i <= triviaQuestions.length; i++) {
            $("#trivia-section").append(triviaQuestions[i]);
        };
    };

    function renderButtons() {
        
    };

    function runTimer() {
        if (!running){
            intervalId = setInterval(countDown, 1000);
            running = true;
        }
    };

    function countDown() {
        $("#timer").html(`<h3>Time Remaining: ${timeCounter}</h3>`);
        timeCounter--;

        if (timeCounter === 0) {
            running = false;
            gameOverScreen();
        };
    };

    function updateScore() {

    };

    function gameOverScreen() {
        $("#trivia-section").empty();
        $("#game-over-screen").append(`Correct Answers: ${correctAnswers}`);
        $("#game-over-screen").append(`Wrong Answers: ${wrongAnswers}`);
        $("#game-over-screen").append(`Unanswered Questions: ${unansweredQuestions}`);
    };

});