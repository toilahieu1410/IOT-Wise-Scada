$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeIn(60).delay(55).fadeTo(30, 0.5).fadeOut("slow");
  });
function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 500);

    function checkReady() {
        if (document.getElementsByClassName('main-panel')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'flex' : 'none';
}
onReady(function () {
    show('main-panel', true);
    show('loadingspinner', false);
});

