let query = document.querySelector('.query');
const api = 'https://api.exchangeretesapi.io/latest?base=TRY';

document.body.addEventListener('keypress', (e) =>{
    if(e.key == "Enter"){
        let url = "https://www.google.com/search?q="+query.value;
        window.open(url);
        
        const ara = document.getElementById('ara');
        ara.value.textContent = '';
    }
});

let sess = document.getElementById('ses');

sess.addEventListener('click', function(){
    var speech = true;
    window.SpeechRecognitionResult = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResult = true;

    recognition.addEventListener('result', e =>{
        const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)

        query.innerHTML = transcript;
    });

    if(speech == true){
        recognition.start; 
    }
});
