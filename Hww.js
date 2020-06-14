var content = document.querySelector(".welcome"),
    button = document.querySelector(".start"),
    mainDiv = document.querySelector("#main"),
    timer = document.querySelector(".timer"),
    title = document.querySelector("h1");

function setTime() {
    // global w/o `var` keyword
    secondsLeft = 30;

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function createButtons() {
    // make global
    trueB1 = document.createElement("button");
    trueB1.textContent = "True";
    trueB1.setAttribute("class", "trueB1");
    mainDiv.appendChild(trueB1);

    // make global
    falseB1 = document.createElement("button");
    falseB1.textContent = "False";
    falseB1.setAttribute("class", "falseB1");
    mainDiv.appendChild(falseB1);
}

function sendMessage() {
    timer.textContent = "Time is UP!";
}

function firstQuestion() {
    title.textContent = "Question #1";
    content.textContent = "Hippos are blue";
    createButtons();
}

function secondQuestion() {
    title.textContent = "Question #2";
    content.textContent = "flamingos are pink";
    createButtons2();
}

function createButtons2() {
    trueB2 = document.createElement("button");
    trueB2.textContent = "True";
    trueB2.setAttribute("class", "trueB2");
    mainDiv.appendChild(trueB2);

    falseB2 = document.createElement("button");
    falseB2.textContent = "False";
    falseB2.setAttribute("class", "falseB2");
    mainDiv.appendChild(falseB2);
}

var correctAnswers = 0;
var incorrectAnswers = 0;


button.addEventListener("click", function () {

    this.style.display = "none";
    setTime();
    firstQuestion();

    trueB1.addEventListener("click", function () {
        correctAnswers++;
        // pageTwo ();
        this.style.display = 'none';
        falseB1.style.display = 'none';
        console.log(correctAnswer);
        secondQuestion(); 
    });

    falseB1.addEventListener("click", function () {
        incorrectAnswers++;
        // pageTwo();
        tureB1.style.display = 'none';
        this.style.display = 'none';
        console.log(incorrectAnswer);
        secondQuestion(); 
    });

    
    trueB2.addEventListener("click", function () {
        correctAnswers++;
        this.style.display = 'none';
        falseB2.style.display = 'none';
        console.log(correctAnswers);
    });


    falseB2.addEventListener("click", function () { 
        incorrectAnswers++;
        tureB2.style.display = 'none';
        this.style.display = 'none';
        console.log(incorrectAnswer); 
    });

});








// function pageTwo() {
//     title.textContent = "Question 2";
//     content.textContent = "Zebras are red";

//         var trueB2 = document.createElement("button");
//         trueB2.textContent = "Ture";
//         trueB2.setAttribute("class", ".trueB2");
//         mainDiv.appendChild(trueB2);
//         console.log(trueB2);

//         var flaseB2 = document.createElement("button");
//         flaseB2.textContent = "False";
//         flaseB2.setAttribute("class", "flaseB2");
//         mainDiv.appendChild(flaseB2);
//         console.log(flaseB2);
// }

// trueB2.addEventListener("click", function () {
//         incorrectAnswers++;
//         this.style.display = 'none';
//         pageThree();

//     });

//     flaseB2.addEventListener("click", function () {
//         correctAnswers++;
//         this.style.display = 'none';
//         pageThree();
//     });
//     //third page is loaded 
//     function pageThree() {
//         title.textContent = "Question 2";
//         content.textContent = "flamingos are pink";

//         var trueB3 = document.createElement("button");
//         trueB3.textContent = "Ture";
//         trueB3.setAttribute("class", ".trueB3");
//         mainDiv.appendChild(trueB3);
//         console.log(trueB3);

//         var flaseB3 = document.createElement("button");
//         flaseB3.textContent = "False";
//         flaseB3.setAttribute("class", "flaseB3");
//         mainDiv.appendChild(flaseB3);
//         console.log(flaseB3);
//     }

//     trueB3.addEventListener("click", function () {
//         correctAnswers++;
//         this.style.display = 'none';
//         finalPage();

//     });

//     flaseB3.addEventListener("click", function () {
//         incorrectAnswers++;
//         this.style.display = 'none';
//         console.log(incorrectAnswers);
//         finalPage();
//     });

//     function finalPage() {
//         title.textContent = "Well done you answered" + correctAnswers + "correct and" + incorrectAnswers + "incorrect";
//         content.textContent = "";
//         timer.textContent = "";
//     }
// });

// }