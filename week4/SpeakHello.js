(function (window) {
    var speakWord = "Hello";
    this.helloSpeaker = {
        speak: function (name) {
            console.log(speakWord + " " + name);
        }
    };
    window.helloSpeaker = helloSpeaker;
})(window);
