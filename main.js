Webcam.set({
    width:350,
    height:300,
    image_format: "png",
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
});
}

console.log('ml5 version: ',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Y26-dJbcK/model.json');

function modelLoaded() {
    console.log('Model has been Loaded!');
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "Prediction 1 - " + prediction_1;
    speak_data_2 = "Prediction 2 - " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}