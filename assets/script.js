const button = document.querySelector(".talking")
const content = document.querySelector(".baseContent")
const picImage = document.querySelector(".pic")


function speaking(text) {
    const textSpeech = new SpeechSynthesisUtterance(text);

    textSpeech.rate = 1;
    textSpeech.volume = 1;
    textSpeech.pitch = 2;

    window.speechSynthesis.speak(textSpeech);
}
function TellMeTime() {
    let  day = new Date();
    let  hour = day.getHours();

    if (hour>= 0 && hour<12) {
        speaking("Good morning my G")
    }
    else if (hour> 12 && hour<18) {
        speaking("We in the middle of the day and you using me why?..")
    }
    else {
        speaking("good evening... you know you should be asleep right now..")
    }
}
window.addEventListener("load", () => {
    speaking("rebooting system..");
    TellMeTime()
})

picImage.addEventListener("click", () => {
    let words = ["what you doing", "you clicked on the image..",
     "wow", "do something else", "you can't keep bothering me like this", "leave me alone please", "are you done yet?",
     "are you having fun?"]
    const randomWords = words[Math.floor(Math.random() * words.length)]
    speaking(randomWords)
}
)

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const verified = new SpeechRecognition();

verified.onresult = (event) => {
   const thisIndex = event.resultIndex;
   const transcript = event.results[thisIndex][0].transcript;  //+ "..";
   content.textContent = transcript;
   takeCommand(transcript.toLowerCase());
}

button.addEventListener("click", () => {
    content.textContent = "listening....."
    verified.start();
})

function takeCommand(message) {
     if (message.includes("hi my big awesome friend")) {
        let words = ["hi my awesome mate", "hello there", "thats what i thought know your place"]
    const randomWords = words[Math.floor(Math.random() * words.length)]
        speaking(randomWords)
    }
    if (message.includes("hey") || (message.includes("hello")) || (message.includes("hola"))) {
        speaking("what are you doing just say something like google this, or like tell me about johnny depp")
    }
    
    if (message.includes("open google")) {
        window.open("https://google.com", "_blank")
        speaking("im opening google")
    }
    if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank")
        speaking("Youtube huh?... i'll open that app up.. i guess")
    }
    if (message.includes("open instagram")) {
        window.open("https://instagram.com", "_blank")
        speaking("why instagram?.. you know what i'll open it for you.")
    }
    if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank")
        speaking("facebook?.. really?.. i'll open it for you")
    }
    else if (message.includes("date") || (message.includes("what is today's date")) || (message.includes("today's date")) ) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalWords = "today's date is " + date;
        speaking(finalWords);
    }
    else if  (message.includes("what is") || message.includes("who is") || message.includes("where is") || message.includes("tell me about")
          || (message.includes("how"))   || (message.includes("when")) || (message.includes("google"))
    ) {

        let searchWords = message.replace("what is", "")
        .replace("who is", "")
        .replace("where is", "")
        .replace("tell me about", "")
        .replace("how", "")
        .replace("when", "")
        .replace("google", "")
        .replace("can you", "");

        searchWords = searchWords.trim();
        window.open(`https://www.google.com/search?q=${encodeURIComponent(searchWords)}`, "_blank");
        const finalWords = "This is what i found on the web involving " + searchWords;
        speaking(finalWords);
    }
    else if (message.includes("time") || (message.includes("what time is it"))) {
        const time =new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalWords = "the time is " + time;
        speaking(finalWords);
    }



  

}