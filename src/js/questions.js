import { Notify  } from 'notiflix/build/notiflix-notify-aio';

const questions = [
    {
        question: "Choose the primitive data type.",
        a: 'Object',
        b: 'Array',
        c: 'Number',
        d: 'No one',
        correct: "c",
    },

    {
        question: "What is a DOM?",
        a: 'Document Object Model',
        b: 'Browser Object Model',
        c: 'JavaScript Object Notation',
        d: 'Cascading Style Sheets',
        correct: "a",
    },

    {
        question: "What of this is a micro process?",
        a: 'SetTimeout',
        b: 'Map',
        c: 'Observer',
        d: 'SetInterval',
        correct: "c",
    },
    
    {
        question: "What of this is a macro process?",
        a: 'SetImmediate',
        b: 'Promise',
        c: 'Observer',
        d: 'AddEventListner',
        correct: "a",
    },
    
    {
        question: `What does not apply to "this"?`,
        a: 'Call',
        b: 'Filter',
        c: 'Apply',
        d: 'Bind',
        correct: "b",
    },
      
];

const aText = document.getElementById("a_text");
const bText = document.getElementById("b_text");
const cText = document.getElementById("c_text");
const dText = document.getElementById("d_text");
const questionName = document.querySelector(".question-title");
const button = document.querySelector("button")
const allInputs = [...document.querySelectorAll(".check-box")]
const quiz = document.querySelector(".quiz-window")

let numberOfQuestion = 0
let score = 0



function changeQuestion() {
    questionName.textContent = questions[numberOfQuestion].question
    aText.textContent = questions[numberOfQuestion].a
    bText.textContent = questions[numberOfQuestion].b
    cText.textContent = questions[numberOfQuestion].c
    dText.textContent = questions[numberOfQuestion].d
    numberOfQuestion += 1
}

changeQuestion()

button.addEventListener("click", submitting)

function submitting() {
    const answer = lookingforChecked()
    if (numberOfQuestion < questions.length) {
        if (answer !== undefined) {
            allInputs.forEach(item => item.checked = false)
            if (answer.id === questions[numberOfQuestion - 1].correct) score += 1;
            changeQuestion() 
        }
    }

    else {
        if (answer.id === questions[numberOfQuestion - 1].correct) score += 1
        resultFunction()
    } 
}

function lookingforChecked() {
    if (allInputs.find(item => item.checked === true) !== undefined) {
       return (allInputs.find(item => item.checked === true)); 
    }   

    else {
      Notify.failure("Choose the variant")
        return undefined
    }  
}

function resultFunction() {
    quiz.innerHTML = `<h2 class="result-title">Congratulations</h2>
    <p class="result-text">Your score is  ${score}/5</p>
    <button onClick="location.reload()" type="button" id="result-button" class="submit-button">Reset quiz</button>
    `
}

