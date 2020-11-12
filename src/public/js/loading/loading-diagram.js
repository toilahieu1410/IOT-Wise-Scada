$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeIn(45).delay(40).fadeTo(45, 0.5).fadeOut("slow");
  });
function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 700);

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

