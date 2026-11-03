// -----------------------------FAQ------------------------------
let questions = document.querySelectorAll(".q");

questions.forEach(function(question) {
 
    question.addEventListener("click", function() {
     
        let answer = question.nextElementSibling;
        
    
        answer.classList.toggle("show");
        
    });
});


// =====================================email enter=====================================================


let emailBox = document.querySelector("#emailenter");
let emailStart = document.querySelector("#emailstart");
let outputMessage = document.querySelector("#outputmessage");


emailStart.addEventListener("click", function() {
    let email = emailBox.value;
    
    outputMessage.classList.add("showmessage");

    if (email === "") {
        outputMessage.style.color = "#ffa00a"; 
        outputMessage.textContent = "Please enter a valid email address.";
    } else {
        outputMessage.style.color = "#ecefed"; 
        outputMessage.textContent = "Thank you! Welcome to Netflix, " + email;
    }
});

// -----------------------------scroll down effect-------------------------------------

let navbar = document.querySelector("#top");


window.addEventListener("scroll", function() {
  
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// ------------------------------------------------------------Language chager-----------------------------------------

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en', 
        includedLanguages: 'en,ur,hi,ar,de', 
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}