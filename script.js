document.addEventListener("DOMContentLoaded", () => {
    let speech = new SpeechSynthesisUtterance();
    let voices = [];
    let voiceselect = document.querySelector("#voice-select");
    let textarea = document.querySelector("#input-textarea");
    let wordCount = document.querySelector("#word-count");
    let characterCount = document.querySelector("#character-count");
    let convertButton = document.querySelector("#convert-button");

    textarea.addEventListener("input", () => {
        characterCount.textContent = textarea.value.length;
        let text = textarea.value.trim();
        wordCount.textContent = text.split(/\s+/).filter((i) => i).length;
    });
// text count and character count logic above ||| 


    window.speechSynthesis.onvoiceschanged = () => {
        voices = window.speechSynthesis.getVoices();
        speech.voice = voices[0];
        voices.forEach((voice, i) => {
            voiceselect.options[i] = new Option(voice.name, i);
        });
    }

    voiceselect.addEventListener("change", () => {
        speech.voice = voices[voiceselect.value];
    });

    convertButton.addEventListener("click", () => {
        speech.text = textarea.value;
        window.speechSynthesis.speak(speech);
    });
});