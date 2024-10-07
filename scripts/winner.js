document.body.addEventListener("keypress", function(e) {
    if(e.key=="Enter") {
        document.getElementById("video").play();
    }
});