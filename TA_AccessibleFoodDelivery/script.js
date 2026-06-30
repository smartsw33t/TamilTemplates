// Web Speech API மூலம் பேச வைக்கும் செயல்பாடு
function speak(text) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = 'ta-IN'; // தமிழ் மொழி
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
}

// உணவைத் தேர்ந்தெடுக்கும்போது அறிவித்தல்
function addToCart(itemName, price) {
    const message = `${itemName} கூடையில் சேர்க்கப்பட்டது. இதன் விலை ${price} ரூபாய்.`;
    speak(message);
    alert(message);
}

// Razorpay கட்டண முறை
function handlePayment() {
    speak("கட்டணப் பக்கத்திற்குச் செல்கிறீர்கள். தயவுசெய்து காத்திருக்கவும்.");
    
    var options = {
        "key": "YOUR_RAZORPAY_KEY", // உங்கள் Razorpay Key இங்கே வர வேண்டும்
        "amount": "8000", // பைசாவில் (8000 = 80 ரூபாய்)
        "currency": "INR",
        "name": "சுவை உணவகம்",
        "handler": function (response){
            speak("பணம் வெற்றிகரமாகச் செலுத்தப்பட்டது. நன்றி!");
        }
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
}

// கீபோர்டு நேவிகேஷன் போது தலைப்புகளை வாசிக்க
document.querySelectorAll('.food-item').forEach(item => {
    item.addEventListener('focus', () => {
        const title = item.querySelector('h2').innerText;
        const price = item.querySelector('p').innerText;
        speak(`${title}, ${price}`);
    });
});