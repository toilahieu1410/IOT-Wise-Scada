$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeIn(40).delay(30).fadeTo(35, 0.5).fadeOut("slow");
  });
function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 500);

    function checkReady() {
        if (document.getElementsByClassName('content-wrapper')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'flex' : 'none';
}
onReady(function () {
    show('content-wrapper', true);
    show('loadingspinner', false);
});

